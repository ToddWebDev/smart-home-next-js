"use client";
import { useRouter } from "next/navigation";
import { useQuoteForm } from "../formContext";
import { Select } from "flowbite-react";
import StepIndicator from "@/components/StepIndicator";

export default function ContactInfo() {
  const { data, update } = useQuoteForm();
  const router = useRouter();

  const handleBack = () => {
    router.push("/tv-wall-mounting/quote/contact-info");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
    }
  };

  return (
    <>
      <h1>TV Mount Installation</h1>
      <p className="mt-2 mb-8 text-lg font-normal text-gray-500 dark:text-gray-400">
        Request a free estimate
      </p>
      <StepIndicator />
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <form name="quote" onSubmit={handleSubmit} className="max-w-md">
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
              Add Ons
            </legend>
            <div className="my-6 space-y-6">
              <label className="flex items-center gap-x-2 text-base text-gray-900 dark:text-gray-100">
                <input
                  type="checkbox"
                  name="inWallCordMasking"
                  checked={!!data.inWallCordMasking}
                  onChange={(e) =>
                    update({ inWallCordMasking: e.target.checked })
                  }
                  className="min-h-4 min-w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                In-wall cord concealment (My wall is already pre-looped for wire
                concealment)
              </label>

              <label className="flex items-center gap-x-2 text-base text-gray-900 dark:text-gray-100">
                <input
                  type="checkbox"
                  name="externalCustomerCordMasking"
                  checked={!!data.externalCustomerCordMasking}
                  onChange={(e) =>
                    update({ externalCustomerCordMasking: e.target.checked })
                  }
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                External cord masking (I have my own parts)
              </label>

              <label className="flex items-center gap-x-2 text-base text-gray-900 dark:text-gray-100">
                <input
                  type="checkbox"
                  name="externalTechCordMasking"
                  checked={!!data.externalTechCordMasking}
                  onChange={(e) =>
                    update({ externalTechCordMasking: e.target.checked })
                  }
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                External cord masking (Tech provides parts)
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
              onClick={handleBack}
              className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              Back
            </button>
            <button
              type="submit"
              className="rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              Request Estimate
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
              We do not pre-loop walls for wire concealment, but we’re happy to
              refer you to a licensed electrician.
            </li>
            <li>
              Customers must supply any HDMI cables prior to the technician’s
              arrival.
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
            <li>
              This service does <strong>not</strong> include trash haul away.
            </li>
            <li>
              At least one wall stud must be available if toggle bolts are used
              in place of another stud.
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
