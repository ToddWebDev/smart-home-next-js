import Card from "@/components/Card";
import LogoIcon from "@/components/LogoIcon";
import HorizontalCard from "@/components/HorizontalCard";

export default function Home() {
  return (
    <div className="text-center">
      <div className="mt-12 mb-8 flex flex-col items-center justify-center gap-y-4 md:flex-row md:items-center md:gap-x-6">
        <LogoIcon className="h-18 w-18 shrink-0 text-blue-700 md:h-24 md:w-24" />
        <div className="flex flex-col gap-y-1">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Smart Home
          </h1>
          <h2 className="!dark:text-gray-400 !order-first !text-xl !font-medium !tracking-wide !text-gray-500 uppercase">
            South Jordan
          </h2>
        </div>
      </div>
      <p className="mb-12 text-lg font-normal text-gray-500 sm:px-16 lg:px-32 lg:text-xl dark:text-gray-400">
        Providing friendly neighborhood TV wall mounting and smart home services
        in South Jordan, Utah.
      </p>
      <section className="grid grid-cols-1 justify-stretch gap-5"></section>
      <section className="grid grid-cols-1 justify-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="sm:col-span-2 lg:col-span-3">
          <HorizontalCard
            title="TV Wall Mounting"
            description="Clean and secure TV wall mounting for any room. We handle all sizes and wall types—just choose your spot and we’ll take care of the rest. Add-on options available for cable concealment and soundbar installation."
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
          imageSrc="/images/smart-light.jpg"
          imageAlt="Smart light wall switches"
        />
        <Card
          title="Smart Dimmer Light Installation"
          description="Add flexible, mood-setting lighting with smart dimmer switches. Control brightness levels by app, schedule, or voice—perfect for living rooms, bedrooms, or dining spaces."
          linkLabel="Get Quote"
          linkHref="/contact"
          imageSrc="/images/dim-lighting.jpg"
          imageAlt="Bedroom with dim lighting"
        />
        <Card
          title="Home Automation Setup"
          description="Bring your smart devices together under one hub for seamless control. Whether you're using Alexa, Google Home, or Apple HomeKit, we’ll help you automate your lights, thermostat, cameras, and more—all from one app or voice command."
          linkLabel="Get Quote"
          linkHref="/contact"
          imageSrc="/images/apple-homekit.jpg"
          imageAlt="Smart light wall switches"
        />
      </section>
    </div>
  );
}
