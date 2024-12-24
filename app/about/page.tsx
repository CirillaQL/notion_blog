import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Profile Section */}
        <div className="text-center mb-12">
          <div className="relative w-32 h-32 mx-auto mb-4">
            {/* <Image
              src="/profile-picture.jpg" // 替换为你的头像图片路径
              alt="Profile Picture"
              fill
              className="rounded-full object-cover"
            /> */}
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Your Name</h1>
          <p className="text-xl text-gray-600">Software Developer</p>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </p>
        </div>

        {/* Skills Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Git'].map(
              (skill) => (
                <div
                  key={skill}
                  className="bg-gray-100 rounded-lg p-3 text-center text-gray-700"
                >
                  {skill}
                </div>
              )
            )}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/CirillaQL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
