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

export const reviews: Review[] = [
  {
    // Excerpted from the public 5-star Google review, wording unchanged.
    quote:
      "I couldn't be happier with the incredible website BashNTech created for my company, Chico's Chili! From start to finish, their attention to detail was second to none. … What truly set them apart was their outstanding customer service—they were responsive, knowledgeable, and genuinely cared about delivering the best possible product.",
    name: "Bryant Bolden",
    business: "Owner, Chico's Chili",
    url: "https://chicoschili.com",
  },
]
