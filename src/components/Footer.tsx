import React from 'react'

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
    <div>
      <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
      <p className="mb-4">
        Music School is a premier institution dedicated to teaching the art
        and science of music. We nurture talent from the ground up,
        fostering a vibrant community of musicians.
      </p>
    </div>
    <div>
      <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
      <ul>
        <li>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="hover:text-white transition-colors duration-300"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="courses"
            className="hover:text-white transition-colors duration-300"
          >
            Courses
          </a>
        </li>
        <li>
          <a
            href="contact"
            className="hover:text-white transition-colors duration-300"
          >
            Contact
          </a>
        </li>
        <li>
          <a
            href="hireme"
            className="hover:text-white transition-colors duration-300"
          >
            Hire Me
          </a>
        </li>
      </ul>
    </div>
    <div>
      <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
      <div className="flex space-x-4">
        <a
          href="https://www.linkedin.com/in/rakesh-kumar-6b3228145/"
          className="hover:text-white transition-colors duration-300"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Rakesh709"
          className="hover:text-white transition-colors duration-300"
        >
          GithHub
        </a>
        <a
          href="https://www.instagram.com/bucket_flow_/"
          className="hover:text-white transition-colors duration-300"
        >
          Instagram
        </a>
      </div>
    </div>
    <div>
      <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
      <p>Bengaluru, India</p>
      <p>Bengaluru 560021</p>
      <p>Email:rakesh1.kumar1024@gmail.com</p>
      <p>Phone: (709) 796-7362</p>
    </div>
    </div>
    <p className="text-center text-xs pt-8">© 2025 Music School. All rights reserved.</p>
</footer>
  )
}

export default Footer