import { Link } from 'react-router-dom';
import { ArrowRight, Code, Palette, ShoppingCart, Users, Award, Zap } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <Code size={40} />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies and best practices.'
    },
    {
      icon: <Palette size={40} />,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that create exceptional user experiences and drive engagement.'
    },
    {
      icon: <ShoppingCart size={40} />,
      title: 'E-Commerce Solutions',
      description: 'Complete e-commerce platforms that help you sell more and grow your online business.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '30+', label: 'Happy Clients' },
    { number: '3', label: 'Expert Founders' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text fade-in">
              <h1>We Build Powerful Web Solutions for Your Business</h1>
              <p className="lead">
                Creative web development, UI/UX design, and tailored digital services 
                to help your business grow online
              </p>
              <div className="hero-buttons">
                <Link to="/portfolio" className="btn btn-primary">
                  See Our Work <ArrowRight size={20} />
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Get Started
                </Link>
              </div>
            </div>
            <div className="hero-image fade-in fade-in-delay-2">
              <div className="hero-graphic">
                <div className="floating-card card-1">
                  <Code size={24} />
                  <span>Clean Code</span>
                </div>
                <div className="floating-card card-2">
                  <Zap size={24} />
                  <span>Fast Performance</span>
                </div>
                <div className="floating-card card-3">
                  <Award size={24} />
                  <span>Quality Design</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section section">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 className="fade-in">Our Core Services</h2>
            <p className="fade-in fade-in-delay-1">
              We specialize in creating digital solutions that drive real business results
            </p>
          </div>
          <div className="grid grid-3">
            {services.map((service, index) => (
              <div key={index} className={`service-card card fade-in fade-in-delay-${index + 1}`}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/services" className="service-link">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="stats-section section-sm">
        <div className="container">
          <div className="stats-grid grid grid-4">
            {stats.map((stat, index) => (
              <div key={index} className={`stat-item text-center fade-in fade-in-delay-${index + 1}`}>
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* About Teaser Section
      <section className="about-teaser-section section">
        <div className="container">
          <div className="about-teaser">
            <div className="about-text fade-in">
              <h2>Meet the Team Behind WebCraft</h2>
              <p>
                We're a passionate team of three founders who believe in creating web solutions 
                that not only look amazing but also deliver exceptional results. Our combined 
                expertise in development, design, and business strategy ensures every project 
                exceeds expectations.
              </p>
              <p>
                <strong>Our Mission:</strong> Empowering businesses by delivering scalable, 
                user-friendly web solutions that drive growth and success.
              </p>
              <Link to="/about" className="btn btn-primary">
                Learn More About Us <ArrowRight size={20} />
              </Link>
            </div>
            <div className="about-image fade-in fade-in-delay-2">
              <div className="team-preview">
                <div className="team-member">
                  <Users size={48} />
                  <span>Expert Team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
 */}
      {/* CTA Section */}
      <section className="cta-section section-sm">
        <div className="container">
          <div className="cta-content text-center fade-in">
            <h2>Ready to Transform Your Digital Presence?</h2>
            <p>
              Let's discuss your project and create something amazing together. 
              Get in touch for a free consultation.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-secondary">
                Start Your Project
              </Link>
              <Link to="/portfolio" className="btn btn-outline">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .home-page {
          padding-top: 80px;
        }

        .hero-section {
          padding: 5rem 0;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          position: relative;
          overflow: hidden;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          min-height: 60vh;
        }

        .hero-text h1 {
          color: var(--text-dark);
          margin-bottom: 1.5rem;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }

        .hero-graphic {
          position: relative;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .floating-card {
          position: absolute;
          background: white;
          padding: 1rem 1.5rem;
          border-radius: 1rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
          color: var(--primary-blue);
          animation: float 6s ease-in-out infinite;
        }

        .card-1 {
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }

        .card-2 {
          top: 60%;
          right: 20%;
          animation-delay: 2s;
        }

        .card-3 {
          top: 40%;
          right: 40%;
          animation-delay: 4s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .services-section {
          background: white;
        }

        .service-card {
          text-align: center;
          position: relative;
        }

        .service-icon {
          color: var(--primary-blue);
          margin-bottom: 1.5rem;
          display: flex;
          justify-content: center;
        }

        .service-link {
          color: var(--primary-blue);
          text-decoration: none;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 1rem;
          transition: all 0.3s ease;
        }

        .service-link:hover {
          color: var(--accent-blue);
          transform: translateX(5px);
        }

        .stats-section {
          background: var(--primary-blue);
          color: white;
        }

        .stats-grid {
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 700;
          color: var(--secondary-yellow);
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
        }

        .about-teaser-section {
          background: white;
        }

        .about-teaser {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .about-image {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .team-preview {
          background: linear-gradient(135deg, var(--primary-blue), var(--accent-blue));
          color: white;
          padding: 3rem;
          border-radius: 2rem;
          text-align: center;
          box-shadow: 0 20px 40px rgba(30, 64, 175, 0.2);
        }

        .team-member {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .team-member span {
          font-size: 1.2rem;
          font-weight: 600;
        }

        .cta-section {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-top: 2rem;
        }

        @media (max-width: 1024px) {
          .hero-content,
          .about-teaser {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }

          .hero-graphic {
            height: 300px;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 3rem 0;
          }

          .hero-buttons,
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }

          .floating-card {
            position: static;
            margin: 0.5rem;
            animation: none;
          }

          .hero-graphic {
            display: flex;
            flex-direction: column;
            height: auto;
            gap: 1rem;
          }
        }

        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }

          .stat-number {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;