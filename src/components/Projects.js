import React, { useState } from 'react';

import { useSelectedProjectValue, useProjectsValue, useArchivedProjectsValue } from '../context';
import { IndividualProject } from './IndividualProject';
import { orderByProp } from '../helpers';

export const Projects = ({ sortAsc, isProjectArchived, activeValue = null }) => {
    const [active, setActive] = useState(activeValue);
    const { setSelectedProject } = useSelectedProjectValue();
    const { projects } = useProjectsValue();
    const { archivedProjects } = useArchivedProjectsValue();

    const selectedProjects = isProjectArchived ? archivedProjects : projects;

    selectedProjects.sort( orderByProp('name', sortAsc) );

    return (
        selectedProjects &&
        selectedProjects.map(project => (
            <li
                key={project.projectId}
                data-doc-id={project.docId}
                data-testid="project-action"
                className={
                    active === project.projectId
                    ? 'active individual__project'
                    : 'individual__project'
                }
                onKeyDown={() => {
                    setActive(project.projectId);
                    setSelectedProject(project.projectId);
                }}
                onClick={() => {
                    setActive(project.projectId);
                    setSelectedProject(project.projectId);
                }}
            >
                <IndividualProject project={project} isProjectArchived={isProjectArchived} />
            </li>
        ))
    )
}