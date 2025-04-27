import Card from "@/components/Card";
import HorizontalCard from "@/components/HorizontalCard";

export default function Home() {
  return (
    <div className="text-center">
      <div className="mt-12 mb-8 flex flex-col">
        <h1>Smart Home Services</h1>
        <h2 className="!md:text-xl order-first mb-4 !text-lg !font-normal !text-gray-500 uppercase dark:!text-gray-400">
          South Jordan
        </h2>
      </div>
      <p className="mb-12 text-lg font-normal text-gray-500 sm:px-16 lg:px-48 lg:text-xl dark:text-gray-400">
        Friendly neighborhood TV wall mounting and smart home automation in
        South Jordan— installation for smart lighting, thermostats, smart
        doorbell cameras, and more.
      </p>
      <section className="grid grid-cols-1 justify-stretch gap-5"></section>
      <section className="grid grid-cols-1 justify-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="sm:col-span-2 lg:col-span-3">
          <HorizontalCard
            title="TV Wall Mounting"
            description="Clean and secure TV wall mounting for any room. We handle all sizes and wall types—just choose your spot and we’ll take care of the rest. Add-on options available for in-wall cable concealment and soundbar installation."
            linkLabel="Get Quote"
            linkHref="/contact"
            imageSrc="/images/tv-mount.jpg"
            imageAlt="Wall mounted TV with brackets"
          />
        </div>
        <Card
          title="Smart Light Switch Installation"
          description="Replace standard wall switches with smart on/off switches to control your lights from your phone or voice assistant. A great first step toward a smarter home."
          linkLabel="Get Quote"
          linkHref="/contact"
        />
        <Card
          title="Smart Dimmer Light Installation"
          description="Add flexible, mood-setting lighting with smart dimmer switches. Control brightness levels by app, schedule, or voice—perfect for living rooms, bedrooms, or dining spaces."
          linkLabel="Get Quote"
          linkHref="/contact"
        />
        <Card
          title="Home Automation Setup"
          description="Bring your smart devices together under one hub for seamless control. Whether you're using Alexa, Google Home, or Apple HomeKit, we’ll help you automate your lights, thermostat, cameras, and more—all from one app or voice command."
          linkLabel="Get Quote"
          linkHref="/contact"
        />
      </section>
    </div>
  );
}
