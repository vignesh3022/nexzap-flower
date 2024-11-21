import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-[#000000]">
      <Navbar />
      <div className="pt-20">
        <section id="home" className="min-h-screen py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Welcome Home</h1>
            <p>This is the home section content.</p>
          </div>
        </section>

        <section id="products" className="min-h-screen py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Our Products</h1>
            <p>This is the products section content.</p>
          </div>
        </section>

        <section id="services" className="min-h-screen py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p>This is the services section content.</p>
          </div>
        </section>

        <section id="contact" className="min-h-screen py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p>This is the contact section content.</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
