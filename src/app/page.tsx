import Header from "@/components/Header";
import Card from "@/components/Card";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-screen-xl px-5">
        <main className="text-center">
          <div className="mt-12 mb-8 flex flex-col">
            <h1 className="text-4xl leading-none font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Smart Home Services
            </h1>
            <h2 className="order-first mb-4 text-lg font-bold text-gray-500 uppercase md:text-xl">
              South Jordan
            </h2>
          </div>
          <p className="mb-12 text-lg font-normal text-gray-500 sm:px-16 lg:px-48 lg:text-xl dark:text-gray-400">
            Friendly neighborhood TV wall mounting and smart home automation in
            South Jordan— installation for smart lighting, thermostats, smart
            doorbell cameras, and more.
          </p>
          <section className="grid grid-cols-1 justify-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <Card
              title="TV Wall Mount"
              description="Get a quote on wall mounting your television"
              linkText="Get Quote"
              href="#"
            />
            <Card
              title="Smart Lighting"
              description="Get a quote on adding smart lighting to your home"
              linkText="Get Quote"
              href="#"
            />
            <Card
              title="Home Automation"
              description="Get a quote on adding smart home automation"
              linkText="Get Quote"
              href="#"
            />
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
