"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useQuoteForm, QuoteFormData } from "../formContext";
import StepIndicator from "@/components/StepIndicator";
import {
  validateFullName,
  validateEmail,
  validatePhone,
  validateZip,
  validateContactPreference,
} from "@/utilities/validators";

export default function ContactInfo() {
  const { data, update } = useQuoteForm();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const router = useRouter();

  const validateForm = (data: QuoteFormData) => {
    const newErrors: Record<string, string> = {};

    const fullNameError = validateFullName(data.fullName ?? "");
    const emailError = validateEmail(data.email ?? "");
    const phoneError = validatePhone(data.phone ?? "");
    const zipError = validateZip(data.zip ?? "");
    const contactPrefError = validateContactPreference(
      data.contactPreference ?? "",
    );

    if (fullNameError) newErrors.fullName = fullNameError;
    if (emailError) newErrors.email = emailError;
    if (phoneError) newErrors.phone = phoneError;
    if (zipError) newErrors.zip = zipError;
    if (contactPrefError) newErrors.contactPreference = contactPrefError;

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm(data);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      router.push("/tv-wall-mounting/quote/mounting-info");
    }
  };

  const baseInputClasses = `
  block w-full rounded-lg border bg-white p-2.5 text-sm text-gray-900 shadow-sm 
  focus:border-blue-500 focus:ring-blue-500
  dark:bg-gray-800 dark:text-white dark:placeholder-gray-400
`;

  return (
    <>
      <h1>TV Mount Installation</h1>
      <p className="my-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        Request a free estimate
      </p>
      <StepIndicator />
      <div className="grid grid-cols-1 gap-x-12 lg:grid-cols-2">
        <form onSubmit={handleSubmit} className="max-w-lg">
          <fieldset className="my-10">
            <legend className="text-lg font-semibold text-gray-900 uppercase dark:text-gray-100">
              Contact Information
            </legend>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Your information will never be shared. <strong>NO SPAM</strong> or
              marketing emails.
            </p>
            <div className="my-6 space-y-6">
              <div className="space-y-2">
                <label htmlFor="fullName" className="block font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  value={data.fullName ?? ""}
                  onChange={(e) => update({ fullName: e.target.value })}
                  onBlur={() =>
                    setErrors((prev) => ({
                      ...prev,
                      fullName: validateFullName(data.fullName ?? ""),
                    }))
                  }
                  className={`${
                    errors.fullName
                      ? "border-2 border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  } ${baseInputClasses}`}
                  aria-describedby={
                    errors.fullName ? "fullName-error" : undefined
                  }
                  placeholder="Your full name"
                />
                {errors.fullName && (
                  <p
                    id="fullName-error"
                    className="mt-0 text-sm font-bold text-red-600"
                  >
                    {errors.fullName}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                {/* Email */}
                <label htmlFor="email" className="block font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={data.email ?? ""}
                  onChange={(e) => update({ email: e.target.value })}
                  onBlur={() =>
                    setErrors((prev) => ({
                      ...prev,
                      email: validateEmail(data.email ?? ""),
                    }))
                  }
                  className={`${
                    errors.email
                      ? "border-2 border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  } ${baseInputClasses}`}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p
                    id="email-error"
                    className="mt-1 text-sm font-bold text-red-600"
                  >
                    {errors.email}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                {/* Phone */}
                <label htmlFor="phone" className="block font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={data.phone ?? ""}
                  onChange={(e) => update({ phone: e.target.value })}
                  onBlur={() =>
                    setErrors((prev) => ({
                      ...prev,
                      phone: validatePhone(data.phone ?? ""),
                    }))
                  }
                  className={`${
                    errors.phone
                      ? "border-2 border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  } ${baseInputClasses}`}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  placeholder="(801) 555-1234"
                />
                {errors.phone && (
                  <p
                    id="phone-error"
                    className="mt-1 text-sm font-bold text-red-600"
                  >
                    {errors.phone}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                {/* ZIP Code */}
                <label htmlFor="zip" className="block font-medium">
                  ZIP Code
                </label>
                <input
                  type="text"
                  id="zip"
                  value={data.zip ?? ""}
                  onChange={(e) => update({ zip: e.target.value })}
                  onBlur={() =>
                    setErrors((prev) => ({
                      ...prev,
                      zip: validateZip(data.zip ?? ""),
                    }))
                  }
                  inputMode="numeric"
                  pattern="\d{5}"
                  maxLength={5}
                  className={`${
                    errors.zip
                      ? "border-2 border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  } ${baseInputClasses}`}
                  aria-describedby={errors.zip ? "zip-error" : undefined}
                  placeholder="84095"
                />
                {errors.zip && (
                  <p
                    id="zip-error"
                    className="mt-1 text-sm font-bold text-red-600"
                  >
                    {errors.zip}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                {/* Contact Preference */}
                <label
                  htmlFor="contactPreference"
                  className="block font-medium"
                >
                  Preferred Contact Method
                </label>
                <select
                  id="contactPreference"
                  value={data.contactPreference ?? ""}
                  onChange={(e) =>
                    update({ contactPreference: e.target.value })
                  }
                  onBlur={() =>
                    setErrors((prev) => ({
                      ...prev,
                      contactPreference: validateContactPreference(
                        data.contactPreference ?? "",
                      ),
                    }))
                  }
                  className={`${
                    errors.contactPreference
                      ? "border-2 border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  } ${baseInputClasses}`}
                >
                  <option value="">Select an option</option>
                  <option value="email">Email</option>
                  <option value="text">Text</option>
                  <option value="call">Phone Call</option>
                </select>
                {errors.contactPreference && (
                  <p
                    id="contactPreference-error"
                    className="mt-1 text-sm font-bold text-red-600"
                  >
                    {errors.contactPreference}
                  </p>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="rounded-lg bg-blue-700 px-5 py-2.5 font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Next
            </button>
          </fieldset>
        </form>
        <section className="max-w-md" aria-labelledby="service-limitations">
          <h2
            id="service-limitations"
            className="mt-10 mb-6 !text-lg !font-semibold uppercase"
          >
            Service Area
          </h2>

          <p className="mb-4 text-gray-700 dark:text-gray-300">
            Based in{" "}
            <span className="font-semibold">Daybreak, South Jordan, Utah</span>.
            Primary service is focused within the surrounding communities:
          </p>

          <ul className="list-disc space-y-2 pl-5 text-gray-600 dark:text-gray-400">
            <li>South Jordan</li>
            <li>Daybreak</li>
            <li>Herriman</li>
            <li>Riverton</li>
          </ul>
        </section>
      </div>
    </>
  );
}
