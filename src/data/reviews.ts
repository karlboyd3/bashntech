/**
 * Client reviews shown by src/components/Reviews.tsx (home page and /work).
 *
 * Only add real reviews, worded exactly as the client wrote them, with their
 * permission to be named. The section renders nothing while this list is empty.
 */
export type Review = {
  quote: string
  /** Reviewer's name as they agreed to be credited ("Chico R."). */
  name: string
  /** Their business and/or role ("Owner, Chico's Chili"). */
  business: string
  /** Optional link to their live site. */
  url?: string
}

export const reviews: Review[] = []
