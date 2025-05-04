"use client";

import React from "react";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const steps = [
  {
    short: "Contact Info",
    long: "Contact Information",
    path: "/tv-wall-mounting/quote/contact-info",
  },
  {
    short: "TV Mounting Info",
    long: "TV Mounting Information",
    path: "/tv-wall-mounting/quote/mounting-info",
  },
];

const StepIndicator: React.FC = () => {
  const pathname = usePathname();

  return (
    <ol className="flex w-full items-center space-x-2 rounded-lg border border-gray-200 bg-white p-3 text-center text-sm font-medium text-gray-500 shadow-xs sm:space-x-4 sm:p-4 sm:text-base rtl:space-x-reverse dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
      {steps.map((step, index) => {
        const currentStepIndex = steps.findIndex((s) => s.path === pathname);
        const isActive = currentStepIndex === index;
        const isCompleted = currentStepIndex > index;

        return (
          <li
            key={step.path}
            className={classNames("flex items-center", {
              "text-blue-600 dark:text-blue-400": isActive,
            })}
          >
            <span
              className={classNames(
                "me-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-xs",
                {
                  "border-blue-600 bg-blue-600 text-white dark:border-blue-500":
                    isCompleted,
                  "border-blue-600 dark:border-blue-500":
                    isActive && !isCompleted,
                  "border-gray-500 dark:border-gray-400":
                    !isActive && !isCompleted,
                },
              )}
            >
              {isCompleted ? "✓" : index + 1}
            </span>
            <span className="inline sm:hidden">{step.short}</span>
            <span className="hidden sm:inline">{step.long}</span>
            {index < steps.length - 1 && (
              <svg
                className="ms-2 h-3 w-3 sm:ms-4 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 12 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m7 9 4-4-4-4M1 9l4-4-4-4"
                />
              </svg>
            )}
          </li>
        );
      })}
    </ol>
  );
};

export default StepIndicator;
