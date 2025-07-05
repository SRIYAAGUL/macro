import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import image1 from "../../assets/image1.png"
import image2 from "../../assets/shake_hand.png"
import logo5 from "../../assets/star.png"
import logo4 from "../../assets/arrow.png"
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
import arrow2 from "../../assets/arrow2.png"

const Hire_talent = () => {

    const services = [
        {
            title: 'Work Pass Processing & Documentation',
            description:
                'We manage all necessary work pass applications, MOM-compliant contracts, and legal paperwork, ensuring a smooth and risk-free hiring process.',
        },
        {
            title: 'Consultation & Role Briefing',
            description:
                'We start by understanding your hiring needs, role requirements, and timelines to craft a custom recruitment plan.',
        },
        {
            title: 'Onboarding & Post-Hire Support',
            description:
                'Once hired, we assist with onboarding and provide ongoing support to ensure smooth integration and job readiness for your new team member.',
        },
        {
            title: 'AI-Driven Candidate Sourcing',
            description:
                'Using smart technology and verified talent databases, we quickly identify and shortlist the best-fit candidates for your business.',
        },
        {
            title: 'Screening, Interviews & Shortlisting',
            description:
                'Our recruiters handle all candidate screening, assessments, and interviews — delivering a refined shortlist for your review.',
        },
        {
            title: 'End-to-End Hiring Support',
            description:
                'From job posting to onboarding and work pass processing.',
        },

    ];

    const cardData = [
        {
            title: 'Integrity',
            description: 'Honest, ethical hiring at every stage.',
        },
        {
            title: 'Efficiency',
            description: 'Fast, accurate placements without compromising quality.',
        },
        {
            title: 'Diversity',
            description: 'Equal opportunity hiring for all.',
        },
        {
            title: 'Diversity',
            description: 'Equal opportunity hiring for all.',
        },
        {
            title: 'Client-Centricity',
            description: 'Solutions tailored to your business and people needs.',
        },
        {
            title: 'Compliance-first',
            description: 'Adhering to MOM and global employment standards.',
        },
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
            <div
          className="position-fixed top-0 start-0 z-3 w-100"
          style={{
            zIndex: 1030,           
          }}
        >
          <Navbar />
        </div>

            <div className="container py-5">
                {/* Heading */}
                <h1 className="mb-3 text-center mt-5" style={{ color: '#FF630F' }} id="row2_tail1">
                    Smart Workforce Solutions, Built for Modern Businesses.
                </h1>
                <img src={image2} className='image-fluid w-100' style={{maxHeight: '440px'}} />

                <div className="container my-4">
                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                        <p className="mb-0" id='font_p'>
                            Fast, reliable, and compliant hiring services tailored to your business needs.
                        </p>

                        <button
                            className="btn"
                            style={{
                                border: '2px solid #FF630F',
                                color: '#000',
                                borderRadius: '30px',
                                padding: '6px 16px',
                                fontWeight: '500',
                                backgroundColor: 'transparent',
                            }}
                            id='font_p'
                        >
                            Training & Onboarding
                        </button>
                    </div>
                </div>
                <div className=''>
                    <div className="row align-items-center g-2 mt-3">
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


                <div className="mt-4">
                    <div className="row g-4">
                        {cardData.map((card, index) => (
                            <div className="col-12 col-md-4" key={index}>
                                <div className="card h-100 border-0" style={{ backgroundColor: '#F7F7F7' }}>
                                    <div className="border-bottom-0">
                                        <h2 className="mb-0 p-3" style={{ color: '#FF630F' }}>{card.title}</h2>
                                    </div>
                                    <div className="border-top-0 mt-5">
                                        <p className="mb-0 p-3">{card.description}</p>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="row g-4 mt-4">

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
                    </div>
                </div>
                {/* Logo and About Text */}
                <div className="row align-items-center g-2 mt-3 text-start">
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
                            <h1 className="mb-0" id="row2_tail1">A Seamless Hiring Experience, Start to Finish</h1>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="p-1 h-100 d-flex flex-column justify-content-center">
                            <p className="mb-0" id="font_p">
                                Our process combines AI-powered sourcing, expert screening, and complete legal support to make hiring effortless for you.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="container py-5">
                    {/* Cards */}
                    <div className="row g-4">
                        {services.map((service, index) => (
                            <div className="col-12 col-md-4" key={index}>
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
                <div className="row g-4 mt-1">
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
            </div>
            <Footer />
        </div>
    )
}

export default Hire_talent
