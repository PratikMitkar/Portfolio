import styles from './ProjectsStyles.module.css';
import voice_assistant from '../../assets/task_1.png';
import resume_page from '../../assets/task_2.png';
import BluinoControl from '../../assets/task_3.png';
import chatbot from '../../assets/task_4.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={voice_assistant}
          link="https://github.com/PratikMitkar/artificial-intelligence"
          h3="voice assistant"
          p="python based arduino project"
        />
        <ProjectCard
          src={resume_page}
          link="https://pratikmitkar.github.io/Portfolio/"
          h3="Portfolio"
          p="react.js based project"
        />
        <ProjectCard
          src={BluinoControl}
          link="https://play.google.com/store/apps/details?id=com.CodeCraftPratik.sesors&pli=1"
          h3="BluinoControl"
          p="java based android app for arduino"
        />
        <ProjectCard
          src={chatbot}
          link="https://github.com/PratikMitkar/python/tree/main/chat%20bot"
          h3="chatbot"
          p="python project using numpy and tensorflow"
        />
      </div>
    </section>
  );
}

export default Projects;
