import React, { useEffect } from 'react';

import { Checkbox } from './Checkbox';
import { AddTask } from './AddTask';
import { useTasks } from '../hooks';
import { collatedTasks } from '../constants';
import { getProject, getCollatedTasks, collatedTasksExist } from '../helpers';
import { useSelectedProjectValue, useProjectsValue, useArchivedProjectsValue } from '../context';

export const Tasks = () => {
    const { selectedProject } = useSelectedProjectValue();
    const { projects } = useProjectsValue();
    const { archivedProjects } = useArchivedProjectsValue();
    const { tasks } = useTasks(selectedProject);

    let projectName = '';
    let isArchived = null;
    let allProjects = projects.concat(archivedProjects);

    if (allProjects && selectedProject && !collatedTasksExist(selectedProject)) {
        projectName = getProject(allProjects, selectedProject).name;
        isArchived = getProject(allProjects, selectedProject).archived;
    }

    if (collatedTasksExist(selectedProject) && selectedProject) {
        projectName = getCollatedTasks(collatedTasks, selectedProject).name;
        isArchived = false;
    }

    useEffect(() => {
        document.title = `${projectName}: Todoist`;
    });

    return (
        <div className={isArchived ? "tasks archived" :  "tasks"} data-testid="tasks">
            <h2 data-testid="project-name">
            {projectName} {isArchived ? "- ARCHIVED (Read only)" : ""}
            </h2>

            <ul className="tasks__list">
                {tasks.map(task => (
                    <li key={`${task.id}`}>
                        <Checkbox id={task.id} disabled={isArchived} />
                        <span>{task.task}</span>
                    </li>
                ))}
            </ul>
            { !isArchived && (
                <AddTask />
            )}
        </div>
    )
}