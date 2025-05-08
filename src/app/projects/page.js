import React from 'react'

function Project() {
  return (
    <>
    <div className="max-w-6xl mx-auto p-6 md:p-12 min-h-screen">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white border-b-4 border-blue-500 inline-block">
    🚀 Projects
  </h2>

  <div className="grid gap-8 md:grid-cols-2">
    {/* Recipe Website Project */}
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-semibold text-blue-600 dark:text-cyan-400 mb-2">
        Recipe Website Project
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-2">
        Built with <strong>Next.js, Firebase, and Stripe</strong>
      </p>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 mb-4">
        <li>Users can sign up and log in using Firebase Authentication.</li>
        <li>Integrated Stripe for secure online payments to access premium content.</li>
      </ul>
      <a
        href="https://recipe-app-psi-eight.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-2 text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
      >
        🔗 View Project
      </a>
    </div>

    {/* Movie Website Project */}
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-semibold text-blue-600 dark:text-cyan-400 mb-2">
        Movie Website Project
      </h3>
      <p className="text-gray-700 dark:text-gray-300 mb-2">
        Built with <strong>React.js and the TMDB API</strong>
      </p>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 mb-4">
        <li>Users can search and view movie details like posters, names, and ratings.</li>
        <li>Responsive design that works well on all screen sizes.</li>
      </ul>
      <a
        href="https://movie-website-pied.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-2 text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
      >
        🔗 View Project
      </a>
    </div>
  </div>
</div>

    </>
  )
}

export default Project