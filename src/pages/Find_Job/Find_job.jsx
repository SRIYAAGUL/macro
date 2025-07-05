import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import image1 from "../../assets/zoom_meet.png"
import image2 from "../../assets/why_about2.png"
import image1_1 from "../../assets/code.png"
import image2_1 from "../../assets/health.png"
import image3_1 from "../../assets/manufacture.png"
import image4_1 from "../../assets/logistics.png"
import image5_1 from "../../assets/home.png"
import image6_1 from "../../assets/services.png"
import image7_1 from "../../assets/hospitality.png"
import image8_1 from "../../assets/construction.png"
import logo4 from "../../assets/arrow.png"
import logo5 from "../../assets/star.png"
import { FaArrowRight, FaFileUpload, FaClipboardList, FaBriefcase } from 'react-icons/fa';
import world from "../../assets/world.png"
import arrow2 from "../../assets/arrow2.png"
import Trust from "../../assets/trust_img.png"
import Hr from "../../assets/hr.png"
import logo1_1 from "../../assets/logo1_1.png"
import Form from '../../components/Form'

const Find_job = () => {
  const CardData = [
    {
      image: image1_1,
      title: "IT & Technology Staffing",
      jobs: "54,215 jobs available"
    },
    {
      image: image2_1,
      title: "Healthcare & Medical",
      jobs: "54,215 jobs available"
    },
    {
      image: image3_1,
      title: "Manufacturing & Production",
      jobs: "54,215 jobs available"
    },
    {
      image: image4_1,
      title: "Logistics & Supply Chain",
      jobs: "54,215 jobs available"
    },
    {
      image: image5_1,
      title: "Retail & FMCG Hiring",
      jobs: "54,215 jobs available"
    },
    {
      image: image6_1,
      title: "Banking & Financial Services",
      jobs: "54,215 jobs available"
    },
    {
      image: image7_1,
      title: "Hospitality & Services",
      jobs: "54,215 jobs available"
    },
    {
      image: image8_1,
      title: "Construction & Infrastructure",
      jobs: "54,215 jobs available"
    },
  ];
   const CardData2 = [
      {
        image: logo1_1,
        title: "Logoipsum",
      },
      {
        image: logo1_1,
        title: "Logoipsum",
      },
      {
        image: logo1_1,
        title: "Logoipsum",
      },
      {
        image: logo1_1,
        title: "Logoipsum",
      },
      {
        image: logo1_1,
        title: "Logoipsum",
      },
      {
        image: logo1_1,
        title: "Logoipsum",
      },
      {
        image: logo1_1,
        title: "Logoipsum",
      },
      {
        image: logo1_1,
        title: "Logoipsum",
      },
      {
        image: logo1_1,
        title: "Logoipsum",
      },
      {
        image: logo1_1,
        title: "Logoipsum",
      },
    ];
   const services = [
        {
            title: 'Global Talent Reach',
            description:
                'Access qualified candidates from India, Bangladesh, Myanmar, Vietnam, and beyond.',
        },
        {
            title: 'AI-Powered Talent Sourcing',
            description:
                'Faster, smarter hiring through technology-assisted shortlisting.',
        },
        {
            title: 'Industry-Focused Expertise',
            description:
                'Recruiters who understand your sector’s unique workforce needs',
        },
        {
            title: 'Fast Turnaround, No Delays',
            description:
                'Quick response and efficient documentation management.',
        },
        {
            title: 'MOM & Legal Compliance',
            description:
                'Every hire meets all employment and regulatory standards.',
        },
        {
            title: 'End-to-End Hiring Support',
            description:
                'From job posting to onboarding and work pass processing.',
        },
    
    ];
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

      <div className="container text-center py-4">
        {/* Heading */}
        <h1 className=" mt-5" style={{ color: '#FF630F' }} id="row2_tail1">
          Discover Verified Global Job Opportunities.
        </h1>

        {/* Subheading */}
        <p className="" id="font_p">
          Explore trusted job openings in logistics, healthcare, construction, IT, hospitality, and more — with complete support and no hidden fees.
        </p>
      </div>

      <div className="rounded-4 container" style={{
        position: 'relative',
        backgroundImage: `url(${image1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '450px',
      }}
        id="font_p"
      >
        {/* Dark Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
        }} />

        {/* Search Bar */}
        <div
          className="position-absolute start-50 translate-middle-x d-flex justify-content-between align-items-center px-4 py-3 rounded-pill"
          style={{
            backgroundColor: '#fff',
            color: '#666',
            maxWidth: '700px',
            width: '100%',
            border: '2px solid #FF630F',
            fontWeight: 500,
            top: '-15px',
            zIndex: 2, // make sure it's above dark overlay
          }}
        >
          <span>Find jobs in industries that fit your skills and interests.</span>
          <FaArrowRight color="#FF630F" />
        </div>

        <div
          className="position-absolute bottom-0 start-50 translate-middle-x mb-4 z-2 d-flex flex-wrap justify-content-center gap-3"
          style={{ zIndex: 2 }}
        >
          {[
                        { icon: <FaBriefcase />, text: 'Latest Jobs' },
            { icon: <FaClipboardList />, text: 'Register Vacancy' },
            { icon: <FaFileUpload />, text: 'Upload Your CV' },
          ].map((item, index) => (
            <div
              key={index}
              className="d-flex flex-column align-items-center justify-content-center px-4 py-3 text-white"
              style={{
                backgroundColor: '#FF630F',
                borderRadius: '16px',
                minWidth: '150px',
                textAlign: 'center',
              }}
            >
              <div className="mb-2 fs-4">{item.icon}</div>
              <div className="">{item.text}</div>
            </div>
          ))}
        </div>
      </div>

      <div className='container'>
        <div className="row g-4 mt-3">

          {/* Card 1 */}
          <div className="col-12 col-md-6">
            <div className="h-100 p-3 p-md-1" style={{ border: 'none' }}>
              <h1 style={{ color: '#FF630F' }} id="row2_tail1">Industries We Specialize In</h1>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-md-6 mt-0 mt-md-3 ">
            <div className="h-100 p-3" style={{ border: 'none' }}>
              <p className="mb-0">
                Macro Employment partners with businesses across diverse sectors, offering specialized staffing services tailored to industry-specific requirements.
              </p>
              <button
                className="btn bg-white d-flex justify-content-between align-items-center gap-2 w-100 mt-3"
                id="font_icon_card"
                style={{
                  border: '1px solid rgba(255, 99, 15, 1)',
                  borderRadius: '40px',
                  minWidth: '100px',
                  padding: '5px 8px 5px 12px',
                }}
              >
                Explore Our Services <img src={logo4} alt="icon" />
              </button>
            </div>
          </div>
        </div>

        <div className="row g-4 mt-1">
          {CardData.map((item, idx) => (
            <div className="col-12 col-sm-6 col-md-3" key={idx}>
              <div className="card h-100 p-3" style={{ backgroundColor: '#F9F9F9', border: 'none' }}>
                <div className=' align-items-start justify-content-start mt-5'>
                  {/* Top icon/image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="mb-3 "
                    style={{
                      height: "30px",
                      objectFit: "contain"
                    }}
                  />
                </div>
                {/* Title */}
                <h6 className="fw-bold mb-1">{item.title}</h6>

                {/* Jobs + logo on same row */}
                <div className="d-flex justify-content-between align-items-center">
                  <p className="text-muted small mb-0">{item.jobs}</p>
                  <img
                    src={logo4}
                    alt="logo"
                    style={{ height: "30px", objectFit: "contain", flexShrink: 0 }}
                  />
                </div>

              </div>
            </div>
          ))}

          

            <div className="col-auto mt-5">
            <img src={logo5} alt="Logo" style={{ height: '30px' }} />
          </div>
          <div className="col-auto mt-5" style={{ fontSize: '16px', fontWeight: '500' }} id="font_p">
            Our Approach
          </div>
        </div>
        <div className="row g-3 mt-0 align-items-stretch">
          {/* Card 1 */}
          <div className="col-12 col-md-6">
            <div
              className="p-1 h-100 d-flex flex-column justify-content-center"
              style={{ color: '#FF630F' }}
            >
              <h1 id="row2_tail1" className="mb-0">
                Why Partner with Macro Employment?
              </h1>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-md-6">
            <div className="p-1 h-100 d-flex flex-column justify-content-center">
              <p id="font_p" className="mb-0 mt-5">
                we just don't fill position - we build long term recuriment partnerships based on trust efficency and results
              </p>
            </div>
          </div>
        </div>


        <img
          src={image2}
          className="img-fluid w-100 mt-5 mt-lg-5 rounded-4"
          alt="Banner"
          style={{ maxHeight: '530px', objectFit: 'cover' }}
        />
       
         <div className="container py-5">
                    {/* Cards */}
                    <div className="row g-4">
                        {services.map((service, index) => (
                            <div className="col-12 col-md-4" key={index}>
                                <div className="card border-0 rounded-3 h-100 p-3 text-start" style={{ backgroundColor: '#F7F7F7' }}>
                                    <h3 style={{ color: '#FF630F' }}>{service.title}</h3>
                                    <p id="font_p" className="mt-2">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
<div
              style={{
                background: 'linear-gradient(180deg, #FF630F 0%, #FD9727 50%, #FF630F 100%)',
                color: 'white',
              }}
              className='rounded-4'
            >
              <div className="text-center p-3">
                <div className="mt-5" style={{ maxWidth: '800px', margin: '0 auto' }}>
                  <h1 className="fw-bold p-3" id="row2_tail1">
                    Connecting Skilled Talent Across Borders.
                  </h1>
                  <p className="mb-4" id="font_p">
                    Macro Employment provides manpower recruitment services from multiple countries, delivering diverse,
                    qualified candidates to meet your workforce needs.
                  </p>
                </div>

                {/* Image section*/}
                <div>
                  <img
                    src={world}
                    alt="World"
                    className="img-fluid mb-5"
                    style={{ maxHeight: '500px' }}
                  />
                </div>
                <h3 id="row2_tail1">Trusted By</h3>
                <div className="row g-3 px-3">
                  {CardData2.map((item, idx) => (
                    <div
                      key={idx}
                      className="col-6 col-lg custom-card-box"
                    >
                      <div className="d-flex align-items-center p-3 border rounded">
                        <img
                          src={item.image}
                          alt="image"
                          style={{ width: '20px', height: '20px', marginRight: '10px' }}
                        />
                        <span id="font_p">{item.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>


            <div className="position-relative w-100 mt-5 rounded-4" style={{ overflow: 'hidden' }}>
              {/* Background Image */}
              <img
                src={image1}
                alt="Background"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  zIndex: 0,
                }}
              />

              {/* Overlay Content */}
              <div
                className="position-relative px-3 px-md-5 py-4 rounded-4"
                style={{ zIndex: 1, backgroundColor: 'white', margin: '15px' }}
              >
                {/* First Row: Two Cards */}
                <div className="row g-4 mt-1 p-3">
                  <div className="col-12 col-md-6">
                    <h1 style={{ color: '#FF630F' }} id="row2_tail1">Looking to Hire Top Talent?</h1>
                  </div>
                  <div className="col-12 col-md-6">
                    <p className="mb-0" id="font_p">
                      Build your dream team with Macro Employment. We offer fast, reliable recruitment services to help you find pre-vetted, skilled professionals for every role — from entry-level to executive leadership.
                    </p>
                  </div>
                </div>

                {/* Second Row: Button */}
                <div className="row mt-3">
                  <div className="col-12 p-3">
                    <button
                      className="btn bg-white d-flex justify-content-between align-items-center gap-2 w-100 fw-bold"
                      style={{
                        border: '1px solid rgba(255, 99, 15, 1)',
                        borderRadius: '40px',
                        padding: '10px 10px 10px 12px',
                        color: '#FF630F',
                      }}
                      id="font_p"
                    >
                      Request Staffing Support <img src={arrow2} alt="icon" />
                    </button>
                  </div>
                </div>
              </div>
            </div>


            <div className="row align-items-center g-2 mt-5 mb-1">
              {/* Logo */}
              <div className="col-auto">
                <img src={logo5} alt="Logo" style={{ height: '30px' }} />
              </div>

              {/* Text */}
              <div className="col-auto" style={{ fontSize: '16px', fontWeight: '500' }} id="font_p">
                Testimonials
              </div>
            </div>

            <h1 className='row2_tail1'>Trusted by Businesses & Professionals</h1>

            <div className="row g-4 align-items-stretch mt-1 mb-2">
              {/* Image Card - Left Side */}
              <div className="col-12 col-md-6">
                <div className="h-100 rounded overflow-hidden shadow-sm">
                  <img
                    src={Trust}
                    alt="Industry"
                    className="img-fluid w-100 h-100"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>

              {/* Content Card - Right Side */}
              <div className="col-12 col-md-6">
                <div className="p-4 border-0 border-md rounded shadow-sm h-100 d-flex flex-column justify-content-between text-white" style={{ backgroundColor: '#333333' }}>
                  {/* Quote Top */}
                  <div>
                    <div className="mb-2">
                      <i className="bi bi-quote" style={{ fontSize: '1.5rem', color: '#FF630F' }}></i>
                    </div>
                    <p className="mt-4 p-2" id="font_p">
                      Macro Employment has been a reliable hiring partner for years. Their team consistently delivers quality candidates on time.
                    </p>
                  </div>

                  {/* Bottom: Image and Name */}
                  <div className="d-flex align-items-center mt-3 mb-2">
                    <img
                      src={Hr}// Replace with actual image path
                      alt="HR Manager"
                      className="me-2"
                      style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                    />
                    <div>
                      <strong>Ramesh Kumar</strong><br />
                      <small className="text-white">HR Manager, TechNova Inc.</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <h1 id="font_h4" className='mt-4 w-50'>
              Let's Bring Your
              <span style={{ color: '#FF630F' }}> Dream Team </span> to Life.
            </h1>

            <div className="container my-5 p-4" style={{ backgroundColor: '#F9F9F9' }}>
              <h3 className="mb-2" id="row2_tail1">Book a Free Consultation</h3>
              <p className="mb-3" id="font_p">Ready to discuss your hiring needs or career goals? Get in touch with Macro Employment today.</p>
             
             <Form />
          </div>
      </div>
      <Footer />
    </div>
  )
}

export default Find_job
