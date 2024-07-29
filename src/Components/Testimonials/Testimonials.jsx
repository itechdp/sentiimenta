import React, { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const data = [
        {
            review: "This product has greatly improved my productivity. Highly recommended!",
            company: "Tech Innovators",
            name: "John Doe",
            backgroundImage: "url('https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
        },
        {
            review: "Exceptional service and fantastic results. Would use again.",
            company: "Service Experts",
            name: "Jane Smith",
            backgroundImage: "url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
        },
        {
            review: "A game-changer for our business. The support team is incredible.",
            company: "Business Solutions Inc.",
            name: "Michael Brown",
            backgroundImage: "url('https://images.unsplash.com/photo-1492446845049-9c50cc313f00?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
        },
        {
            review: "Outstanding quality and amazing customer support. Five stars!",
            company: "Quality Goods",
            name: "Sarah Johnson",
            backgroundImage: "url('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
        },
        {
            review: "Fantastic product, very reliable and easy to use.",
            company: "Reliable Tools",
            name: "Emily Davis",
            backgroundImage: "url('https://images.unsplash.com/photo-1610088441520-4352457e7095?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
        },
        {
            review: "Great value for the price. Exceeded my expectations.",
            company: "Value Products",
            name: "David Wilson",
            backgroundImage: "url('https://images.unsplash.com/photo-1488371934083-edb7857977df?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
        },
    ];

    const [current, setCurrent] = useState(0);

    const nextTestimonials = () => {
        setCurrent((current + 3) % data.length);
    };

    const prevTestimonials = () => {
        setCurrent((current - 3 + data.length) % data.length);
    };

    const displayedTestimonials = data.slice(current, current + 3);

    return (
        <div className='testimonials' id='testimonials'>
            <h1>Testimonials</h1>
            
            <div className="testimonial-container">
            
                {displayedTestimonials.map((testimonial, index) => (
                    <div 
                        key={index} 
                        className="testimonial" 
                        style={{ backgroundImage: testimonial.backgroundImage }}>
                        <div className="testimonial-content">
                            <p><span>"</span> {testimonial.review} <span>"</span></p>
                            <h4>{testimonial.company}</h4>
                            <h3> - {testimonial.name}</h3>

                        </div>
                    </div>
                ))}
                
            </div>
            <div className='controls'>
            <button className='button'onClick={prevTestimonials}><i class="fa-solid fa-arrow-left btn"></i></button>
            <button className='button'onClick={nextTestimonials}><i class="fa-solid fa-arrow-right btn"></i></button>   
            </div>
            
        </div>
    );
};

export default Testimonials;
