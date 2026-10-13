"use server"

import { createServerClient } from "@/lib/supabase"
import { Resend } from "resend"
import { auditSchema } from "@/lib/auditSchema"

interface AuditRequestData {
  name: string
  email: string
  website?: string
  businessType: string
  interest: string
  message?: string
}

// Visitor input is interpolated into the notification email's HTML.
function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

export async function submitAuditRequest(input: AuditRequestData) {
  // Re-validate on the server so field limits hold even when the client-side
  // form validation is bypassed.
  const parsed = auditSchema.safeParse({
    ...input,
    website: input.website ?? "",
    message: input.message ?? "",
  })

  if (!parsed.success) {
    throw new Error("Invalid form submission. Please check your entries and try again.")
  }

  const data = {
    ...parsed.data,
    name: escapeHtml(parsed.data.name),
    email: escapeHtml(parsed.data.email),
    website: escapeHtml(parsed.data.website),
    message: parsed.data.message ? escapeHtml(parsed.data.message) : "",
  }
  const supabase = createServerClient()

  // Save to Supabase (non-blocking — email still sends if this fails)
  const { error: dbError } = await supabase.from("audit_requests").insert({
    name: data.name,
    email: data.email,
    website: data.website || null,
    business_type: data.businessType,
    message: `[Interested in: ${parsed.data.interest}] ${parsed.data.message ?? ""}`.trim(),
  })

  if (dbError) {
    console.error("Supabase insert error:", dbError)
  }

  // Send notification email
  const resend = new Resend(process.env.RESEND_API_KEY)

  const { error: emailError } = await resend.emails.send({
    from: "BashNTech <notifications@bashntech.com>",
    to: process.env.NOTIFICATION_EMAIL ?? "karl.boyd003@gmail.com",
    subject: `New Lead: ${parsed.data.name} — ${data.interest} (${data.businessType})`,
    html: `
      <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto;">
        <div style="background: #0A0F1E; padding: 24px; border-radius: 12px 12px 0 0;">
          <h1 style="color: #38BDF8; margin: 0; font-size: 20px;">New Website Audit Request</h1>
        </div>
        <div style="background: #f8fafc; padding: 24px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px; width: 130px;">Name</td>
              <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #0EA5E9;">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px;">Website</td>
              <td style="padding: 8px 0; color: #0f172a;">${data.website ? `<a href="${data.website}" style="color: #0EA5E9;">${data.website}</a>` : "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px;">Interested In</td>
              <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${data.interest}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px;">Business Type</td>
              <td style="padding: 8px 0; color: #0f172a;">${data.businessType}</td>
            </tr>
            ${data.message ? `
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 13px; vertical-align: top;">Message</td>
              <td style="padding: 8px 0; color: #0f172a;">${data.message}</td>
            </tr>` : ""}
          </table>
          <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #e2e8f0; color: #94a3b8; font-size: 12px;">
            Submitted via BashNTech.com — view all leads in your <a href="https://supabase.com/dashboard" style="color: #0EA5E9;">Supabase dashboard</a>
          </div>
        </div>
      </div>
    `,
  })

  if (emailError) {
    console.error("Resend send error:", emailError)
  }

  // Resend reports failures in its return value rather than throwing, so
  // without this check a lead that reached neither the DB nor the inbox
  // would still show the visitor a success message.
  if (dbError && emailError) {
    throw new Error(
      "Sorry, your request didn't go through. Please email karl.boyd003@gmail.com directly."
    )
  }

  return { success: true }
}
