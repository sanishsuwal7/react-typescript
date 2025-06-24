import { useState } from 'react';
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';
interface ProjectListProps {
  projects: Project[];
  onSave: (project: Project) => void;
}

export default function ProjectList({ projects, onSave }: ProjectListProps) {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});

  const handleEdit = (projectClicked: Project) => {
    setProjectBeingEdited(projectClicked);
  };

  const handleCancel = () => {
    setProjectBeingEdited({});
  };

  return (
    <div className="row">
      <ul>
        {projects.map((project) => (
          <div key={project.id} className="cols-sm">
            {project === projectBeingEdited ? (
              <ProjectForm
                onCancel={handleCancel}
                onSave={onSave}
                project={project}
              />
            ) : (
              <ProjectCard
                project={project}
                onEdit={() => handleEdit(project)}
              />
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}
