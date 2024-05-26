// src/components/Homepage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Homepage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-transparent text-black p-4 flex justify-between items-center shadow-2xl">
        <h1 className=" text-3xl font-bold">Recruitment Solution</h1>
        <div>
          <Link to="/login" className=" mr-4 hover:underline bg-black text-white px-3 py-2 rounded-md">Login</Link>
          <Link to="/register" className=" hover:underline bg-black text-white px-3 py-2 rounded-md">Register</Link>
        </div>
      </nav>
      <main className="flex-grow">
        <section className="bg-cover bg-center h-96 flex items-center justify-center" style={{ backgroundImage: 'url(https://th.bing.com/th/id/OIP.XkfYvtNEKkD3e3d4CNkugAHaE8?w=257&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7)' }}>
          <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
            <h2 className="text-5xl text-white font-bold mb-4">Efficient Recruitment for MNCs</h2>
            <p className="text-2xl text-white mb-8">Streamline your hiring process with our powerful recruitment solution.</p>
            <Link to="/candidate-search">
              <button className="bg-yellow-500 text-white px-6 py-3 rounded-full text-lg hover:bg-yellow-600 transition duration-300">
                Search Candidates
              </button>
            </Link>
          </div>
        </section>
        <section className="p-8 bg-gray-100">
          <h2 className="text-4xl mb-6 font-semibold text-center">Key Features</h2>
          <div className="flex flex-wrap justify-center space-x-4">
            <div className="bg-white p-6 shadow rounded w-72 mb-4 text-center">
              <img src="https://th.bing.com/th/id/OIP.RONJv084ptUVUup4MA0Y_wHaEK?w=326&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Feature 1" className="mx-auto mb-4"/>
              <h3 className="text-2xl font-medium mb-2">Efficient Candidate Tracking</h3>
              <p>Track your candidates seamlessly throughout the hiring process.</p>
            </div>
            <div className="bg-white p-6 shadow rounded w-72 mb-4 text-center">
              <img src="https://th.bing.com/th/id/OIP.4jMUXr8F5m3jgfudftNA9QHaDd?w=330&h=163&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Feature 2" className="mx-auto mb-4"/>
              <h3 className="text-2xl font-medium mb-2">Automated Resume Parsing</h3>
              <p>Automatically parse and match resumes to job descriptions.</p>
            </div>
            <div className="bg-white p-6 shadow rounded w-72 mb-4 text-center">
              <img src="https://th.bing.com/th/id/OIP.-gmpvA2FCF9NrNnSh2MrAgHaEW?w=305&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Feature 3" className="mx-auto mb-4"/>
              <h3 className="text-2xl font-medium mb-2">Integrated Interview Scheduling</h3>
              <p>Schedule interviews directly within the platform.</p>
            </div>
          </div>
        </section>
        <section className="bg-white p-8 text-center">
          <h2 className="text-4xl mb-4 font-semibold">What Our Clients Say</h2>
          <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop showIndicators={true} showArrows={true} className="w-3/4 mx-auto testimonial-carousel">
          <div className="testimonial-slide">
  <img
    src="https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgAAAA?w=202&h=303&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    alt="Client 1"
    style={{ width: '80px', height: '80px' }}
    className=" rounded-full mx-auto mb-4"
  />
  <p className="text-lg italic mb-4">"This tool has revolutionized our hiring process!"</p>
  <p className="font-semibold">- John Doe, HR Manager at XYZ Inc.</p>
</div>
<div className="testimonial-slide">
  <img
    src="https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgAAAA?w=202&h=303&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    alt="Client 1"
    style={{ width: '80px', height: '80px' }}
    className=" rounded-full mx-auto mb-4"
  />
  <p className="text-lg italic mb-4">"This tool has revolutionized our hiring process!"</p>
  <p className="font-semibold">- John Doe, HR Manager at XYZ Inc.</p>
</div>
<div className="testimonial-slide">
  <img
    src="https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgAAAA?w=202&h=303&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    alt="Client 1"
    style={{ width: '80px', height: '80px' }}
    className=" rounded-full mx-auto mb-4"
  />
  <p className="text-lg italic mb-4">"This tool has revolutionized our hiring process!"</p>
  <p className="font-semibold">- John Doe, HR Manager at XYZ Inc.</p>
</div>
          </Carousel>
        </section>
      </main>
      <footer className="bg-white p-8 text-black shadow-2xl border-t-2 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <Link to="/about" className="hover:underline">About Us</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
        </div>
        <p>&copy; 2024 Recruitment Solution. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
