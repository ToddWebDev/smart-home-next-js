import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | South Jordan Smart Home",
  description:
    "Learn about South Jordan Smart Home — your trusted local partner for smart home installations in South Jordan, Utah.",
};
export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-6">About Us</h1>

      <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
        At South Jordan Smart Home, we specialize in helping families and
        homeowners create smarter, more connected living spaces.
      </p>

      <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
        Founded locally in South Jordan, Utah, we focus on delivering
        high-quality, personalized smart home installations at competitive
        prices. Whether you need a TV professionally mounted, smart lighting
        installed, or a full home automation setup, we&apos;re here to make the
        process simple, affordable, and reliable.
      </p>

      <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
        We proudly offer services designed to integrate with the smart home
        ecosystems you already love—whether that&apos;s Apple HomeKit, Amazon
        Alexa, or Google Home. Our goal is to make technology work for you,
        seamlessly fitting into your lifestyle.
      </p>

      <p className="mb-10 text-lg text-gray-700 dark:text-gray-300">
        When you work with us, you’re not hiring a giant company—you’re
        partnering with a neighborhood specialist who cares about delivering
        excellent service and real results. Weekend projects, quick installs, or
        full smart home transformations—we’re ready to help, one device at a
        time.
      </p>

      <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Why Choose Us?
      </h2>

      <ul className="mb-10 list-inside list-disc text-gray-700 dark:text-gray-300">
        <li>Locally Owned &amp; Operated</li>
        <li>Flexible Weekend Availability</li>
        <li>Clear, Upfront Pricing</li>
        <li>Custom Smart Home Solutions</li>
        <li>No Pushy Sales—Just Honest Recommendations</li>
      </ul>

      <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Our Service Areas
      </h2>

      <p className="mb-10 text-lg text-gray-700 dark:text-gray-300">
        Proudly serving South Jordan, Daybreak, and surrounding Utah
        communities.
      </p>

      <div>
        <Link
          href="/contact"
          className="inline-block rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Request a free quote →
        </Link>
      </div>
    </section>
  );
}
