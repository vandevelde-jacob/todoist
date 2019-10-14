import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Header = () => {
    return (
        <header className="header" data-testid="header">
            <nav>
                <div className="logo">
                    <FontAwesomeIcon icon={['fal', 'clipboard-check']} size="2x" />
                    <span>Todoist</span>
                </div>
                <div className="settings">
                    <ul>
                        <li data-testid="quick-add-task-action"><FontAwesomeIcon icon={['fal', 'plus-square']} size="2x" /></li>
                        <li data-testid="dark-mode-action"><FontAwesomeIcon icon={['fal', 'lightbulb']} size="2x" /></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}