import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-purple-100 flex flex-col items-center justify-center py-8">
      {/* Hero Section */}
      <section className="flex flex-col items-center gap-6 mb-10">
        <div className="relative flex items-center justify-center">
          <img src={heroImg} className="w-44 h-44 rounded-full shadow-lg" alt="Hero" />
          <img src={reactLogo} className="absolute left-0 top-0 w-12 animate-spin-slow" alt="React logo" />
          <img src={viteLogo} className="absolute right-0 bottom-0 w-12" alt="Vite logo" />
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-700 mb-2">Get started</h1>
          <p className="text-gray-600">
            Edit <code className="bg-gray-100 px-1 rounded">src/App.jsx</code> and save to test <code className="bg-gray-100 px-1 rounded">HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      {/* Divider */}
      <div className="w-full h-1 bg-linear-to-r from-blue-300 via-purple-300 to-blue-300 rounded my-6 max-w-2xl"></div>

      {/* Next Steps Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Docs */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <svg className="w-8 h-8 text-blue-500 mb-2" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2 className="text-2xl font-semibold mb-1 text-blue-700">Documentation</h2>
          <p className="text-gray-500 mb-3">Your questions, answered</p>
          <ul className="space-y-2">
            <li>
              <a href="https://vite.dev/" target="_blank" className="flex items-center gap-2 text-blue-600 hover:underline">
                <img className="w-6 h-6" src={viteLogo} alt="Vite logo" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank" className="flex items-center gap-2 text-blue-600 hover:underline">
                <img className="w-6 h-6" src={reactLogo} alt="React logo" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        {/* Social */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <svg className="w-8 h-8 text-purple-500 mb-2" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2 className="text-2xl font-semibold mb-1">Connect with us</h2>
          <p className="text-gray-500 mb-3">Join the Vite community</p>
          <ul className="space-y-2">
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank" className="flex items-center gap-2 text-purple-600 hover:underline">
                <svg className="w-6 h-6" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank" className="flex items-center gap-2 text-purple-600 hover:underline">
                <svg className="w-6 h-6" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank" className="flex items-center gap-2 text-purple-600 hover:underline">
                <svg className="w-6 h-6" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank" className="flex items-center gap-2 text-purple-600 hover:underline">
                <svg className="w-6 h-6" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default App
