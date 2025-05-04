import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <main className="mx-auto max-w-4xl px-4">
      <h1>Privacy Policy</h1>

      <section className="mt-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Introduction</h2>
        <p>
          This Privacy Policy explains how South Jordan Smart Home
          (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses,
          and protects your personal information when you visit our website or
          use our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Information We Collect</h2>
        <p>
          We may collect personal information such as your name, email address,
          phone number, and any other details you provide when filling out forms
          or contacting us.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">
          How We Use Your Information
        </h2>
        <p>The information we collect may be used to:</p>
        <ul className="list-disc pl-6">
          <li>Provide and improve our services</li>
          <li>Communicate with you regarding your inquiries</li>
          <li>Send promotional materials (if opted-in)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Data Security</h2>
        <p>
          We implement security measures to protect your personal data. However,
          no method of data transmission over the Internet or method of
          electronic storage is 100% secure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Your Rights</h2>
        <p>
          You have the right to access, update, or delete your personal
          information. You can contact us at any time to exercise these rights.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Contact Us</h2>
        <p>
          If you have any questions or concerns about our Privacy Policy, please
          feel free to contact us at{" "}
          <a
            href="mailto:southjordansmarthome@gmail.com"
            className="text-blue-500"
          >
            southjordansmarthome@gmail.com
          </a>
          .
        </p>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
