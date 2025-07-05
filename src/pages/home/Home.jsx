import React from 'react'
import image1 from "../../assets/image1.png"
import logo1 from "../../assets/cv.png"
import logo2 from "../../assets/vacancy.png"
import logo3 from "../../assets/jobs.png"
import logo4 from "../../assets/arrow.png"
import logo5 from "../../assets/star.png"
import image2 from "../../assets/row2_img.png"
import image3 from "../../assets/permanent_staffing.png"
import image4 from "../../assets/HR_consulting.png"
import image1_1 from "../../assets/code.png"
import image2_1 from "../../assets/health.png"
import image3_1 from "../../assets/manufacture.png"
import image4_1 from "../../assets/logistics.png"
import image5_1 from "../../assets/home.png"
import image6_1 from "../../assets/services.png"
import image7_1 from "../../assets/hospitality.png"
import image8_1 from "../../assets/construction.png"
import logo1_1 from "../../assets/logo1_1.png"
import world from "../../assets/world.png"
import arrow2 from "../../assets/arrow2.png"
import Trust from "../../assets/trust_img.png"
import Hr from "../../assets/hr.png"
import macro from "../../assets/macro.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer'
import "./Home.css"
import Form from '../../components/Form' 

const Home = () => {

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
  console.log(CardData);


  return (
    <div className="container-fluid p-0"> {/* Wrap everything inside */}
     <div
          className="position-fixed top-0 start-0 z-3 w-100"
          style={{
            zIndex: 1030,           
          }}
        >
          <Navbar />
        </div>

      <div className="position-relative p-2">
        {/* Background Image */}
        <img
          src={image1}
          alt="Hero"
          className="img-fluid w-100"
          style={{ height: '100vh', objectFit: 'cover', borderRadius: '30px' }}
        />
        {/* Bottom Overlay Card */}
        <div
          className="card p-4 shadow container"
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '94%',
            zIndex: 0,
            borderRadius: '20px',
          }}
          id="overlay_card"
        >
          <div className="row">
            {/* Left Section */}
            <div className="col-md-9 col-12 mb-2 mb-md-0 p-md-3">
              <div className="d-flex justify-content-between flex-column">
                <h1 id="font_h4">
                  Find the Right Job.<br /> Hire the Right Talent.
                </h1>
                <p className="text-left mb-md-3 mb-0" id="font_p" style={{ width: '85%' }}>
                  Macro Employment is a leading recruitment and staffing agency connecting skilled professionals with top employers across industries.
                </p>
                <div className="d-flex gap-3 row">
                  <div className="row g-2">
                    <div className="col-6 col-md-3">
                      <button
                        className="btn bg-white d-flex justify-content-between align-items-center gap-2 w-100"
                        id="font_icon_card"
                        style={{
                          border: '1px solid rgba(255, 99, 15, 1)',
                          borderRadius: '40px',
                          minWidth: '100px',
                          padding: '5px 8px 5px 12px',
                        }}
                      >
                        Explore Jobs <img src={logo4} alt="icon" />
                      </button>
                    </div>
                    <div className="col-6 col-md-3">
                      <button
                        className="btn bg-white d-flex justify-content-between align-items-center gap-2 w-100"
                        id="font_icon_card"
                        style={{
                          border: '1px solid rgba(255, 99, 15, 1)',
                          borderRadius: '40px',
                          minWidth: '100px',
                          padding: '5px 8px 5px 12px',
                        }}
                      >
                        Hire Talents <img src={logo4} alt="icon" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Mini Cards */}
            <div className="col-md-3 col-12">
              <div className="row g-2 p-1">
                {[{ logo: logo3, text: "Latest Jobs" }, { logo: logo2, text: "Register Vacancy" }, { logo: logo1, text: "Upload Your CV" }].map((item, index) => (
                  <div className="col-12" key={index}>
                    <div className="rounded p-3 h-100" style={{ backgroundColor: 'rgba(255, 99, 15, 1)' }}>
                      {/* Mobile View */}
                      <div className="row d-flex d-lg-none">
                        <div className="col-3">
                          <img
                            src={item.logo}
                            alt={`Logo ${index + 1}`}
                            className="img-fluid"
                            width={24}
                            height={24}
                          />
                        </div>
                        <div className="col-9 text-white">
                          <h4 id="font_icon_card" className="mb-0 mt-2">{item.text}</h4>
                        </div>
                      </div>
                      {/* Desktop View */}
                      <div className="d-none d-lg-block text-white p-2">
                        <div className="mb-2">
                          <img
                            src={item.logo}
                            alt={`Logo ${index + 1}`}
                            width={24}
                            height={24}
                          />
                        </div>
                        <h4 id="font_icon_card" className="mb-0">{item.text}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section: Same Width */}
      <div className="container">

        <div className="row align-items-center g-2 mt-5">
          {/* Logo */}
          <div className="col-auto">
            <img src={logo5} alt="Logo" style={{ height: '30px' }} />
          </div>

          {/* Text */}
          <div className="col-auto" style={{ fontSize: '16px', fontWeight: '500' }} id="font_p">
            About Macro Employment
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
                Your Trusted Recruitment & Staffing Partner.
              </h1>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-md-6">
            <div className="p-1 h-100 d-flex flex-column justify-content-center">
              <p id="font_p" className="mb-0">
                People are at the heart of everything we do. That’s why our recruitment services are built on trust,
                expertise, and a genuine commitment to your success.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Image */}
        <img src={image2} className="img-fluid mt-4" />
        <div className="mt-5">
          <div className="row g-4">

            {/* Card 1 */}
            <div className="col-12 col-md-4">
              <div className="card h-100 p-3" style={{ border: 'none', backgroundColor: '#F9F9F9' }}>
                <div className="mb-2">
                  <h5 style={{ color: '#FF630F' }} id="row2_tail1">15+ Years</h5>
                </div>
                <div>
                  <p className="mt-3 mt-md-5" id="font_p">
                    of Industry Expertise
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-12 col-md-4">
              <div className="card h-100 p-3" style={{ border: 'none', backgroundColor: '#F9F9F9' }}>
                <div className="mb-2">
                  <h5 style={{ color: '#FF630F' }} id="row2_tail1">10,000 +</h5>
                </div>
                <div>
                  <p className="mt-3 mt-md-5" id="font_p">
                    Successful Placements
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-12 col-md-4">
              <div className="card h-100 p-3" style={{ border: 'none', backgroundColor: '#F9F9F9' }}>
                <div className="mb-2">
                  <h5 style={{ color: '#FF630F' }} id="row2_tail1">300 +</h5>
                </div>
                <div>
                  <p className="mt-3 mt-md-5" id="font_p">
                    Trusted Businesses
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row g-4">

          {/* Card 1 */}
          <div className="col-12 col-md-6">
            <div className="h-100 p-3 p-md-1" style={{ border: 'none' }}>
              <h1 style={{ color: '#FF630F' }} id="row2_tail1">Our Staffing & HR Solutions</h1>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-md-6 mt-0 mt-md-3 ">
            <div className="h-100 p-3" style={{ border: 'none' }}>
              <p className="mb-0">
                We provide a complete range of recruitment and HR services designed to meet your unique workforce needs.
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

          <div className="container mt-4">
            <div className="row justify-content-center">
              {/* Card 1 */}
              <div className="col-md-6 mb-4">
                <div className="card d-flex flex-column flex-md-row overflow-hidden" style={{ border: 'none', backgroundColor: '#F9F9F9' }}>
                  {/* Left: Image */}
                  <div className="w-100 p-0 p-lg-3 w-md-60 position-relative" style={{ height: '100%' }}>
                    <img
                      src={image3}
                      alt="Card 1"
                      className="img-fluid w-100 rounded "
                      style={{ objectFit: 'cover', height: '400px' }}
                    />
                  </div>
                  {/* Right: Content */}
                  <div className="d-none d-lg-flex w-100 w-md-50 p-3 d-flex flex-column justify-content-between">
                    <h5 id="row2_tail1">Permanent Staffing</h5>
                    <p className="mb-0">
                      Find the right people for long-term success. We help businesses recruit qualified, reliable, and culturally aligned professionals for permanent roles, ensuring your team grows stronger with every hire.
                    </p>
                    <button
                      className="btn bg-white d-flex justify-content-between align-items-center gap-2 w-100"
                      id="font_icon_card"
                      style={{
                        border: '1px solid rgba(255, 99, 15, 1)',
                        borderRadius: '40px',
                        minWidth: '100px',
                        padding: '5px 8px 5px 12px',
                      }}
                    >
                      Learn More <img src={logo4} alt="icon" />
                    </button>
                  </div>
                  {/*mobile view*/}
                  <div className="d-flex d-lg-none position-absolute top-0 start-0 w-100 h-100 p-3 text-white"
                    style={{ background: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="my-auto w-100">
                      <h5 id="row2_tail1" className="mb-2">Permanent Staffing</h5>
                      <p className="mb-4">
                        Find the right people for long-term success. We help businesses recruit qualified, reliable, and culturally aligned professionals.
                      </p>
                      <button
                        className="btn bg-white text-dark d-flex justify-content-between align-items-center gap-2 w-100 mt-5"
                        id="font_icon_card"
                        style={{
                          border: '1px solid rgba(255, 99, 15, 1)',
                          borderRadius: '40px',
                          padding: '6px 12px',
                        }}
                      >
                        Learn More <img src={logo4} alt="icon" />
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* Card 2 */}
              <div className="col-md-6 mb-4">
                <div className="card d-flex flex-column flex-md-row overflow-hidden" style={{ border: 'none', backgroundColor: '#F9F9F9' }}>
                  {/* Left: Image */}
                  <div className="w-100 p-0 p-lg-3 w-md-60 position-relative" style={{ height: '200px', height: '100%' }}>
                    <img
                      src={image4}
                      alt="Card 2"
                      className="img-fluid w-100 rounded"
                      style={{ objectFit: 'cover', height: '400px' }}
                    />
                  </div>
                  {/* Right: Content */}
                  <div className="d-none d-lg-flex w-100 w-md-50 p-3 d-flex flex-column justify-content-between">
                    <h5 id="row2_tail1">Contract Staffing</h5>
                    <p className="mb-0">
                      Flexible workforce solutions tailored to your project needs. Our contract staffing services ensure you get the right talent, right when you need them, without long-term commitments.
                    </p>
                    <button
                      className="btn bg-white d-flex justify-content-between align-items-center gap-2 w-100"
                      id="font_icon_card"
                      style={{
                        border: '1px solid rgba(255, 99, 15, 1)',
                        borderRadius: '40px',
                        minWidth: '100px',
                        padding: '5px 8px 5px 12px',
                      }}
                    >
                      Learn More <img src={logo4} alt="icon" />
                    </button>
                  </div>
                  {/*mobile view*/}
                  <div className="d-flex d-lg-none position-absolute top-0 start-0 w-100 h-100 p-3 text-white"
                    style={{ background: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="my-auto w-100">
                      <h5 id="row2_tail1" className="mb-2">Permanent Staffing</h5>
                      <p className="mb-4">
                        Find the right people for long-term success. We help businesses recruit qualified, reliable, and culturally aligned professionals.
                      </p>
                      <button
                        className="btn bg-white text-dark d-flex justify-content-between align-items-center gap-2 w-100 mt-5"
                        id="font_icon_card"
                        style={{
                          border: '1px solid rgba(255, 99, 15, 1)',
                          borderRadius: '40px',
                          padding: '6px 12px',
                        }}
                      >
                        Learn More <img src={logo4} alt="icon" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row g-4 mt-4">

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

            <div className="row g-4 mt-4">
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
            </div>

            <div
              style={{
                background: 'linear-gradient(180deg, #FF630F 0%, #FD9727 50%, #FF630F 100%)',
                color: 'white',
              }}
              className='rounded-4'
            >
              <div className="text-center mt-5 p-3">
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
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
