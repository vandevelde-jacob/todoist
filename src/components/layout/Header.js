import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { AddTask } from '../AddTask';

export const Header = ( {darkMode, setDarkMode} ) => {
    const [shouldShowMain, setShouldShowMain] = useState(false);
    const [showQuickAddTask, setShowQuickAddTask] = useState(false);

    let lightbulbType = darkMode ? 'far' : 'fas';

    return (
        <header className="header" data-testid="header">
            <nav>
                <div className="logo">
                    <FontAwesomeIcon icon={['fas', 'list-ul']} size="2x" />
                    <span>Todoist</span>
                </div>
                <div className="settings">
                    <ul>
                        <li
                            data-testid="quick-add-task-action"
                            className="settings__add"
                            onClick={() => {
                                setShowQuickAddTask(true);
                                setShouldShowMain(true);
                            }}
                        >
                            <FontAwesomeIcon icon={['far', 'plus-square']} size="2x" />
                        </li>
                        <li
                            data-testid="dark-mode-action"
                            className="settings__darkmode"
                            onClick={() => setDarkMode(!darkMode)}
                        >
                            <FontAwesomeIcon icon={[`${lightbulbType}`, 'lightbulb']} size="2x" />
                        </li>
                    </ul>
                </div>
            </nav>

        <AddTask
            showAddTask={false}
            shouldShowMain={shouldShowMain}
            showQuickAddTask={showQuickAddTask}
            setShowQuickAddTask={setShowQuickAddTask}
        />

        </header>
    )
}