"use client";
import { useRouter } from "next/navigation";
import { useQuoteForm } from "../formContext";
import { Select } from "flowbite-react";
import StepIndicator from "@/components/StepIndicator";

export default function ContactInfo() {
  const { data, update } = useQuoteForm();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/tv-wall-mounting/quote/mounting-info");
  };

  return (
    <>
      <h1>TV Mount Installation</h1>
      <p className="mt-4 mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        Request a free estimate
      </p>
      <StepIndicator />
      <form onSubmit={handleSubmit} className="max-w-md">
        <fieldset className="my-10">
          <legend className="text-lg font-semibold text-gray-900 uppercase dark:text-gray-100">
            Contact Information
          </legend>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Your information will never be shared. <strong>NO SPAM</strong> or
            marketing emails.
          </p>
          <div className="my-6 space-y-6">
            <label
              htmlFor="fullName"
              className="mb-2 block text-base font-medium text-gray-900 dark:text-gray-100"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              defaultValue={data.fullName ?? ""}
              onChange={(e) => update({ fullName: e.target.value })}
              required
              placeholder="Your full name"
              className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
            />

            <label
              htmlFor="email"
              className="mb-2 block text-base font-medium text-gray-900 dark:text-gray-100"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              defaultValue={data.email ?? ""}
              onChange={(e) => update({ email: e.target.value })}
              required
              placeholder="you@example.com"
              className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
            />

            <label
              htmlFor="phone"
              className="mb-2 block text-base font-medium text-gray-900 dark:text-gray-100"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              defaultValue={data.phone ?? ""}
              onChange={(e) => update({ phone: e.target.value })}
              required
              placeholder="(801) 555-1234"
              className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
            />

            <label
              htmlFor="zip"
              className="mb-2 block text-base font-medium text-gray-900 dark:text-gray-100"
            >
              ZIP Code
            </label>
            <input
              type="text"
              id="zip"
              name="zip"
              inputMode="numeric"
              pattern="\d{5}"
              maxLength={5}
              defaultValue={data.zip ?? ""}
              onChange={(e) => update({ zip: e.target.value })}
              required
              placeholder="84095"
              className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
            />

            <label
              htmlFor="contactPreference"
              className="mb-2 block text-base font-medium text-gray-900 dark:text-gray-100"
            >
              Preferred Contact Method
            </label>
            <Select
              id="contactPreference"
              name="contactPreference"
              defaultValue={data.contactPreference ?? ""}
              onChange={(e) => update({ contactPreference: e.target.value })}
              required
            >
              <option value="">Select an option</option>
              <option value="email">Email</option>
              <option value="text">Text</option>
              <option value="call">Phone Call</option>
            </Select>
          </div>

          <button
            type="submit"
            className="rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            Next
          </button>
        </fieldset>
      </form>
    </>
  );
}
