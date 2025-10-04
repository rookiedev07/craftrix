import { Link } from 'react-router-dom';
import { Code, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <Link to="/" className="footer-logo">
              <Code size={32} />
              <span>Craftrix</span>
            </Link>
            <p className="footer-tagline">
              Empowering businesses with powerful web solutions
            </p>
            {/* <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div> */}
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <nav className="footer-nav">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/portfolio">Our Portfolio</Link>
              <Link to="/services">Services</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <nav className="footer-nav">
              <Link to="/services">Web Development</Link>
              <Link to="/services">UI/UX Design</Link>
              <Link to="/services">E-Commerce</Link>
              <Link to="/services">Progressive Web Apps</Link>
              <Link to="/services">API Integration</Link>
            </nav>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={16} />
                <span>craftrix.web3@gmail.com</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+91 84540 30044</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>Mumbai</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Craftrix. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--text-dark);
          color: white;
          padding: 3rem 0 1rem;
          margin-top: auto;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .footer-section h4 {
          color: white;
          margin-bottom: 1rem;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
          font-size: 1.5rem;
          color: white;
          text-decoration: none;
          margin-bottom: 1rem;
          transition: all 0.3s ease;
        }

        .footer-logo:hover {
          color: var(--secondary-yellow);
        }

        .footer-tagline {
          color: #9CA3AF;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-links a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-links a:hover {
          background: var(--primary-blue);
          transform: translateY(-2px);
        }

        .footer-nav {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-nav a {
          color: #9CA3AF;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 0.95rem;
        }

        .footer-nav a:hover {
          color: white;
          padding-left: 0.5rem;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #9CA3AF;
          font-size: 0.95rem;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          border-top: 1px solid #374151;
        }

        .footer-bottom p {
          color: #9CA3AF;
          margin: 0;
          font-size: 0.9rem;
        }

        .footer-legal {
          display: flex;
          gap: 1.5rem;
        }

        .footer-legal a {
          color: #9CA3AF;
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .footer-legal a:hover {
          color: white;
        }

        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }

          .footer-legal {
            justify-content: center;
          }

          .social-links {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
