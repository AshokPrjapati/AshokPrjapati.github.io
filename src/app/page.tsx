export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            🙏 नमस्ते! I am <span className="text-blue-600">Ashok Kumar</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Full-stack Web Developer | MERN Stack Enthusiast
          </p>
          <div className="space-y-4">
            <p className="text-lg text-gray-600">
              🚀 Passionate about building web applications
            </p>
            <p className="text-lg text-gray-600">
              💻 Skilled in React, Node.js, and modern web technologies
            </p>
            <p className="text-lg text-gray-600">
              🎯 Curious to learn new things and explore technologies
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/ashok-kumar-1778b213b/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.hackerrank.com/ashokprajpati"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              HackerRank
            </a>
            <a
              href="mailto:ap271449@gmail.com"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
