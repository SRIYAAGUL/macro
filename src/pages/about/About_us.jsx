import React from 'react'
import Navbar from '../../components/Navbar'
import image1 from "../../assets/image1.png"
import image2 from "../../assets/why_about.png"
import logo5 from "../../assets/star.png"
import map1 from "../../assets/map1.png"
import map2 from "../../assets/map2.png"
import map3 from "../../assets/map3.png"
import map4 from "../../assets/map4.png"
import map5 from "../../assets/map5.png"
import map6 from "../../assets/map6.png"
import map7 from "../../assets/map7.png"
import logo4 from "../../assets/arrow.png"
import image1_1 from "../../assets/code.png"
import image2_1 from "../../assets/health.png"
import image3_1 from "../../assets/manufacture.png"
import image4_1 from "../../assets/logistics.png"
import image5_1 from "../../assets/home.png"
import image6_1 from "../../assets/services.png"
import image7_1 from "../../assets/hospitality.png"
import image8_1 from "../../assets/construction.png"
import arrow2 from "../../assets/arrow2.png"
import Footer from '../../components/Footer'

const About_us = () => {

  const cardData = [
    {
      title: 'Integrity',
      description: '"Honest, ethical hiring at every stage — from candidate sourcing to final onboarding, we ensure transparency, fairness, and integrity in every step of the recruitment process.',
    },
    {
      title: 'Efficiency',
      description: 'Fast, accurate placements without compromising on quality — delivering the right talent at the right time, while maintaining excellence, precision, and a deep understanding of each role’s unique needs.',
    },
    {
      title: 'Diversity',
      description: 'Equal opportunity hiring for all — we embrace and celebrate differences, ensuring inclusive hiring practices that welcome talent from all backgrounds.',
    },
    {
      title: 'Diversity',
      description: 'Equal opportunity hiring for all — we embrace and celebrate differences, ensuring inclusive hiring practices that welcome talent from all backgrounds.',
    },
    {
      title: 'Client-Centricity',
      description: 'Solutions tailored to your business and people needs — we align our strategies with your goals to deliver workforce solutions that truly support your growth.',
    },
    {
      title: 'Compliance-first',
      description: 'Adhering to MOM and global employment standards — we prioritize legal and ethical hiring practices, ensuring every placement meets international compliance benchmarks.',
    }
  ];

  const Card2Data = [
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

      {/* Image Section */}
      <br className='d-block d-lg-none' />
      <div className="p-1 p-lg-5">
        <img
          src={image1}
          className="img-fluid w-100 mt-5 mt-lg-5 rounded-4"
          alt="Banner"
          style={{ maxHeight: '550px', objectFit: 'cover' }}
        />

        <div className="row g-3 mt-0 align-items-stretch mt-4">
          {/* Card 1 */}
          <div className="col-12 col-md-6">
            <div
              className="p-1 h-100 d-flex flex-column justify-content-center"
            >
              <h1 id="row2_tail1" className="mb-0">
                Connecting Global Talent with Opportunity.
              </h1>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-md-6">
            <div className="p-1 h-100 d-flex flex-column justify-content-center">
              <p id="font_p" className="mb-0">
                At Macro Employment Services, we redefine recruitment by blending smart technology with human expertise — delivering reliable, ethical, and compliant workforce solutions across borders.
              </p>
            </div>
          </div>
        </div>


        <br />
        <div className="row align-items-center g-2">
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

        <div className="my-5">
          <div className="row">
            {/* Left card - col-7 */}
            <div className="col-12 col-md-7 mb-4">
              <div className="card h-100 text-white p-3" style={{ backgroundColor: '#FF630F' }}>
                <div className="card-body">
                  <p className="card-text" id="row2_tail1">
                    We blend AI-powered recruitment tools with human expertise to deliver smarter, faster, and fully compliant hiring solutions.
                  </p>

                </div>
              </div>
            </div>

            {/* Right card - col-5 */}
            <div className="col-12 col-md-5 mb-4">
              <div className="card border-0 h-100 d-flex flex-column justify-content-between p-5" style={{ backgroundColor: '#F7F7F7' }}>
                {/* Top Heading */}
                <div>
                  <h5 className="card-title mt-4" id="row2_tail1">Our Vision</h5>
                </div>
                {/* Bottom Paragraph */}
                <div>
                  <p className="card-text mb-4" id="font_p">
                    To redefine recruitment by bridging global talent with meaningful opportunities, ensuring ethical and sustainable employment practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-5">
          <div className="row g-4">
            {/* Left Card - Mission */}
            <div className="col-12 col-md-5">
              <div className="card border-0 h-100 d-flex flex-column justify-content-between p-5" style={{ backgroundColor: '#F7F7F7' }}>
                {/* Top Heading */}
                <div>
                  <h5 className="card-title mt-3" id="row2_tail1">Our Mission</h5>
                </div>
                {/* Bottom Paragraph */}
                <div>
                  <p className="card-text" id="font_p">
                    To deliver transparent, technology-driven staffing solutions that empower both employers and jobseekers worldwide.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Card - Flags */}
            <div className="col-12 col-md-7">
              <div className="card h-100 border-0 px-4 py-4" style={{ backgroundColor: '#F7F7F7' }}>
                {/* Top Heading */}
                <h5 className="mt-3 card-title" id="row2_tail1">Serving clients across:</h5>

                {/* Bottom - Flags Grid */}
                <div className="mt-3 row row-cols-2 row-cols-lg-4 g-3 card-text">
                  {[
                    { name: 'Singapore', img: map1 },
                    { name: 'Myanmar', img: map2 },
                    { name: 'Vietnam', img: map3 },
                    { name: 'Malaysia', img: map4 },
                    { name: 'India', img: map5 },
                    { name: 'Philippines', img: map6 },
                    { name: 'Bangladesh', img: map7 },
                  ].map((country, index) => (
                    <div className="col text-start" key={index}>
                      <div className="d-flex align-items-center">
                        <img
                          src={country.img}
                          alt={country.name}
                          style={{ width: '24px', height: '24px', marginRight: '8px' }}
                        />
                        <span className="small">{country.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=''>
          <div className="row align-items-center g-2 mt-5">
            {/* Logo */}
            <div className="col-auto">
              <img src={logo5} alt="Logo" style={{ height: '30px' }} />
            </div>

            {/* Text */}
            <div className="col-auto" style={{ fontSize: '16px', fontWeight: '500' }} id="font_p">
              Our Approach
            </div>
          </div>
          <div className="row g-3 mt-1 align-items-stretch">
            {/* Card 1 */}
            <div className="col-12 col-md-6">
              <div
                className="p-1 h-100 d-flex flex-column justify-content-center"
                style={{ color: '#FF630F' }}
              >
                <h1 id="row2_tail1" className="mb-0">
                  How We Deliver Recruitment That Works
                </h1>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-12 col-md-6">
              <div className="p-1 h-100 d-flex flex-column justify-content-center">
                <p id="font_p" className="mb-0">
                  At Macro Employment Services, we combine cutting-edge AI tools with hands-on recruiter expertise to deliver fast, reliable, and compliant hiring solutions. Every placement is backed by real-time data, structured processes, and a deep understanding of industry-specific demands.
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="py-5 mt-3">
          <div className="row g-4">
            {cardData.map((card, index) => (
              <div className="col-12 col-md-4" key={index}>
                <div className="card h-100 border-0 p-3" style={{ backgroundColor: '#F7F7F7' }}>
                  <div className="border-bottom-0">
                    <h2 className="mb-0 p-3" style={{ color: '#FF630F' }}>{card.title}</h2>
                  </div>
                  <div className="border-top-0">
                    <p className="mb-0 p-3">{card.description}</p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>





        <div className="row align-items-center g-2">
          {/* Logo */}
          <div className="col-auto">
            <img src={logo5} alt="Logo" style={{ height: '30px' }} />
          </div>

          {/* Text */}
          <div className="col-auto" style={{ fontSize: '16px', fontWeight: '500' }} id="font_p">
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

        <div className="row g-4">
          {Card2Data.map((item, idx) => (
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
        <Footer />
      </div>
    </div>
  )
}

export default About_us


