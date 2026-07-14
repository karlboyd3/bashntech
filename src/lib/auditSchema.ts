import { z } from "zod"

// Shared between the client form (AuditForm) and the server action
// (submitAudit) so limits are enforced even if the client is bypassed.
export const AUDIT_LIMITS = {
  name: 100,
  email: 254,
  website: 200,
  message: 1000,
} as const

export const businessTypes = [
  "Contractor / Trades",
  "Restaurant / Food",
  "Auto Shop",
  "Landscaping",
  "Home Services",
  "Repair Shop",
  "Retail",
  "Healthcare / Medical",
  "Other Local Business",
] as const

export const auditSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(AUDIT_LIMITS.name, `Name must be ${AUDIT_LIMITS.name} characters or less`),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(AUDIT_LIMITS.email, `Email must be ${AUDIT_LIMITS.email} characters or less`),
  website: z
    .string()
    .url("Please enter a valid URL (include https://)")
    .max(AUDIT_LIMITS.website, `Website URL must be ${AUDIT_LIMITS.website} characters or less`)
    .or(z.literal("")),
  businessType: z.enum(businessTypes, { message: "Please select your business type" }),
  message: z
    .string()
    .max(AUDIT_LIMITS.message, `Message must be ${AUDIT_LIMITS.message} characters or less`)
    .optional(),
})

export type AuditFormData = z.infer<typeof auditSchema>
