import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Header = ( {darkMode, setDarkMode} ) => {
    const [shouldShowMain, setShouldShowMain] = useState(false);
    const [showQuickAddTask, setShowQuickAddTask] = useState(false);

    let lightbulbType = darkMode ? 'lightbulb' : 'lightbulb-slash';

    return (
        <header className="header" data-testid="header">
            <nav>
                <div className="logo">
                    <FontAwesomeIcon icon={['fal', 'clipboard-check']} size="2x" />
                    <span>Todoist</span>
                </div>
                <div className="settings">
                    <ul>
                        <li
                            data-testid="quick-add-task-action"
                            className="quick-add-task"
                        >
                            <FontAwesomeIcon icon={['fal', 'plus-square']} size="2x" />
                        </li>
                        <li
                            data-testid="dark-mode-action"
                            className="settings__darkmode"
                            onClick={() => setDarkMode(!darkMode)}
                        >
                            <FontAwesomeIcon icon={['fal', `${lightbulbType}`]} size="2x" />
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}