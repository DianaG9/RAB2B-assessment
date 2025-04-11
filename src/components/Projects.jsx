import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight,faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const projectsWithId = data.map((project) => ({
          ...project,
          id: uuidv4(),
        }));
        setProjects(projectsWithId);
      });
  }, []);

  const prevProject = () => {
    setActiveIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const nextProject = () => {
    setActiveIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const getClassName = (index) => {
    if (index === activeIndex) return "projects__item active";
    if (index === (activeIndex - 1 + projects.length) % projects.length)
      return "projects__item left";
    if (index === (activeIndex + 1) % projects.length)
      return "projects__item right";
    return "projects__item hidden";
  };

  return (
    <section className="projects">
      <div className="projects__carousel">
        {projects.map((project, index) => (
          <div
            className={getClassName(index)}
            key={project.id}
            onClick={() => setActiveIndex(index)}
          >
            <div className="projects__card">
              <div className="projects__card-inner">
                <div
                  className="projects__card-front"
                  style={{
                    backgroundImage: `url(${project.image})`,
                  }}
                >
                  <div className="projects__title">{project.title}</div>
                </div>
                <div className="projects__card-back">
                  <p className="projects__description">{project.description}</p>
                  <a
                    className="projects__link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Project Link"
                  >
                    Check it out! <FontAwesomeIcon icon={faUpRightFromSquare} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="projects__controls">
        <button onClick={prevProject} aria-label="Previous project">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button onClick={nextProject} aria-label="Next project">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </section>
  );
};

export default Projects;