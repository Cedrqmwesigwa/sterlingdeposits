import React from 'react';

const TestimonialsPage = () => {
  // In a real application, you would fetch testimonials from a data source
  const testimonials = [
    {
      quote: "Sterling Contractors delivered exceptional work on our home renovation. Their transparency with the deposit and project progress built immense trust. Highly recommended!",
      author: "Satisfied Client, Kampala"
    },
    {
      quote: "Working with Sterling Contractors was a smooth experience. The upfront deposit was clearly explained and used efficiently for materials. The quality of the finished project exceeded our expectations.",
      author: "Happy Homeowner"
    },
    {
      quote: "We were initially hesitant about paying a deposit, but Sterling Contractors' clear communication and consistent updates made us feel confident. They proved to be reliable and professional.",
      author: "Client Name Here"
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Client Testimonials</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
            <p className="text-gray-900 font-semibold">- {testimonial.author}</p>
          </div>
        ))}
      </div>

      {/* Add a section here to encourage new testimonials or explain the deposit process and how testimonials relate to trust */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Building Trust Through Transparency</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          At Sterling Contractors, we understand that trust is paramount, especially when it comes to project deposits. We are committed to clear communication and demonstrating how your deposit is used to kickstart your project and ensure its success. Our clients' positive experiences reflect our dedication to quality and reliability.
        </p>
        {/* You might add a button here to a contact form for submitting a testimonial */}
        {/* <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Share Your Experience
        </button> */}
      </div>
    </div>
  );
};

export default TestimonialsPage;