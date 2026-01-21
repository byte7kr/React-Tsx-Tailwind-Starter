import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">
          React TypeScript Vite Starter Kit
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          A modern starter template with TailwindCSS and React Router
        </p>

        <div className="flex gap-4 justify-center mb-12">
          <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-semibold">
            ⚡️ Vite
          </span>
          <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-semibold">
            ⚛️ React 18
          </span>
          <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-semibold">
            🎨 TailwindCSS
          </span>
          <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-semibold">
            🧭 React Router
          </span>
        </div>

        <Link
          to="/tailwind-test"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200"
        >
          View TailwindCSS Test Page →
        </Link>

        <div className="mt-12 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Start</h2>
          <div className="text-left space-y-2">
            <code className="block bg-gray-100 p-2 rounded text-sm">npm install</code>
            <code className="block bg-gray-100 p-2 rounded text-sm">npm run dev</code>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
