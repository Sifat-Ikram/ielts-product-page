import Link from 'next/link'

interface HeroProps {
  title: string
  price: number
}

export default function Hero({ title, price }: HeroProps) {
  return (
    <section className="pt-20 pb-16 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{title}</h1>
      <p className="text-xl mb-6">Complete IELTS preparation course</p>
      <div className="flex justify-center items-center space-x-4">
        <span className="text-3xl font-bold">৳ {price}</span>
        <Link
          href="#enroll"
          className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow hover:shadow-lg transition"
        >
          Enroll Now
        </Link>
      </div>
    </section>
  )
}
