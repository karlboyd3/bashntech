"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, CheckCircle2, Loader2, AlertCircle } from "lucide-react"
import { submitAuditRequest } from "@/app/actions/submitAudit"
import { auditSchema, businessTypes, AUDIT_LIMITS, type AuditFormData } from "@/lib/auditSchema"

// Disable Zod v4's JIT validator compilation. By default Zod probes for
// runtime code-generation support via `new Function("")`, which trips the
// strict Content-Security-Policy `eval` directive (we intentionally do NOT
// allow 'unsafe-eval') and surfaces as a CSP violation in the browser. The
// jitless interpreter path performs identical validation without the probe.
// Must run before the first schema parse (Zod memoises the probe result).
z.config({ jitless: true })

type FormData = AuditFormData

export default function AuditForm() {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(auditSchema) })

  const onSubmit = async (data: FormData) => {
    setServerError(null)
    try {
      await submitAuditRequest({
        name: data.name,
        email: data.email,
        website: data.website || undefined,
        businessType: data.businessType,
        message: data.message || undefined,
      })
      setSubmitted(true)
      reset()
    } catch (err) {
      setServerError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      )
    }
  }

  const inputClass =
    "w-full bg-slate-900/80 border border-sky-500/20 focus:border-sky-500/60 text-white placeholder-slate-500 rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 focus:ring-1 focus:ring-sky-500/30"

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center gap-4 py-12 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-sky-500/15 border border-sky-500/30 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-sky-400" />
            </div>
            <h3 className="text-white text-xl font-bold">Request Sent!</h3>
            <p className="text-slate-400 text-sm max-w-xs">
              We&apos;ll review your site and get back to you within 1 business
              day with your free audit report.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="text-sky-400 hover:text-sky-300 text-sm underline underline-offset-2 transition-colors mt-2"
            >
              Submit another request
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            aria-label="Free website audit request"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="audit-name"
                className="text-slate-300 text-xs font-medium uppercase tracking-wide"
              >
                Your Name *
              </label>
              <input
                {...register("name")}
                id="audit-name"
                type="text"
                maxLength={AUDIT_LIMITS.name}
                autoComplete="name"
                aria-required="true"
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "audit-name-error" : undefined}
                placeholder="John Smith"
                className={inputClass}
              />
              {errors.name && (
                <span id="audit-name-error" role="alert" className="text-red-400 text-xs">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="audit-email"
                className="text-slate-300 text-xs font-medium uppercase tracking-wide"
              >
                Email Address *
              </label>
              <input
                {...register("email")}
                id="audit-email"
                type="email"
                maxLength={AUDIT_LIMITS.email}
                inputMode="email"
                autoComplete="email"
                aria-required="true"
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "audit-email-error" : undefined}
                placeholder="john@yourbusiness.com"
                className={inputClass}
              />
              {errors.email && (
                <span id="audit-email-error" role="alert" className="text-red-400 text-xs">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Website */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="audit-website"
                className="text-slate-300 text-xs font-medium uppercase tracking-wide"
              >
                Current Website
              </label>
              <input
                {...register("website")}
                id="audit-website"
                type="url"
                maxLength={AUDIT_LIMITS.website}
                inputMode="url"
                autoComplete="url"
                aria-invalid={errors.website ? "true" : "false"}
                aria-describedby={errors.website ? "audit-website-error" : undefined}
                placeholder="https://yourbusiness.com"
                className={inputClass}
              />
              {errors.website && (
                <span id="audit-website-error" role="alert" className="text-red-400 text-xs">
                  {errors.website.message}
                </span>
              )}
            </div>

            {/* Business Type */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="audit-business-type"
                className="text-slate-300 text-xs font-medium uppercase tracking-wide"
              >
                Business Type *
              </label>
              <select
                {...register("businessType")}
                id="audit-business-type"
                autoComplete="off"
                aria-required="true"
                aria-invalid={errors.businessType ? "true" : "false"}
                aria-describedby={
                  errors.businessType ? "audit-business-type-error" : undefined
                }
                className={`${inputClass} cursor-pointer`}
                defaultValue=""
              >
                <option value="" disabled className="bg-slate-900 text-slate-500">
                  Select your industry
                </option>
                {businessTypes.map((type) => (
                  <option key={type} value={type} className="bg-slate-900 text-white">
                    {type}
                  </option>
                ))}
              </select>
              {errors.businessType && (
                <span
                  id="audit-business-type-error"
                  role="alert"
                  className="text-red-400 text-xs"
                >
                  {errors.businessType.message}
                </span>
              )}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5 sm:col-span-2">
              <label
                htmlFor="audit-message"
                className="text-slate-300 text-xs font-medium uppercase tracking-wide"
              >
                Anything else we should know? (optional)
              </label>
              <textarea
                {...register("message")}
                id="audit-message"
                maxLength={AUDIT_LIMITS.message}
                autoComplete="off"
                rows={3}
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={errors.message ? "audit-message-error" : undefined}
                placeholder="Tell us about your biggest challenge or what you're trying to improve..."
                className={`${inputClass} resize-none`}
              />
              {errors.message && (
                <span id="audit-message-error" role="alert" className="text-red-400 text-xs">
                  {errors.message.message}
                </span>
              )}
            </div>

            {/* Server error */}
            {serverError && (
              <div className="sm:col-span-2 flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                <span className="text-red-400 text-sm">{serverError}</span>
              </div>
            )}

            {/* Submit */}
            <div className="sm:col-span-2">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="group w-full flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 disabled:from-sky-800 disabled:to-blue-800 text-white py-3.5 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-sky-500/25 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending Request...
                  </>
                ) : (
                  <>
                    Request My Free Audit
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </motion.button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
