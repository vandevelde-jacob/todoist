import React, { useState } from 'react';
import { firebase } from '../firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useProjectsValue, useArchivedProjectsValue, useSelectedProjectValue } from '../context';

export const IndividualProject = ({project, isProjectArchived}) => {
    const [showConfirm, setShowConfirm] = useState(false);
    const { projects, setProjects } = useProjectsValue();
    const { archivedProjects, setArchivedProjects } = useArchivedProjectsValue();
    const { setSelectedProject } = useSelectedProjectValue();

    const archiveProject = docId => {
        firebase.firestore()
        .collection('projects')
        .doc(docId)
        .update({
            archived: true
        })
        .then(() => {
            setProjects([...projects]);
            setArchivedProjects([...archivedProjects]);
            setSelectedProject('INBOX');
        });
    };

    const unarchiveProject = docId => {
        firebase.firestore()
        .collection('projects')
        .doc(docId)
        .update({
            archived: false
        })
        .then(() => {
            setProjects([...projects]);
            setArchivedProjects([...archivedProjects]);
            setSelectedProject('INBOX');
        });
    };

    const actionIcon = isProjectArchived ? "trash-restore" : "trash";

    return (
        <>
            <span className="individual__project-dot">
                <FontAwesomeIcon icon={['fas', 'circle']} />
            </span>
            <span className="individual__project-name">{project.name}</span>
            <span
                className="individual__project-delete"
                data-testid="delete-project"
                onClick={() => {
                    if (isProjectArchived) {
                        unarchiveProject(project.docId);
                    } else {
                        setShowConfirm(!showConfirm);
                    }
                }}
            >
                <FontAwesomeIcon icon={['fas', `${actionIcon}`]} />
            </span>
            {showConfirm && (
                <div className="project-delete-modal">
                    <div className="project-delete-modal__inner">
                        <p>Are you sure you want to delete this project?</p>
                        <button
                            type="button"
                            onClick={() => archiveProject(project.docId)}
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