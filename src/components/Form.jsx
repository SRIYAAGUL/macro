import React, { useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';


const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        location: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/form', formData);
            Swal.fire({
                icon: 'success',
                title: 'Submitted!',
                text: `Thanks, ${formData.name || 'User'}! Your message has been received.`,
            });
            console.log(res.data);
        } catch (err) {
            alert('Submission failed!');
            console.error(err);
        }
    };

    return (
        <div>
            <form className='mt-5' onSubmit={handleSubmit}>
                {/* Row 1: Name & Email */}
                <div className="row mb-3">
                    <div className="col-md-6 mb-3">
                        <label className="form-label custom-label">Name</label>
                        <input
                            type="text"
                            className="form-control custom-input"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label custom-label">Email</label>
                        <input
                            type="email"
                            className="form-control custom-input"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                {/* Row 2: Mobile No & Location */}
                <div className="row mb-3">
                    <div className="col-md-6 mb-3">
                        <label className="form-label custom-label">Mobile No</label>
                        <input
                            type="tel"
                            className="form-control custom-input"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label custom-label">Location</label>
                        <input
                            type="text"
                            className="form-control custom-input"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* Row 3: Message */}
                <div className="mb-3">
                    <label className="form-label custom-label">How can we help you?</label>
                    <textarea
                        className="form-control custom-input"
                        rows="4"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="mt-5">
                    <button type="submit" className="custom-submit-btn">
                        Submit Information
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form
