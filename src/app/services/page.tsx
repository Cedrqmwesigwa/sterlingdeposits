import React from 'react';

const ServicesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Residential Construction</h2>
        <p className="text-lg text-gray-700 mb-4">
          Sterling Contractors specializes in bringing your dream home to life. From initial design consultation and planning to complete construction, we handle every aspect of building new residential properties. Our team ensures quality craftsmanship, adherence to timelines, and transparent communication throughout the process. We work with a wide range of materials from our hardware supply to provide durable and aesthetically pleasing homes.
        </p>
        <p className="text-lg text-gray-700">
          Our residential construction services include:
        </p>
        <ul className="list-disc list-inside ml-4 text-gray-700">
          <li>New home construction (single-family homes, duplexes, etc.)</li>
          <li>Custom home building</li>
          <li>Foundation work</li>
          <li>Framing and structural work</li>
          <li>Roofing and exterior finishing</li>
          <li>Interior finishing (drywall, painting, flooring)</li>
          <li>Plumbing and electrical installations</li>
          <li>Project management from start to finish</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Renovations and Remodeling</h2>
        <p className="text-lg text-gray-700 mb-4">
          Transform your existing property with Sterling Contractors' renovation and remodeling expertise. Whether you're looking to update a single room, extend your living space, or completely remodel your home, we provide comprehensive services. We work closely with you to understand your vision and deliver functional and beautiful results that enhance your property's value and appeal. Our access to quality hardware materials ensures the best results.
        </p>
        <p className="text-lg text-gray-700">
          Our renovation and remodeling services include:
        </p>
        <ul className="list-disc list-inside ml-4 text-gray-700">
          <li>Kitchen and bathroom remodeling</li>
          <li>Home additions and extensions</li>
          <li>Basement finishing</li>
          <li>Exterior renovations (siding, windows, doors)</li>
          <li>Structural modifications</li>
          <li>Layout changes and space optimization</li>
          <li>Restorations and historical renovations</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Hardware Supply and Consultation</h2>
        <p className="text-lg text-gray-700 mb-4">
          Beyond our contracting services, Sterling Contractors also provides consultation on hardware materials and can supply high-quality products for various construction and renovation needs. Leveraging our experience, we can advise on the best materials for your project, ensuring durability and cost-effectiveness.
        </p>
        <p className="text-lg text-gray-700">
          We can assist with:
        </p>
        <ul className="list-disc list-inside ml-4 text-gray-700">
          <li>Material selection and sourcing</li>
          <li>Providing a range of construction hardware</li>
          <li>Expert advice on material usage and applications</li>
        </ul>
      </section>
    </div>
  );
};

export default ServicesPage;