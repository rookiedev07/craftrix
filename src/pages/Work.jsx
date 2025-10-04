import { useState } from 'react';
import { X, ExternalLink, Github, ArrowRight } from 'lucide-react';
import richlogo from "../assets/rich-clothing.png"

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
{
  id: 1,
  title: 'TRCAC College Website',
  category: 'College Website',
  image: 'https://trcac-nine.vercel.app/images/trcac_logo.png',
  description: 'An informative and user-friendly web platform for Thakur Ramnarayan College of Arts and Commerce.',
  fullDescription: 'The TRCAC website was built to provide students, parents, and faculty with clear access to information about courses, departments, events, and admissions. Designed with a modern, responsive layout, the site enhances accessibility and showcases the college’s academic excellence.',
  technologies: ['React'],
  challenges: 'Creating a responsive, visually appealing frontend that could present all college details clearly without a backend or database integration.',
  solutions: 'Built a fully static frontend using React, optimized for speed and responsiveness. Content was structured for easy navigation, and deployment was managed through Vercel for reliable hosting.',
  results: 'Smooth browsing experience, fast load times across devices, and an accessible platform that effectively communicates the college’s offerings and updates.',
  testimonial: {
    text: 'The TRCAC website reflects the professionalism and spirit of our institution. It has become a valuable resource for both students and faculty.',
    author: 'Administration, TRCAC'
  },
  liveUrl: 'https://trcac-nine.vercel.app/',
},
{
  "id": 2,
  "title": "Rich Clothing",
  "category": "E-Commerce",
  "image": richlogo,
  "description": "A modern clothing e-commerce platform offering a curated selection of apparel for men and women.",
  "fullDescription": "Rich Clothing is a stylish online clothing store built with React, providing a seamless shopping experience. The website features a clean, responsive design showcasing a variety of clothing categories, including hoodies, jackets, pants, and more. Users can explore the latest collections, view product details, and enjoy a user-friendly interface optimized for both desktop and mobile devices.",
  "challenges": "Designing a visually appealing and fully responsive e-commerce platform that could showcase multiple clothing categories while maintaining fast load times and a smooth user experience.",
  "solutions": "Developed a modern, responsive frontend using React, structured the product catalog for easy navigation, and implemented optimized images and components for faster performance. Deployed the platform on Vercel for reliable hosting.",
  "results": "An intuitive and attractive online shopping experience, seamless browsing across devices, and a platform that effectively highlights Rich Clothing’s collections and drives user engagement.",
  "technologies": ["React", "Vercel"],
  "liveUrl": "https://rich-clothing-art.vercel.app/"
}

  ];

  const categories = ['All', 'E-Commerce', 'Web App', 'Corporate', 'Dashboard', 'Platform', 'Education'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="work-page">
      {/* Hero Section */}
      <section className="work-hero section">
        <div className="container">
          <div className="work-hero-content text-center">
            <h1 className="fade-in">Our Portfolio</h1>
            <p className="lead fade-in fade-in-delay-1">
              Discover the innovative web solutions we've crafted for businesses across various industries. 
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-buttons fade-in">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-section section">
        <div className="container">
          <div className="projects-grid grid grid-3">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className={`project-card card fade-in fade-in-delay-${(index % 3) + 1}`}
                onClick={() => openModal(project)}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <button className="view-details">View Details</button>
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <div className="project-category">{project.category}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-more">+{project.technologies.length - 3}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="cta-section section-sm">
        <div className="container">
          <div className="cta-content text-center fade-in">
            <h2>Ready to Start Your Project?</h2>
            <p>
              Let's discuss how we can help bring your vision to life with a custom web solution.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">
                Start Your Project <ArrowRight size={20} />
              </a>
              <a href="/services" className="btn btn-outline">
                View Services
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <X size={24} />
            </button>
            
            <div className="modal-header">
              <img src={selectedProject.image} alt={selectedProject.title} />
              <div className="modal-header-info">
                <div className="project-category">{selectedProject.category}</div>
                <h2>{selectedProject.title}</h2>
                <p>{selectedProject.fullDescription}</p>
                <div className="project-links">
                  <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    <ExternalLink size={16} />
                    View Live Site
                  </a>
                  <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    <Github size={16} />
                    View Code
                  </a>
                </div>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-section">
                <h3>Technologies Used</h3>
                <div className="tech-tags">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h3>Challenges</h3>
                <p>{selectedProject.challenges}</p>
              </div>

              <div className="modal-section">
                <h3>Solutions</h3>
                <p>{selectedProject.solutions}</p>
              </div>

              <div className="modal-section">
                <h3>Results</h3>
                <p>{selectedProject.results}</p>
              </div>

              {selectedProject.testimonial && (
                <div className="modal-section testimonial">
                  <h3>Client Testimonial</h3>
                  <blockquote>
                    "{selectedProject.testimonial.text}"
                  </blockquote>
                  <cite>— {selectedProject.testimonial.author}</cite>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .work-page {
          padding-top: 80px;
        }

        .work-hero {
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        }

        .filter-section {
          background: white;
          padding: 2rem 0;
          border-bottom: 1px solid var(--border-gray);
        }

        .filter-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 0.75rem 1.5rem;
          border: 2px solid var(--border-gray);
          background: white;
          color: var(--text-dark);
          border-radius: 2rem;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .filter-btn:hover,
        .filter-btn.active {
          background: var(--primary-blue);
          border-color: var(--primary-blue);
          color: white;
        }

        .projects-section {
          background: #f8fafc;
        }

        .project-card {
          cursor: pointer;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .project-image {
          position: relative;
          height: 200px;
          overflow: hidden;
          border-radius: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .project-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.3s ease;
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(30, 64, 175, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-card:hover .project-image img {
          transform: scale(1.1);
        }

        .view-details {
          background: white;
          color: var(--primary-blue);
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .view-details:hover {
          background: var(--secondary-yellow);
          color: var(--text-dark);
        }

        .project-info {
          padding: 1rem 0;
        }

        .project-category {
          background: var(--primary-blue);
          color: white;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.8rem;
          font-weight: 500;
          display: inline-block;
          margin-bottom: 0.75rem;
        }

        .project-info h3 {
          margin-bottom: 0.75rem;
          color: var(--text-dark);
        }

        .project-info p {
          color: var(--text-light);
          margin-bottom: 1rem;
          font-size: 0.95rem;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          background: var(--border-gray);
          color: var(--text-dark);
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .tech-more {
          background: var(--secondary-yellow);
          color: var(--text-dark);
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-size: 0.8rem;
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

        /* Modal Styles */
        .modal-header {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 2rem;
          margin-bottom: 2rem;
          align-items: start;
        }

        .modal-header img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 0.5rem;
        }

        .modal-header-info h2 {
          margin-bottom: 1rem;
        }

        .project-links {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .modal-body {
          display: grid;
          gap: 2rem;
        }

        .modal-section h3 {
          color: var(--primary-blue);
          margin-bottom: 1rem;
          font-size: 1.2rem;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .testimonial {
          background: #f8fafc;
          padding: 2rem;
          border-radius: 1rem;
          border-left: 4px solid var(--primary-blue);
        }

        .testimonial blockquote {
          font-size: 1.1rem;
          font-style: italic;
          color: var(--text-dark);
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .testimonial cite {
          color: var(--primary-blue);
          font-weight: 600;
        }

        @media (max-width: 1024px) {
          .modal-header {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .modal-header img {
            height: 250px;
          }
        }

        @media (max-width: 768px) {
          .filter-buttons {
            gap: 0.5rem;
          }

          .filter-btn {
            padding: 0.5rem 1rem;
            font-size: 0.9rem;
          }

          .projects-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          }

          .project-links,
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .modal-content {
            margin: 1rem;
            padding: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }

          .modal-content {
            margin: 0.5rem;
            padding: 1rem;
            max-height: 95vh;
          }

          .tech-tags,
          .project-tech {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Work;
