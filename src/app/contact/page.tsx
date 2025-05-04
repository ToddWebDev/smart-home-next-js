"use client";
import { useState } from "react";
import { Select } from "flowbite-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.target as HTMLFormElement);

    const formParams = new URLSearchParams();
    formData.forEach((value, key) => {
      formParams.append(key, value.toString());
    });

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formParams.toString(),
      });

      if (response.status === 200) {
        window.location.href = "/success";
      } else {
        alert("There was an issue submitting the form. Please try again.");
      }
    } catch (error) {
      alert("There was an issue submitting the form. Please try again.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <h1>Contact Us</h1>
      <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
        Have a project in mind? We&apos;re here to help! Whether you need a TV
        mounted, smart lights installed, or you&apos;re ready to upgrade your
        home automation, we’re ready to get started.
      </p>
      <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
        Fill out the form below to request a free estimate or ask a question —
        we’ll get back to you within 24 hours.
      </p>

      <section className="my-12">
        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
          Contact Information
        </h2>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            <strong>Phone:</strong>{" "}
            <a
              href="tel:+18016138676"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              (801) 613-8676
            </a>
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:info@southjordansmarthome.com"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              info@southjordansmarthome.com
            </a>
          </li>
          <li>
            <strong>Service Area:</strong> South Jordan, Daybreak, and nearby
            Utah communities
          </li>
        </ul>
      </section>

      <section className="my-12">
        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
          Availability
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          Weekend appointments available! Let us know what works best for your
          schedule.
        </p>
        <p className="mt-2 text-gray-700 dark:text-gray-300">
          We look forward to helping you create a smarter, more connected home!
        </p>
      </section>

      <section className="my-12">
        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
          Request a Free Estimate
        </h2>
        <p className="my-6 text-sm text-gray-600 dark:text-gray-400">
          Your information will never be shared. <strong>NO SPAM</strong> or
          marketing emails.
        </p>
        <form
          className="max-w-lg space-y-6"
          name="contact"
          onSubmit={handleFormSubmit}
        >
          <div>
            <input type="hidden" name="form-name" value="contact" />
            <label htmlFor="fullName" className="mb-2 block font-medium">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              className="w-full rounded-md border border-gray-300 bg-gray-50 p-2 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full rounded-md border border-gray-300 bg-gray-50 p-2 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="phone" className="mb-2 block font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full rounded-md border border-gray-300 bg-gray-50 p-2 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="zip" className="mb-2 block font-medium">
              Zip Code
            </label>
            <input
              type="text"
              id="zip"
              name="zip"
              className="w-full rounded-md border border-gray-300 bg-gray-50 p-2 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="service" className="mb-2 block font-medium">
              Service Interested In
            </label>
            <Select id="service" name="service" defaultValue="">
              <option value="" disabled>
                Select a service
              </option>
              <option value="tv-mounting">TV Wall Mounting</option>
              <option value="smart-lighting">
                Smart Light Switch Installation
              </option>
              <option value="smart-lighting">
                Smart Dimmer Light Installation
              </option>
              <option value="home-automation">
                Smart Home Automation Setup
              </option>
              <option value="other">Other</option>
            </Select>
          </div>

          <div>
            <label htmlFor="contactMethod" className="mb-2 block font-medium">
              Preferred Contact Method
            </label>
            <Select id="contactMethod" name="contactMethod" defaultValue="">
              <option value="" disabled>
                Select a contact method
              </option>
              <option value="email">Email</option>
              <option value="text">Text</option>
              <option value="call">Call</option>
            </Select>
          </div>

          <div>
            <label htmlFor="details" className="mb-2 block font-medium">
              Additional Details or Questions
            </label>
            <textarea
              id="details"
              name="details"
              rows={4}
              className="w-full rounded-md border border-gray-300 bg-gray-50 p-2 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            ></textarea>
          </div>

          <p className="mb-10 text-sm text-gray-600 dark:text-gray-400">
            After submitting your request, we will follow up within 24 hours
            with an accurate bid and to schedule an appointment.
          </p>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`rounded-lg bg-blue-700 px-5 py-2.5 font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${
              isSubmitting
                ? "cursor-not-allowed bg-blue-700 opacity-70"
                : "bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700"
            }`}
          >
            {isSubmitting ? (
              <div className="inline-flex items-center">
                <svg
                  aria-hidden="true"
                  role="status"
                  className="me-3 inline h-4 w-4 animate-spin text-white"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="#E5E7EB"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentColor"
                  />
                </svg>
                Requesting
              </div>
            ) : (
              "Request Estimate"
            )}
          </button>
        </form>
      </section>
    </>
  );
}
