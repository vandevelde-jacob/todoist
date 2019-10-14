import React, { useState } from 'react';
import { firebase } from '../firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useProjectsValue, useSelectedProjectValue } from '../context';

export const IndividualProject = ({project}) => {
    const [showConfirm, setShowConfirm] = useState(false);
    const { projects, setProjects } = useProjectsValue();
    const { setSelectedProject } = useSelectedProjectValue();

    const deleteProject = docId => {
        firebase.firestore()
        .collection('projects')
        .doc(docId)
        .delete()
        .then(() => {
            setProjects([...projects]);
            setSelectedProject('INBOX');
        });
    };

    return (
        <>
            <span className="sidebar__dot">
                <FontAwesomeIcon icon={['fas', 'circle']} />
            </span>
            <span className="sidebar__project-name">{project.name}</span>
            <span
                className="sidebar__project-delete"
                data-testid="delete-project"
                onClick={() => setShowConfirm(!showConfirm)}
            >
                <FontAwesomeIcon icon={['fas', 'trash']} />
            </span>
            {showConfirm && (
                <div className="project-delete-modal">
                    <div className="project-delete-modal__inner">
                        <p>Are you sure you want to delete this project?</p>
                        <button
                            type="button"
                            onClick={()=> deleteProject(project.docId)}
                        >
                            Delete
                        </button>
                        <span onClick={() => setShowConfirm(!showConfirm)}>Cancel</span>
                    </div>
                </div>
            )}
        </>
    )

}