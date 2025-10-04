import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  Send,
  CheckCircle,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim())
      newErrors.message = "Message is required";
    else if (formData.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await emailjs.send(
        "service_ozw91c3",
        "template_lqk2h5l",
        formData,
        "fl9z4ViBJ96ymiudq"
      );
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } catch (err) {
      console.error("Email sending error:", err);
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      details: "hello@webcraft.com",
      subtext: "We typically respond within 24 hours",
    },
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      details: (
        <>
          <p>+91 84540 30044</p>
        </>
      ),
      subtext: "Available Monday to Friday, 9 AM - 7 PM IST",
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      url: "https://linkedin.com/company/webcraft",
      name: "LinkedIn",
    },
    {
      icon: <Twitter size={20} />,
      url: "https://twitter.com/webcraftteam",
      name: "Twitter",
    },
    {
      icon: <Github size={20} />,
      url: "https://github.com/webcraftteam",
      name: "GitHub",
    },
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero section">
        <div className="container text-center">
          <h1 className="fade-in">Get In Touch</h1>
          <p className="lead fade-in fade-in-delay-1">
            Ready to start your project? We&apos;d love to hear from you. Send
            us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section section">
        <div className="container contact-content">
          {/* Contact Form */}
          <div className="contact-form-section fade-in">
            <h2>Send us a message</h2>
            <p>
              Fill out the form below and we&apos;ll get back to you within 24
              hours.
            </p>

            {isSubmitted ? (
              <div className="success-message">
                <CheckCircle size={48} />
                <h3>Message Sent Successfully!</h3>
                <p>
                  Thank you for reaching out. We&apos;ll be in touch soon to
                  discuss your project.
                </p>
                <button
                  className="btn btn-primary"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form text-black" autoComplete="off">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={errors.name ? "error" : ""}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <span className="error-message">{errors.name}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={errors.email ? "error" : ""}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <span className="error-message">{errors.email}</span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={errors.subject ? "error" : ""}
                    placeholder="What&apos;s this about?"
                  />
                  {errors.subject && (
                    <span className="error-message">{errors.subject}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={errors.message ? "error" : ""}
                    placeholder="Tell us about your project..."
                    rows="6"
                  />
                  {errors.message && (
                    <span className="error-message">{errors.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="contact-info-section fade-in fade-in-delay-2">
            <h2>Contact Information</h2>
            <p>
              Prefer to reach out directly? Here are all the ways you can get in
              touch with us.
            </p>

            <div className="contact-info-cards">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="contact-info-card">
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-details">
                    <h3>{info.title}</h3>
                    <div className="contact-main">{info.details}</div>
                    <p className="contact-sub">{info.subtext}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="social-section">
              <h3>Follow Us</h3>
              <div className="flex space-x-4 mt-4">
                <a
                  href="#"
                  className="w-28 h-28 flex items-center justify-center bg-gray-800 rounded-full hover:bg-pink-500 transition"
                >
                  <FaInstagram />
                </a>
              </div>
              <p>Stay updated with our latest work and insights</p>
              <div className="social-links">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="response-time">
              <h3>Quick Response Promise</h3>
              <p>
                We understand that time is valuable. That&apos;s why we
                guarantee a response to all inquiries within 24 hours, often
                much sooner. For urgent matters, please call us directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-page {
          padding-top: 80px;
        }

        .contact-hero {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        }

        .contact-section {
          background: white;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .contact-form-section h2,
        .contact-info-section h2 {
          margin-bottom: 1rem;
          color: var(--text-dark);
        }

        .contact-form-section p,
        .contact-info-section p {
          color: var(--text-light);
          margin-bottom: 2rem;
        }

        .contact-form {
          display: grid;
          gap: 1.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-group {
          display: grid;
          gap: 0.5rem;
        }

        .form-group label {
          font-weight: 500;
          color: var(--text-dark);
          font-size: 0.95rem;
        }

        .form-group input,
        .form-group textarea {
          padding: 1rem;
          border: 2px solid var(--border-gray);
          border-radius: 0.5rem;
          font-size: 1rem;
          font-family: inherit;
          transition: all 0.3s ease;
          background: white;
          color: black; /* Fix: ensure typed text is visible */
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #6b7280; /* subtle gray */
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary-blue);
          box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.1);
        }

        .form-group input.error,
        .form-group textarea.error {
          border-color: #DC2626;
          box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
        }

        .error-message {
          color: #DC2626;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          justify-self: start;
          width: 200px;
          position: relative;
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .success-message {
          text-align: center;
          padding: 3rem 2rem;
          background: #F0FDF4;
          border-radius: 1rem;
          border: 1px solid #BBF7D0;
        }

        .success-message svg {
          color: #16A34A;
          margin-bottom: 1.5rem;
        }

        .success-message h3 {
          color: var(--text-dark);
          margin-bottom: 1rem;
        }

        .success-message p {
          color: var(--text-light);
          margin-bottom: 2rem;
        }

        .contact-info-cards {
          display: grid;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .contact-info-card {
          display: flex;
          gap: 1rem;
          padding: 1.5rem;
          background: #f8fafc;
          border-radius: 1rem;
          border: 1px solid var(--border-gray);
          transition: all 0.3s ease;
        }

        .contact-info-card:hover {
          background: white;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .contact-icon {
          color: var(--primary-blue);
          flex-shrink: 0;
        }

        .contact-details h3 {
          margin-bottom: 0.5rem;
          color: var(--text-dark);
          font-size: 1.1rem;
        }

        .contact-main {
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 0.25rem;
          font-size: 1rem;
        }

        .contact-sub {
          color: var(--text-light);
          font-size: 0.9rem;
          margin: 0;
        }

        .social-section {
          margin-bottom: 3rem;
        }

        .social-section h3 {
          margin-bottom: 0.5rem;
          color: var(--text-dark);
        }

        .social-section p {
          color: var(--text-light);
          margin-bottom: 1rem;
          font-size: 0.95rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          background: var(--primary-blue);
          color: black;
          border-radius: 50%;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: var(--accent-blue);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(30, 64, 175, 0.3);
        }

        .response-time {
          padding: 2rem;
          background: linear-gradient(135deg, var(--primary-blue), var(--accent-blue));
          color: white;
          border-radius: 1rem;
        }

        .response-time h3 {
          color: white;
          margin-bottom: 1rem;
        }

        .response-time p {
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .form-row {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .contact-form-section,
          .contact-info-section {
            text-align: center;
          }

          .submit-btn {
            justify-self: center;
          }

          .social-links {
            justify-content: center;
          }

          .contact-info-card {
            flex-direction: column;
            text-align: center;
          }

          .response-time {
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .success-message {
            padding: 2rem 1rem;
          }

          .contact-info-card {
            padding: 1rem;
          }

          .response-time {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
