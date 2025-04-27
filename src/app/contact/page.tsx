"use client";
import React from "react";

export default function ContactPage() {
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
    }
  };

  return (
    <main className="container mx-auto max-w-4xl px-4 py-12">
      <header className="mb-8">
        <h1>Contact Us</h1>
        <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
          Have a project in mind? We&apos;re here to help! Whether you need a TV
          mounted, smart lights installed, or you&apos;re ready to upgrade your
          home automation, we’re ready to get started.
        </p>
        <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
          Fill out the form below to request a free quote or ask a question —
          we’ll get back to you within 24 hours.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
          Contact Information
        </h2>
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          <li>
            <strong>Phone:</strong> (Coming Soon)
          </li>
          <li>
            <strong>Email:</strong> southjordansmarthome@gmail.com
          </li>
          <li>
            <strong>Service Area:</strong> South Jordan, Daybreak, and nearby
            Utah communities
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
          Request a Quote
        </h2>
        <form
          className="max-w-xl space-y-6"
          name="contact"
          action="/success"
          onSubmit={handleFormSubmit}
        >
          <div>
            <input type="hidden" name="contact-form" value="contact" />
            <label
              htmlFor="fullName"
              className="mb-2 block text-sm font-medium"
            >
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
            <label htmlFor="email" className="mb-2 block text-sm font-medium">
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
            <label htmlFor="phone" className="mb-2 block text-sm font-medium">
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
            <label htmlFor="zip" className="mb-2 block text-sm font-medium">
              Zip Code (Optional)
            </label>
            <input
              type="text"
              id="zip"
              name="zip"
              className="w-full rounded-md border border-gray-300 bg-gray-50 p-2 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="service" className="mb-2 block text-sm font-medium">
              Service Interested In
            </label>
            <select
              id="service"
              name="service"
              className="w-full rounded-md border border-gray-300 bg-gray-50 p-2 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              defaultValue=""
            >
              <option value="" disabled>
                Select a service
              </option>
              <option value="tv-mounting">TV Wall Mounting</option>
              <option value="smart-lighting">
                Smart Lighting Installation
              </option>
              <option value="home-automation">
                Full Home Automation Setup
              </option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="contactMethod"
              className="mb-2 block text-sm font-medium"
            >
              Preferred Contact Method
            </label>
            <select
              id="contactMethod"
              name="contactMethod"
              className="w-full rounded-md border border-gray-300 bg-gray-50 p-2 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              defaultValue=""
            >
              <option value="" disabled>
                Select a contact method
              </option>
              <option value="email">Email</option>
              <option value="text">Text</option>
              <option value="call">Call</option>
            </select>
          </div>

          <div>
            <label htmlFor="details" className="mb-2 block text-sm font-medium">
              Additional Details or Questions
            </label>
            <textarea
              id="details"
              name="details"
              rows={4}
              className="w-full rounded-md border border-gray-300 bg-gray-50 p-2 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            ></textarea>
          </div>

          <button
            type="submit"
            className="rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            Submit Request
          </button>
        </form>
      </section>

      <section>
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
    </main>
  );
}
