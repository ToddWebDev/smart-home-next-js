import React from "react";

const TermsOfService: React.FC = () => {
  return (
    <main className="mx-auto max-w-3xl px-4 py-6">
      <h1>Terms of Service</h1>

      <section className="mt-6 mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Introduction</h2>
        <p>
          These Terms of Service (&quot;;Terms&quot;) govern your use of the
          South Jordan Smart Home Services website and the services we offer. By
          accessing our website or using our services, you agree to comply with
          these Terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Use of Our Services</h2>
        <p>
          You may only use our services for lawful purposes. You are responsible
          for ensuring that any data or materials you submit to us do not
          violate any applicable laws.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Payment and Pricing</h2>
        <p>
          Our services are priced as indicated on our website or in any written
          communication. All payments are due upon completion of services,
          unless otherwise agreed upon in writing.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Limitation of Liability</h2>
        <p>
          South Jordan Smart Home Services is not responsible for any indirect,
          incidental, or consequential damages resulting from the use of our
          services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Amendments</h2>
        <p>
          We reserve the right to update or amend these Terms at any time. All
          updates will be posted on this page, and the changes will take effect
          immediately upon posting.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Contact Us</h2>
        <p>
          If you have any questions regarding these Terms, please contact us at{" "}
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

export default TermsOfService;
