import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, Phone, CheckSquare } from 'lucide-react';
import { GoogleIcon, AppleIcon } from '../components/SocialIcons';
import Footer from '../components/Footer';
import heroImage from '../assets/images/hero-family.png';
import '../styles/Login.css';
import '../styles/Register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        agreeToTerms: false
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.phone) newErrors.phone = 'Phone number is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        if (!formData.agreeToTerms) {
            newErrors.agreeToTerms = 'You must agree to the terms';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Register attempt:', formData);

            navigate('/login');
        }
    };

    return (
        <div className="page-login">
            <div className="login-container">
                <div className="login-left-panel">
                    <img src={heroImage} alt="Chuks Kitchen Welcome" className="login-bg-image" />
                    <div className="login-overlay">
                        <div className="overlay-content">
                            <h1>Chuks Kitchen</h1>
                            <p>
                                Your journey to delicious, authentic Nigerian meals starts here.
                                Sign up or log in to order your favorites today!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="login-right-panel">
                    <div className="login-brand">
                        <span className="logo">Chuks Kitchen</span>
                    </div>

                    <div className="login-header">
                        <h2>Create Your Account</h2>
                    </div>

                    <form className="auth-form" onSubmit={handleSubmit}>
                        <div className="form-group register-form-group">
                            <label htmlFor="email">Email</label>
                            <div className="input-wrapper">
                                <Mail size={20} className="input-icon" />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="name@gmail.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`auth-input ${errors.email ? 'input-error' : ''}`}
                                />
                            </div>
                            {errors.email && <p className="error-message">{errors.email}</p>}
                        </div>

                        <div className="form-group register-form-group">
                            <label htmlFor="phone">Phone number</label>
                            <div className="input-wrapper">
                                <Phone size={20} className="input-icon" />
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="8123340690"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={`auth-input ${errors.phone ? 'input-error' : ''}`}
                                />
                            </div>
                            {errors.phone && <p className="error-message">{errors.phone}</p>}
                        </div>

                        <div className="form-group register-form-group">
                            <label htmlFor="password">Password</label>
                            <div className="input-wrapper">
                                <Lock size={20} className="input-icon" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    placeholder="QWE123#"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className={`auth-input ${errors.password ? 'input-error' : ''}`}
                                />
                                <button type="button" className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                            {errors.password && <p className="error-message">{errors.password}</p>}
                        </div>

                        <div className="form-group register-form-group">
                            <label htmlFor="confirmPassword">Confirm password</label>
                            <div className="input-wrapper">
                                <Lock size={20} className="input-icon" />
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    placeholder="QWE123#"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className={`auth-input ${errors.confirmPassword ? 'input-error' : ''}`}
                                />
                                <button type="button" className="toggle-password" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                            {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
                        </div>

                        <div className="checkbox-group">
                            <input
                                type="checkbox"
                                id="agreeToTerms"
                                name="agreeToTerms"
                                checked={formData.agreeToTerms}
                                onChange={handleChange}
                            />
                            <label htmlFor="agreeToTerms">
                                I agree to the <Link to="/terms">Terms & Conditions</Link> and <Link to="/privacy">Privacy Policy</Link>
                            </label>
                        </div>
                        {errors.agreeToTerms && <p className="error-message" style={{ marginTop: '-20px', marginBottom: '20px' }}>{errors.agreeToTerms}</p>}

                        <button type="submit" className="submit-btn" style={{ marginTop: '0' }}>
                            Continue
                        </button>

                        <div className="divider">Or continue with</div>

                        <div className="social-login">
                            <button type="button" className="social-btn">
                                <GoogleIcon /> Continue with Google
                            </button>
                            <button type="button" className="social-btn">
                                <AppleIcon /> Continue with Apple
                            </button>
                        </div>

                        <div className="create-account">
                            Already have an account? <Link to="/login">Sign In</Link>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Register;
