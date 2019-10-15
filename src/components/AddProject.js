import React, { useState } from 'react';
import { firebase } from '../firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { generatedPushId } from '../helpers';
import { useProjectsValue, useSelectedProjectValue } from '../context';

export const AddProject = ({shouldShow = false }) => {
    const [show, setShow] = useState(shouldShow);
    const [projectName, setProjectName] = useState('');

    const projectId = generatedPushId();
    const { setProjects } = useProjectsValue();

    const addProject = () =>
        projectName &&
        firebase
            .firestore()
            .collection('projects')
            .add({
                projectId,
                name: projectName,
                userId: 'B89U51sSozf1bmxltuAe'
            })
            .then(() => {
                setProjects([]);
                setProjectName('');
                setShow(false);
            });

        return (
            <div className="add-project" data-testid="add-project">
                { show && (
                    <div className="add-project__input">
                        <input
                            value={projectName}
                            onChange={e => setProjectName(e.target.value)}
                            className="add-project__name"
                            type="text"
                            placeholder="Name your project"
                        />
                        <button
                            className="add-project__submit"
                            type="button"
                            onClick={() => addProject()}
                            data-testi="add-project-submit"
                        >
                            Add Project
                        </button>
                        <span
                            data-testid="hide-project-overlay"
                            className="add-project__cancel"
                            onClick={() => setShow(false)}
                        >
                            Cancel
                        </span>
                    </div>
                )}
                { !show && (
                    <>
                        <span className="add-project__plus"><FontAwesomeIcon icon={['fal', 'plus-square']} /></span>
                        <span
                            className="add-project__text"
                            data-testid="add-project__text"
                            onClick={() => setShow(!show)}
                        >
                            Add Project
                        </span>
                    </>
                )}
            </div>
        )
}