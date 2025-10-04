import { Link } from 'react-router-dom';
import { Code, Palette, ShoppingCart, Smartphone, Zap, Database, ArrowRight, Check } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code size={48} />,
      title: 'Custom Web Development',
      description: 'Tailored web applications built with modern technologies to meet your specific business needs.',
      features: [
        'React, Vue.js, and Angular development',
        'Node.js and Python backend solutions',
        'Database design and optimization',
        'Third-party integrations',
        'Performance optimization',
        'Security implementation'
      ],
    },
    {
      icon: <Palette size={48} />,
      title: 'Responsive UI/UX Design',
      description: 'Beautiful, intuitive designs that create exceptional user experiences across all devices.',
      features: [
        'User research and persona development',
        'Wireframing and prototyping',
        'Visual design and branding',
        'Mobile-first responsive design',
        'Usability testing',
        'Design system creation'
      ],
    },
    {
      icon: <ShoppingCart size={48} />,
      title: 'E-Commerce Development',
      description: 'Complete e-commerce solutions that help you sell more and grow your online business.',
      features: [
        'Custom shopping cart development',
        'Payment gateway integration',
        'Inventory management systems',
        'Order processing automation',
        'SEO optimization',
        'Analytics and reporting'
      ],
    },
    {
      icon: <Smartphone size={48} />,
      title: 'Progressive Web Apps (PWA)',
      description: 'App-like experiences that work seamlessly across all platforms and devices.',
      features: [
        'Offline functionality',
        'Push notifications',
        'App store distribution',
        'Fast loading times',
        'Cross-platform compatibility',
        'Automatic updates'
      ],
    },
    {
      icon: <Database size={48} />,
      title: 'API Integration',
      description: 'Seamless connections between your applications and third-party services.',
      features: [
        'REST and GraphQL APIs',
        'Payment processor integration',
        'Social media API connections',
        'CRM and marketing tools',
        'Analytics platforms',
        'Custom API development'
      ],
    },
    {
      icon: <Zap size={48} />,
      title: 'Performance Optimization',
      description: 'Speed up your existing websites and applications for better user experience and SEO.',
      features: [
        'Site speed analysis',
        'Code optimization',
        'Image and asset compression',
        'CDN implementation',
        'Database optimization',
        'Mobile performance tuning'
      ],
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your business goals, target audience, and project requirements through detailed consultations.'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Our design team creates wireframes and prototypes to visualize the user experience and gather feedback early.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'We build your solution using modern technologies, with continuous testing to ensure quality and performance.'
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'We handle the launch process and provide ongoing support to ensure your success in the long term.'
    }
  ];

  const benefits = [
    'Expert team with 8+ years of experience',
    'Modern technologies and best practices',
    'Mobile-first responsive design',
    'SEO optimization included',
    '30-day post-launch support',
    'Scalable and maintainable code',
    'Regular progress updates',
    'Competitive pricing'
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero section">
        <div className="container">
          <div className="services-hero-content text-center">
            <h1 className="fade-in">Our Services</h1>
            <p className="lead fade-in fade-in-delay-1">
              Comprehensive web solutions designed to help your business thrive in the digital world. 
              From custom development to stunning designs, we've got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section section">
        <div className="container">
          <div className="services-grid grid grid-2">
            {services.map((service, index) => (
              <div key={index} className={`service-card card fade-in fade-in-delay-${(index % 2) + 1}`}>
                <div className="service-header">
                  <div className="service-icon">{service.icon}</div>
                  <div className="service-title-section">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
                <div className="service-features">
                  <ul>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <Check size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="service-footer">
                  <div className="service-pricing">{service.pricing}</div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section
      <section className="process-section section">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 className="fade-in">Our Process</h2>
            <p className="fade-in fade-in-delay-1">
              We follow a proven methodology to ensure every project is delivered on time and exceeds expectations
            </p>
          </div>
          <div className="process-grid grid grid-2">
            {process.map((step, index) => (
              <div key={index} className={`process-card card fade-in fade-in-delay-${index + 1}`}>
                <div className="process-step">{step.step}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
 */}
      {/* Benefits Section */}
      <section className="benefits-section section">
        <div className="container">
          <div className="benefits-content">
            <div className="benefits-text fade-in">
              <h2>Why Choose WebCraft?</h2>
              <p>
                We're not just another web development agency. We're your partners in digital success, 
                committed to delivering solutions that drive real business results.
              </p>
              <div className="benefits-list">
                {benefits.map((benefit, index) => (
                  <div key={index} className="benefit-item">
                    <Check size={20} />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="benefits-visual fade-in fade-in-delay-2">
              <div className="benefits-card">
                <div className="benefit-stat">
                  <h3>50+</h3>
                  <p>Projects Delivered</p>
                </div>
                <div className="benefit-stat">
                  <h3>98%</h3>
                  <p>Client Satisfaction</p>
                </div>
                <div className="benefit-stat">
                  <h3>24/7</h3>
                  <p>Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section-sm">
        <div className="container">
          <div className="cta-content text-center fade-in">
            <h2>Ready to Get Started?</h2>
            <p>
              Let's discuss your project and create a custom solution that fits your needs and budget. 
              Get in touch for a free consultation and quote.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Start Your Project <ArrowRight size={20} />
              </Link>
              <Link to="/work" className="btn btn-outline">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .services-page {
          padding-top: 80px;
        }

        .services-hero {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        }

        .services-grid-section {
          background: white;
        }

        .service-card {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .service-header {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .service-icon {
          color: var(--primary-blue);
          flex-shrink: 0;
        }

        .service-title-section h3 {
          margin-bottom: 0.75rem;
          color: var(--text-dark);
        }

        .service-title-section p {
          color: var(--text-light);
          margin: 0;
        }

        .service-features {
          flex: 1;
          margin-bottom: 2rem;
        }

        .service-features ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .service-features li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
          font-size: 0.95rem;
        }

        .service-features li svg {
          color: var(--secondary-yellow);
          flex-shrink: 0;
        }

        .service-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border-gray);
        }

        .service-pricing {
          font-weight: 600;
          color: var(--primary-blue);
          font-size: 1.1rem;
        }

        .process-section {
          background: #f8fafc;
        }

        .process-card {
          text-align: center;
          position: relative;
        }

        .process-step {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, var(--primary-blue), var(--accent-blue));
          color: white;
          border-radius: 50%;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .process-card h3 {
          margin-bottom: 1rem;
          color: var(--text-dark);
        }

        .process-card p {
          color: var(--text-light);
          margin: 0;
        }

        .benefits-section {
          background: white;
        }

        .benefits-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .benefits-text h2 {
          margin-bottom: 1.5rem;
        }

        .benefits-text p {
          margin-bottom: 2rem;
        }

        .benefits-list {
          display: grid;
          gap: 1rem;
        }

        .benefit-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 0.95rem;
        }

        .benefit-item svg {
          color: var(--secondary-yellow);
          flex-shrink: 0;
        }

        .benefits-visual {
          display: flex;
          justify-content: center;
        }

        .benefits-card {
          background: linear-gradient(135deg, var(--primary-blue), var(--accent-blue));
          color: white;
          padding: 3rem 2rem;
          border-radius: 2rem;
          box-shadow: 0 20px 40px rgba(30, 64, 175, 0.2);
          text-align: center;
          max-width: 350px;
          width: 100%;
        }

        .benefit-stat {
          margin-bottom: 2rem;
        }

        .benefit-stat:last-child {
          margin-bottom: 0;
        }

        .benefit-stat h3 {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--secondary-yellow);
          margin-bottom: 0.5rem;
        }

        .benefit-stat p {
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
          font-size: 1rem;
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
          .benefits-content {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }

          .service-header {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }

          .service-footer {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }

          .process-grid {
            grid-template-columns: 1fr;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .benefits-list {
            gap: 0.75rem;
          }

          .benefits-card {
            padding: 2rem 1.5rem;
          }

          .benefit-stat h3 {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .service-features li {
            align-items: flex-start;
            gap: 0.5rem;
          }

          .service-features li svg {
            margin-top: 0.25rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;