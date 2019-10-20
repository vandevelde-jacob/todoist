import React from 'react';
import { useProjectsValue } from '../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ProjectOverlay = ({setProject, showProjectOverlay, setShowProjectOverlay}) => {
    const { projects } = useProjectsValue();

    return (
        projects &&
        showProjectOverlay && (
           <div className="project-overlay"  data-testid="project-overlay">
               <ul className="project-overlay__list">
                   {projects.map(project => (
                       <li
                            key={project.projectId}
                            data-testid="project-overlay-action"
                            onClick={() => {
                                setProject(project.projectId);
                                setShowProjectOverlay(false);
                            }}
                        >
                        <span className="project-overlay__dot">
                            <FontAwesomeIcon icon={['fas', 'circle']} />
                        </span>
                        {project.name}
                    </li>
                   ))}
               </ul>
            </div>
        )
    );
}