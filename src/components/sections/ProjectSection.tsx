import { ProjectCard } from '@components/cards/ProjectCard'
import PrimarySection from '@components/layouts/PrimarySection'

const ProjectSection = () => {
  const projectsArray = [
    { project: <ProjectCard title="Wordy App." /> },
    { project: <ProjectCard title="Wordy App." /> },
    { project: <ProjectCard title="Wordy App." /> },
    { project: <ProjectCard title="Wordy App." /> },
  ]

  return (
    <PrimarySection sectionText="Projects">
      {projectsArray.map(({ project, index }) => (
        <div key={index}>{project}</div>
      ))}
    </PrimarySection>
  )
}

export default ProjectSection
