import React, { useState } from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import axios from 'axios';
import Form from '../../components/Form';

const Contact_us = () => {

    return (
        <div>
            <div
                className="position-fixed top-0 start-0 z-3 w-100"
                style={{
                    zIndex: 1030,
                }}
            >
                <Navbar />
            </div>
            <br />
            <div className='container py-5'>
                <h1 id="font_h4" className='mt-4 w-50 text-start'>
                    Let's Bring Your
                    <span style={{ color: '#FF630F' }}> Dream Team </span> to Life.
                </h1>

                <div className="container my-5 p-4 text-start" style={{ backgroundColor: '#F9F9F9' }}>
                    <h3 className="mb-2" id="row2_tail1">Book a Free Consultation</h3>
                    <p className="mb-3" id="font_p">Ready to discuss your hiring needs or career goals? Get in touch with Macro Employment today.</p>
                   <Form />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact_us
