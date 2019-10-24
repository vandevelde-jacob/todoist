import React, { useState, useEffect, useRef } from 'react';
import { firebase } from '../firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import moment from 'moment';
import { useSelectedProjectValue } from '../context';
import { ProjectOverlay } from './ProjectOverlay';
import { TaskDate } from './TaskDate';

export const AddTask = ({
    showAddTask = true,
    shouldShowMain = false,
    showQuickAddTask,
    setShowQuickAddTask
}) => {
    const [task, setTask] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [project, setProject] = useState('');
    const [showMain, setShowMain] = useState(shouldShowMain);
    const [showProjectOverlay, setShowProjectOverlay] = useState(false);
    const [showTaskDate, setShowTaskDate] = useState(false);

    const { selectedProject } = useSelectedProjectValue();
    const taskInput = useRef(null);


    useEffect(() => {
        if (taskInput.current) {
            taskInput.current.focus();
        }
    });

    const addTask = () => {
        const projectId = project || selectedProject;
        let collatedDate = '';

        if (projectId === 'TODAY') {
            collatedDate = moment().format('DD/MM/YYYY');
        } else if (projectId === 'NEXT_7') {
            collatedDate = moment()
                .add(7, 'days')
                .format('DD/MM/YYYY');
        }

        return (
            task &&
            projectId &&
            firebase
            .firestore()
            .collection('tasks')
            .add({
                archived: false,
                projectId,
                task,
                date: collatedDate || taskDate,
                userId: 'B89U51sSozf1bmxltuAe'
            })
            .then(() => {
                setTask('');
                setProject('');
                setShowMain('');
                setShowProjectOverlay(false);
            })
        );
    };

    return (
        <div
            className={showQuickAddTask ? 'add-task__overlay' : 'add-task'}
            data-testid="add-task-comp"
        >
            {(showAddTask && !showMain) && (
                <div
                    className="add-task__shallow"
                    data-testid="show-main-action"
                    onClick={() => setShowMain(!showMain)}
                >
                    <span className="add-task__plus"><FontAwesomeIcon icon={['fas', 'plus']} /></span>
                    <span className="add-task__text">Add Task</span>
                </div>
            )}

            {(showMain || showQuickAddTask) && (
                <div className="add-task__main" data-testid="add-task-main">
                    {showQuickAddTask && (
                        <>
                            <div data-testid="quick-add-task">
                                <h2 className="header">Quick Add Task</h2>
                            </div>
                        </>
                    )}
                    <ProjectOverlay
                        setProject={setProject}
                        showProjectOverlay={showProjectOverlay}
                        setShowProjectOverlay={setShowProjectOverlay}
                    />
                    <TaskDate
                        setTaskDate={setTaskDate}
                        showTaskDate={showTaskDate}
                        setShowTaskDate={setShowTaskDate}
                    />
                    <input
                        className="add-task__content"
                        data-testid="add-task-content"
                        type="text"
                        value={task}
                        placeholder="Enter your task"
                        ref={taskInput}
                        onChange={e => setTask(e.target.value)}
                    />
                    <button
                        type="button"
                        className="add-task__submit"
                        data-testid="add-task"
                        onClick={() => {
                            addTask();
                            if (showQuickAddTask) {
                                setShowQuickAddTask(false);
                            }
                        }}
                    >
                        Add Task
                    </button>
                    <span
                        className="add-task__cancel"
                        data-testid="add-task-main-cancel"
                        onClick={() => {
                            setShowMain(false);
                            setShowProjectOverlay(false);
                            if (showQuickAddTask) {
                                setShowQuickAddTask(false);
                            }
                        }}
                    >
                        Cancel
                    </span>
                    <span
                        className="add-task__project"
                        data-testid="show-project-overlay"
                        onClick={() => setShowProjectOverlay(!showProjectOverlay)}
                    >
                        <FontAwesomeIcon icon={['far', 'list-alt']} />
                    </span>
                    <span
                        className="add-task__date"
                        data-testid="show-date-overlay"
                        onClick={() => setShowTaskDate(!showTaskDate)}
                    >
                        <FontAwesomeIcon icon={['far', 'calendar-alt']}  />
                    </span>
                </div>
            )}
        </div>
    );
};