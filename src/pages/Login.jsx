import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { GoogleIcon, AppleIcon } from '../components/SocialIcons';
import Footer from '../components/Footer';
import heroImage from '../assets/images/hero-family.png';
import '../styles/Login.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log('Login attempt with:', formData);
            // Mock login success - navigate to menu
            navigate('/menu');
        }
    };

    return (
        <div className="page-login">
            <div className="login-container">
                {/* Left Panel - Image & Welcome */}
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

                {/* Right Panel - Login Form */}
                <div className="login-right-panel">
                    <div className="login-brand">
                        <span className="logo">Chuks Kitchen</span>
                    </div>

                    <div className="login-header">
                        <h2>Login your Account</h2>
                    </div>

                    <form className="auth-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email or phone number</label>
                            <div className="input-wrapper">
                                <Mail size={20} className="input-icon" />
                                <input
                                    type="text"
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

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <div className="input-wrapper">
                                <Lock size={20} className="input-icon" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    placeholder="******"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className={`auth-input ${errors.password ? 'input-error' : ''}`}
                                />
                                <button
                                    type="button"
                                    className="toggle-password"
                                    onClick={() => setShowPassword(!showPassword)}
                                    aria-label="Toggle password visibility"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                            {errors.password && <p className="error-message">{errors.password}</p>}
                        </div>

                        <div className="forgot-password">
                            <Link to="#">Forgot Password?</Link>
                        </div>

                        <button type="submit" className="submit-btn">
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
                            Don't have an account? <Link to="/register">Create an account</Link>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
