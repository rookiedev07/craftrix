import { Users, Target, Award, TrendingUp } from 'lucide-react';
import vishal from "../assets/vishal.jpeg"
import mujahid from "../assets/mujahid-web.jpeg"
import sameer from "../assets/IMG_0137.jpg"

const About = () => {
  const founders = [
    {
      name: 'Vishal Borana',
      role: '',
      image: vishal,
      bio: 'Full-stack developer',
      expertise: ['React', 'Node.js', 'Express.js','MongoDB', 'UI/UX Design']
    },
    {
      name: 'Mujahid Shaikh',
      role: '',
      image: mujahid,
      bio: 'Full-stack developer',
      expertise: ['React', 'Node.js', 'Express.js','MongoDB']
    },
    {
      name: 'Sameer Khan',
      role: '',
      image: sameer,
      bio: 'Product Design Expert',
      expertise: ['React', 'Security', 'Performance', 'System Architecture']
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Three friends with a shared vision started Craft in a small apartment'
    },
    {
      year: '2021',
      title: 'First Major Client',
      description: 'Landed our first enterprise client and delivered a game-changing e-commerce platform'
    },
    {
      year: '2022',
      title: 'Team Expansion',
      description: 'Grew our network of trusted freelancers and established key partnerships'
    },
    {
      year: '2023',
      title: 'Award Recognition',
      description: 'Recognized as "Best Emerging Web Agency" by Tech Innovation Awards'
    },
    {
      year: '2024',
      title: '50+ Projects',
      description: 'Successfully completed over 50 projects for clients across various industries'
    }
  ];

  const values = [
    {
      icon: <Target size={40} />,
      title: 'Client-Focused',
      description: 'Every decision we make is centered around delivering exceptional value to our clients.'
    },
    {
      icon: <Award size={40} />,
      title: 'Quality First',
      description: 'We never compromise on quality. Every line of code and design element is crafted with care.'
    },
    {
      icon: <TrendingUp size={40} />,
      title: 'Continuous Growth',
      description: 'We constantly learn and evolve, staying ahead of technology trends and best practices.'
    },
    {
      icon: <Users size={40} />,
      title: 'Collaboration',
      description: 'We believe the best results come from true partnership and open communication.'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero section">
        <div className="container">
          <div className="about-hero-content text-center">
            <h1 className="fade-in">About Craftrix</h1>
            <p className="lead fade-in fade-in-delay-1">
              We're a passionate team of three founders dedicated to creating exceptional web experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      {/* <section className="mission-section section flex justify-center items-center">
        <div className="container">
          <div className="mission-card text-center">
            <div className="mission-icon mb-4">
              <Target size={48} className="mx-auto text-yellow-500" />
            </div>
            <div className="flex justify-center">
              <h3 className="text-2xl font-bold mb-2">Our Goal</h3>
            <p className="text-gray-700 max-w-md mx-auto">
              Transform ideas into powerful digital solutions that drive real business impact
            </p>
            </div>
          </div>
        </div>
      </section> */}


      {/* Team Section */}
      <section className="team-section section">
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 className="fade-in">Meet The Founders</h2>
            <p className="fade-in fade-in-delay-1">
              The passionate individuals behind WebCreators
            </p>
          </div>
          <div className="founders-grid grid grid-3">
            {founders.map((founder, index) => (
              <div key={index} className={`founder-card card fade-in fade-in-delay-${index + 1}`}>
                <div className="founder-image">
                  <img src={founder.image} alt={founder.name} />
                </div>
                <div className="founder-info">
                  <h3>{founder.name}</h3>
                  <h4 className="founder-role">{founder.role}</h4>
                  <p>{founder.bio}</p>
                  <div className="founder-expertise">
                    <h5>Expertise:</h5>
                    <div className="expertise-tags">
                      {founder.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="expertise-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .about-page {
          padding-top: 80px;
        }

        .about-hero {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          text-align: center;
        }

        .mission-section {
          background: white;
        }

        .mission-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .mission-statement {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--primary-blue);
          font-style: italic;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .mission-visual {
          display: flex;
          justify-content: center;
        }

        .mission-card {
          background: linear-gradient(135deg, var(--primary-blue), var(--accent-blue));
          color: white;
          padding: 3rem 2rem;
          border-radius: 2rem;
          text-align: center;
          box-shadow: 0 20px 40px rgba(30, 64, 175, 0.2);
          max-width: 300px;
        }

        .mission-icon {
          color: var(--secondary-yellow);
          margin-bottom: 1.5rem;
          display: flex;
          justify-content: center;
        }

        .mission-card h3 {
          color: white;
          margin-bottom: 1rem;
        }

        .mission-card p {
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
        }

        .team-section {
          background: #f8fafc;
        }

        .founders-grid {
          max-width: 1000px;
          margin: 0 auto;
        }

        .founder-card {
          text-align: center;
          background: white;
        }

        .founder-image {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          overflow: hidden;
          margin: 0 auto 1.5rem;
          border: 4px solid var(--primary-blue);
        }

        .founder-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .founder-role {
          color: var(--primary-blue);
          font-size: 1rem;
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .founder-expertise h5 {
          font-size: 0.9rem;
          color: var(--text-dark);
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .expertise-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
        }

        .expertise-tag {
          background: var(--primary-blue);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .values-section {
          background: white;
        }

        .value-card {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
        }

        .value-icon {
          color: var(--primary-blue);
          flex-shrink: 0;
        }

        .value-content h3 {
          margin-bottom: 0.75rem;
        }

        .timeline-section {
          background: #f8fafc;
        }

        .timeline {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 100%;
          background: var(--primary-blue);
        }

        .timeline-item {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 3rem;
          position: relative;
        }

        .timeline-item:nth-child(even) {
          direction: rtl;
        }

        .timeline-item:nth-child(even) .timeline-content {
          direction: ltr;
          text-align: right;
        }

        .timeline-year {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .timeline-year::after {
          content: '';
          position: absolute;
          right: -1.5rem;
          width: 12px;
          height: 12px;
          background: var(--secondary-yellow);
          border-radius: 50%;
          border: 3px solid white;
          box-shadow: 0 0 0 3px var(--primary-blue);
        }

        .timeline-item:nth-child(even) .timeline-year::after {
          left: -1.5rem;
          right: auto;
        }

        .timeline-content {
          background: white;
          padding: 2rem;
          border-radius: 1rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .timeline-content h3 {
          color: var(--text-dark);
          margin-bottom: 0.75rem;
        }

        .timeline-content p {
          color: var(--text-light);
          margin: 0;
        }

        @media (max-width: 1024px) {
          .mission-content {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }

          .founders-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .timeline::before {
            left: 2rem;
          }

          .timeline-item {
            grid-template-columns: 1fr;
            gap: 0;
            margin-left: 2rem;
          }

          .timeline-item:nth-child(even) {
            direction: ltr;
          }

          .timeline-item:nth-child(even) .timeline-content {
            text-align: left;
          }

          .timeline-year {
            justify-content: flex-start;
            margin-bottom: 1rem;
          }

          .timeline-year::after {
            left: -1.5rem;
            right: auto;
          }

          .values-grid {
            grid-template-columns: 1fr;
          }

          .value-card {
            flex-direction: column;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .founders-grid {
            grid-template-columns: 1fr;
          }

          .expertise-tags {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default About;