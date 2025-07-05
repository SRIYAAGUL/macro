import React from 'react'
import image1 from "../../assets/image1.png"
import Navbar from '../../components/Navbar'
import logo5 from "../../assets/star.png"
import Footer from '../../components/Footer'
import Form from '../../components/Form';


const Services = () => {

    const services = [
        {
            title: 'Global Talent Placement',
            description:
                'We connect businesses with qualified, pre-vetted talent for permanent, contract, or project-based roles in logistics, construction, healthcare, IT, manufacturing, and more.',
        },
        {
            title: 'International Work Pass & Visa Services',
            description:
                'We handle Employment Pass (EP), S Pass, Work Permits, Dependant Passes, and renewals — ensuring every hire meets legal and quota guidelines.',
        },
        {
            title: 'Payroll, HR & Compliance Outsourcing',
            description:
                'From payroll calculations and statutory filings to employee records and leave tracking, we handle it all — ensuring full MOM and international labor law compliance.',
        },
        {
            title: 'Recruitment Process Outsourcing',
            description:
                'We act as an extension of your HR team, managing the complete recruitment cycle — from job postings to onboarding — tailored for urgent, bulk, or niche hiring.',
        },
    ];

    const tabs = [
        'Recruitment Services',
        'HR & Compliance',
        'Consulting & Strategy',
        'Digital Solutions',
        'Training & Onboarding',
    ];

    const buttonStyle = {
        border: '1px solid #FF630F',
        color: '#FF630F',
        borderRadius: '2rem',
        padding: '10px 20px',
        fontWeight: '500',
        backgroundColor: 'transparent',
    };

    return (
        <div>
            {/* Sticky Navbar */}
            <div
          className="position-fixed top-0 start-0 z-3 w-100"
          style={{
            zIndex: 1030,           
          }}
        >
          <Navbar />
        </div>

            {/* MAIN CONTAINER STARTS HERE */}
            <div className="container text-center py-5">
                {/* Heading */}
                <h1 className="mb-3 mt-5" style={{ color: '#FF630F' }} id="row2_tail1">
                    Smart Workforce Solutions, Built for Modern Businesses.
                </h1>

                {/* Subheading */}
                <p className="mb-3 mb-lg-5" id="font_p">
                    From global talent placement to HR outsourcing — we deliver tailored, efficient, and compliant
                    recruitment services across industries and borders.
                </p>

                {/* Card Layout */}
                <div className="row g-4">
                    {[1, 2, 3].map((_, index) => (
                        <div className="col-12 col-md-4" key={index}>
                            <div className="card border-0 shadow-sm h-100 rounded-4 overflow-hidden">
                                <img src={image1} className="card-img-top" alt="Workforce Discussion" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Logo and About Text */}
                <div className="row align-items-center g-2 mt-5 text-start">
                    <div className="col-auto">
                        <img src={logo5} alt="Logo" style={{ height: '30px' }} />
                    </div>
                    <div className="col-auto" style={{ fontSize: '16px', fontWeight: '500' }}>
                        Who We Are
                    </div>
                </div>

                {/* Two-Column Section */}
                <div className="row g-3 mt-1 align-items-stretch text-start">
                    <div className="col-12 col-md-6">
                        <div className="p-1 h-100 d-flex flex-column justify-content-center" style={{ color: '#FF630F' }}>
                            <h1 className="mb-0" id="row2_tail1">Discover the Services That Drive Business Growth</h1>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="p-1 h-100 d-flex flex-column justify-content-center">
                            <p className="mb-0" id="font_p">
                                From global talent placement to HR outsourcing, we deliver smart, compliant, and efficient workforce solutions built for modern businesses.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container py-5">
                    {/* Tabs */}
                    <div className="overflow-auto">
                        <div className="d-flex flex-nowrap gap-2 mb-4" style={{ minWidth: 'max-content' }}>
                            {tabs.map((tab, index) => (
                                <button
                                    id="font_p"
                                    key={index}
                                    className="btn btn-sm rounded-pill px-3 py-2 border"
                                    style={{
                                        backgroundColor: index === 0 ? '#FF630F' : 'transparent',
                                        color: index === 0 ? '#fff' : '#FF630F',
                                        borderColor: '#FF630F',
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>


                    {/* Cards */}
                    <div className="row g-4">
                        {services.map((service, index) => (
                            <div className="col-12 col-md-6" key={index}>
                                <div className="card border-0 rounded-3 h-100 p-3 text-start" style={{ backgroundColor: '#F7F7F7' }}>
                                    <div
                                        style={{
                                            height: '150px',
                                            backgroundColor: '#fff',
                                            borderRadius: '10px',
                                            marginBottom: '1rem',
                                        }}
                                    >
                                        {/* Image Placeholder */}
                                    </div>
                                    <h3 style={{ color: '#FF630F' }}>{service.title}</h3>
                                    <p id="font_p" className="mt-2">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="position-relative w-100 rounded-4 overflow-hidden" style={{ minHeight: '400px' }}>
                    {/* Background Image */}
                    <img
                        src={image1}
                        alt="Background"
                        className="position-absolute top-0 start-0 w-100 h-100"
                        style={{
                            objectFit: 'cover',
                            zIndex: 0,
                        }}
                    />

                    {/* Overlay Content */}
                    <div
                        className="container position-relative py-5 px-4 px-lg-5"
                        style={{
                            zIndex: 2,
                        }}
                    >
                        <div className="row align-items-center g-4 p-1 p-lg-3 bg-white rounded-4 shadow-sm mt-1" style={{ zIndex: 2 }}>
                            {/* Left Column */}
                            <div className="col-12 col-md-6 d-flex flex-column justify-content-center text-start">
                                <h2 className="fw-bold mb-3" style={{ color: '#FF630F'}} id="row2_tail1">
                                    Need a Custom <br /> Recruitment <br /> Solution?
                                </h2>
                                <p className="text-muted mb-4" id="font_p">
                                    Talk to our consultants and discover how Macro Employment can build a workforce strategy tailored to your business goals.
                                </p>

                                {/* Buttons */}
                                <div className="d-flex flex-wrap gap-3">
                                    <button className="btn btn-outline" style={buttonStyle} id="font_p">
                                        Hire Talent <span className="ms-2">&#8594;</span>
                                    </button>
                                    <button className="btn btn-outline" style={buttonStyle} id="font_p">
                                        Find a Job <span className="ms-2">&#8594;</span>
                                    </button>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="col-12 col-md-6 d-flex align-items-center">
                                <div
                                    className="w-100 rounded-4 mb-3"
                                    style={{ backgroundColor: '#ddd', minHeight: '330px' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

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

export default Services
