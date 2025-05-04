// app/tv-wall-mounting/quote/success/page.tsx

import Link from "next/link";

export default function SuccessPage() {
  return (
    <>
      <h1>Request Submitted</h1>
      <p className="mt-6 mb-8 max-w-2xl text-lg font-normal text-gray-500 dark:text-gray-300">
        Thanks for reaching out to South Jordan Smart Home. We’ve received your
        TV Wall Mounting quote request and will get back to you within 24 hours.
      </p>
      <p className="mb-8 text-sm text-gray-600 dark:text-gray-400">
        We take privacy seriously. Your information will only be used to respond
        to your request.
      </p>
      <Link
        href="/"
        className="inline-block rounded-lg bg-blue-700 px-6 py-3 text-white hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700"
      >
        Return to Homepage
      </Link>
    </>
  );
}
