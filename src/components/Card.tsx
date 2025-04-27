"use client";
import React from "react";
import Image from "next/image";

type CardProps = {
  title: string;
  titleAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  description: string;
  imageSrc: string;
  imageAlt: string;
  linkLabel: string;
  linkHref: string;
};

const Card: React.FC<CardProps> = ({
  title,
  titleAs = "h3",
  description,
  linkHref,
  linkLabel,
  imageSrc,
  imageAlt,
}) => {
  const TitleTag = titleAs;

  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={192}
        height={192}
        layout="responsive"
        className="rounded-t-lg"
      />
      <div className="p-6">
        <a href={linkHref}>
          <TitleTag className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </TitleTag>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <a
          href={linkHref}
          className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {linkLabel}
          <svg
            className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;
