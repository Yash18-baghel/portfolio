import { Link } from "react-router-dom";

import CTA from "../components/CTA";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className='relative max-container'>
      <h1 className='head-text'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold'>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed'>
        Explore a collection of projects showcasing innovation and functionality. As a dedicated software engineer, I've crafted responsive web applications and robust backend systems. Each project reflects my commitment to excellence and passion for pushing technological boundaries.
        <br />
        Feel free to explore the codebase and contribute your ideas for further enhancements.
        Your collaboration is highly valued!
      </p>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <Link
              target='_blank'
              to={project.liveLink}
            >
              <div className='block-container w-12 h-12'>
                <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                    src={project.iconUrl}
                    alt='threads'
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
            </Link>

            <div className='mt-5 flex flex-col'>
              <Link
                to={project.liveLink}
                target='_blank'

              >
                <h4 className='text-2xl font-poppins font-semibold'>
                  {project.name}
                </h4>
                <p className='mt-2 text-slate-500'>{project.description}</p>
              </Link>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Github
                </Link>
                <img
                  src={arrow}
                  alt='arrow'
                  className='w-4 h-4 object-contain'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />

    </section>
  );
};

export default Projects;
