import React from "react";

const SuccessPage: React.FC = () => {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1>Thank You!</h1>
      <p className="mt-6 text-lg text-gray-700 dark:text-gray-400">
        We’ve received your message and will get back to you within 24 hours.
      </p>
    </main>
  );
};

export default SuccessPage;
