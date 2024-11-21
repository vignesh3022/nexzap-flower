import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import Contact from './pages/Contact';  

function App() {
  return (
    <div className="min-h-screen bg-[#000000]">
      <Navbar />
      <div className="pt-20">
        {/* Home Section */}
        <section id="home" className="min-h-screen py-16">
          <Home />
        </section>

        {/* Products Section */}
        <section id="products" className="min-h-screen py-16">
          <Products />
        </section>

        {/* Services Section */}
        <section id="services" className="min-h-screen py-16">
          <Services />
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-16">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
