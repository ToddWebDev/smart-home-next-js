"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useQuoteForm } from "../formContext";
import { Select } from "flowbite-react";
import StepIndicator from "@/components/StepIndicator";

export default function ContactInfo() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { data, update } = useQuoteForm();
  const router = useRouter();

  const handleBack = () => {
    router.push("/tv-wall-mounting/quote/contact-info");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = {
      "form-name": "quote",
      ...Object.fromEntries(
        Object.entries(data).map(([key, value]) => [key, String(value ?? "")]),
      ),
    };

    try {
      await fetch("/__forms.html", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });
      router.push("/tv-wall-mounting/quote/success");
    } catch (err) {
      alert("There was an issue submitting the form. Please try again.");
      console.error("Submission failed:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <h1>TV Mount Installation</h1>
      <p className="my-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
        Request a free estimate
      </p>
      <StepIndicator />
      <div className="grid grid-cols-1 gap-x-12 lg:grid-cols-2">
        <form name="quote" onSubmit={handleSubmit} className="max-w-lg">
          <input type="hidden" name="form-name" value="quote" />
          <fieldset className="mt-10">
            <legend className="text-lg font-semibold text-gray-900 uppercase dark:text-gray-100">
              TV Mounting Information
            </legend>
            <div className="my-6 space-y-6">
              <label
                htmlFor="tvSize"
                className="mb-2 block text-base font-medium text-gray-900 dark:text-gray-100"
              >
                What size is the TV?
              </label>
              <Select
                id="tvSize"
                name="tvSize"
                defaultValue={data.tvSize ?? ""}
                onChange={(e) => update({ tvSize: e.target.value })}
                required
              >
                <option value="">Select a size</option>
                <option value="up-to-32">Up to 32&quot;</option>
                <option value="33-60">33&quot;-60&quot;</option>
                <option value="61-plus">61&quot; or larger</option>
              </Select>

              <label
                htmlFor="tvExactSize"
                className="mb-2 block text-base font-medium text-gray-900 dark:text-gray-100"
              >
                What&apos;s the specific size of the TV, in inches?
              </label>
              <input
                type="text"
                id="tvExactSize"
                name="tvExactSize"
                defaultValue={data.tvExactSize ?? ""}
                onChange={(e) => update({ tvExactSize: e.target.value })}
                placeholder="e.g. 55"
                className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
              />

              <label
                htmlFor="wallType"
                className="text-md mb-2 block font-medium text-gray-900 dark:text-gray-100"
              >
                What type of wall will the TV be mounted on?
              </label>
              <Select
                id="wallType"
                name="wallType"
                defaultValue={data.wallType ?? ""}
                onChange={(e) => update({ wallType: e.target.value })}
                required
              >
                <option value="">Select wall type</option>
                <option value="drywall">Drywall/sheetrock (wood studs)</option>
                <option value="drywall">Drywall/sheetrock (metal studs)</option>
                <option value="concrete">Brick /Concrete</option>
                <option value="other">Not sure / other</option>
              </Select>

              <label
                htmlFor="needMount"
                className="text-md mb-2 block font-medium text-gray-900 dark:text-gray-100"
              >
                Do you need a wall mount?
              </label>
              <Select
                id="needMount"
                name="needMount"
                defaultValue={data.needMount ?? ""}
                onChange={(e) => update({ needMount: e.target.value })}
                required
              >
                <option value="">Select an option</option>
                <option value="no">
                  No, I will provide the mount and hardware
                </option>
                <option value="flat">Flat</option>
                <option value="tilting">Tilted</option>
                <option value="full-motion">Full Motion</option>
              </Select>

              {typeof data.needMount === "string" &&
                ["flat", "tilting", "full-motion"].includes(data.needMount) && (
                  <div
                    className="mt-4 mb-4 flex items-center rounded-lg bg-blue-50 p-4 text-sm text-blue-800 dark:bg-gray-800 dark:text-blue-400"
                    role="alert"
                  >
                    <svg
                      className="me-3 inline h-4 w-4 shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className="sr-only">Info</span>
                    <div>
                      {data.needMount === "flat" && (
                        <>
                          Flat mounts sit nearly flush against the wall and
                          offer a clean, minimal look. Great for eye-level
                          viewing with no angle adjustment.
                        </>
                      )}
                      {data.needMount === "tilting" && (
                        <>
                          Tilting mounts allow you to angle the TV vertically —
                          ideal for TVs mounted above typical viewing level.
                        </>
                      )}
                      {data.needMount === "full-motion" && (
                        <>
                          Full motion mounts give maximum flexibility to extend,
                          swivel, and tilt the TV in almost any direction for
                          the perfect view.
                        </>
                      )}
                    </div>
                  </div>
                )}

              <label
                htmlFor="liftHelp"
                className="text-md mb-2 block font-medium text-gray-900 dark:text-gray-100"
              >
                Can you help lift the TV?
              </label>
              <Select
                id="liftHelp"
                name="liftHelp"
                defaultValue={data.liftHelp ?? ""}
                onChange={(e) => update({ liftHelp: e.target.value })}
                required
              >
                <option value="">Select an option</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Select>
            </div>
          </fieldset>

          <fieldset className="my-4">
            <legend className="text-lg font-semibold text-gray-900 uppercase dark:text-gray-100">
              Cord Concealment
            </legend>

            <div className="my-6 space-y-6">
              <label className="flex items-center gap-x-2 text-base text-gray-900 dark:text-gray-100">
                <input
                  type="radio"
                  name="addOn"
                  value=""
                  checked={data.addOn === ""}
                  onChange={(e) => update({ addOn: e.target.value })}
                  className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:ring-blue-600"
                />
                None
              </label>

              <label className="flex items-center gap-x-2 text-base text-gray-900 dark:text-gray-100">
                <input
                  type="radio"
                  name="addOn"
                  value="inWall"
                  checked={data.addOn === "inWall"}
                  onChange={(e) => update({ addOn: e.target.value })}
                  className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                In-wall cord concealment
              </label>

              <label className="flex items-center gap-x-2 text-base text-gray-900 dark:text-gray-100">
                <input
                  type="radio"
                  name="addOn"
                  value="externalMasking"
                  checked={data.addOn === "externalMasking"}
                  onChange={(e) => update({ addOn: e.target.value })}
                  className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                External cord concealment
              </label>
            </div>
          </fieldset>

          <p className="mb-10 text-sm text-gray-600 dark:text-gray-400">
            After submitting your request, we will follow up within 24 hours
            with an accurate bid and to schedule an appointment.
          </p>
          <div className="flex justify-between">
            <button
              type="button"
              className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              onClick={handleBack}
            >
              Back
            </button>
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
          </div>
        </form>
        <section className="max-w-md" aria-labelledby="service-limitations">
          <h2
            id="service-limitations"
            className="mt-10 mb-6 !text-lg !font-semibold uppercase"
          >
            Important Service Limitations
          </h2>
          <ul className="list-disc space-y-2 pl-5 text-gray-600 dark:text-gray-400">
            <li>
              We do not mount on plaster, tile, stone, multi-layered facades, or
              external walls.
            </li>
            <li>
              Power must be within the area in order to be installed properly.
            </li>
            <li>
              TV power cords and HDMI cables must be long enough to reach power
            </li>
            <li>
              Customers may need to handle small drywall or paint touch-ups if
              fire blocks are present during in-wall cord concealment.
            </li>
            <li>
              We do not service specialized mounts (motorized, pillar, ceiling,
              corner, or drop-down).
            </li>
            <li>
              We do not install mounts on single studs, surfaces without studs,
              or any exterior surfaces.
            </li>
            <li>
              The bottom of the TV must not be more than 8 feet from the ground.
            </li>
            <li>Please provide a clear work area before technician arrival.</li>
            <li>
              If in-wall concealment is not possible, external cord concealment
              options will be offered
            </li>
            <li>
              This service does <strong>not</strong> include trash haul away.
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
