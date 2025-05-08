import React from 'react'
import Profile from '@/images/profile2.jpg'
import Image from 'next/image'

function AboutPage() {
  return (
    <>
      <section className="w-full bg-background text-foreground flex items-center flex-col justify-center py-10 px-6">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-background backdrop-blur-xl border border-b-cyan-900 border-l-cyan-800  border-t-cyan-800 border-r-cyan-600  shadow-2xl rounded-2xl p-8 md:p-12">

          {/* Right Image Section (shown first on small screens) */}
          <div className="flex justify-center order-1 md:order-2">
            <Image
              src={Profile}
              alt="Kundan Chauhan"
              className="w-60 h-60 md:w-72 md:h-72 object-cover rounded-full shadow-xl border-4 border-blue-400"
            />
          </div>

          {/* Left Text Section (shown second on small screens) */}
          <div className="space-y-4 order-2 md:order-1">
            <h1 className="sm:text-5xl text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              KUNDAN CHAUHAN
            </h1>
            <h2 className="text-2xl font-semibold text-gray-400">React JS Developer</h2>
            <div className="text-gray-400 text-base leading-relaxed">
              <p><strong>Contact:</strong> +91-7696355676</p>
              <p><strong>Email:</strong> kundan76343@gmail.com</p>
              <p><strong>Location:</strong> SBS Nagar, Punjab, India</p>
            </div>
          </div>

        </div>
        <div className="bg-gradient-to-r from-blue-500 via-[#024d66] to-cyan-600 text-white p-6 rounded-2xl shadow-lg max-w-3xl mx-auto mt-8">
          <h1 className="text-3xl font-bold mb-4 border-b border-white/30 pb-2">Summary</h1>
          <p className="text-base md:text-lg leading-relaxed">
            I am a React.js developer with a good understanding of HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and Next.js.
            I have completed a React.js course from Contriverz Company, where I built several projects and learned how to create
            user-friendly websites. I am excited to start my career as a front-end developer and grow by working on real-world projects.
          </p>
        </div>

        <div className='flex gap-4 flex-wrap '>

          <div className="  bg-gray-900 p-6 rounded-2xl shadow-md sm:w-96 w-72 mx-auto mt-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 border-b pb-2 border-gray-300 dark:border-gray-600">
              🏫 Training & Courses
            </h2>
            <div className="space-y-2">
              <h3 className="text-xl font-medium text-blue-600 dark:text-cyan-400">React.js Intern – Contriverz</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Duration: <span className="font-medium text-black dark:text-white">Jan 2025 – April 2025</span> (4 Months)
              </p>
            </div>
          </div>

          <div className=" dark:bg-gray-900 p-6 rounded-2xl shadow-md sm:w-96 w-72 mx-auto mt-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 border-b pb-2 border-gray-300 dark:border-gray-600">
              🎓 Education
            </h2>
            <div className="space-y-2">
              <h3 className="text-xl font-medium text-blue-600 dark:text-cyan-400">B.Sc in Non-Medical</h3>
              <p className="text-gray-700 dark:text-gray-300">R.K Arya College</p>
              <p className="text-gray-700 dark:text-gray-300">
                Graduated: <span className="font-medium text-black dark:text-white">2019</span>
              </p>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default AboutPage