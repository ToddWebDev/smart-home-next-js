import Header from '@/components/Header'
import Card from '@/components/Card'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <div className='container mx-auto px-5'>
        <main className='text-center'>
          <h1 className='mt-12 mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
            <span className='text-gray-500'>South Jordan</span> Smart Home
            Services
          </h1>
          <p className='mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400'>
            Friendly neighborhood TV wall mounting and smart home automation in
            South Jordan— installation for smart lighting, thermostats, smart
            doorbell cameras, and more.
          </p>
          <section className='grid grid-cols-1 gap-5 justify-stretch sm:grid-cols-2 lg:grid-cols-3'>
            <Card
              title='TV Wall Mount'
              description='Get a quote on wall mounting your television'
              linkText='Get Quote'
              href='#'
            />
            <Card
              title='Smart Lighting'
              description='Get a quote on adding smart lighting to your home'
              linkText='Get Quote'
              href='#'
            />
            <Card
              title='Home Automation'
              description='Get a quote on adding smart home automation'
              linkText='Get Quote'
              href='#'
            />
          </section>
        </main>
      </div>
      <Footer />
    </>
  )
}
