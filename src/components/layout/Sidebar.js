import React, { useState } from 'react';

import { useSelectedProjectValue } from '../../context';
import { Projects } from '../Projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Sidebar = () => {
    const { setSelectedProject } = useSelectedProjectValue;
    const [ active, setActive ] = useState('INBOX');
    const [ showProjects, setShowProjects ] = useState(true);

    return (
        <div className="sidebar" data-testid="sidebar">]
            <ul className="sidebar__generic">
                <li data-testid="index" className="index">
                    <span><FontAwesomeIcon icon={['fal', 'inbox']} /></span>
                    <span>Inbox</span>
                </li>
                <li data-testid="today" className="today">
                    <span><FontAwesomeIcon icon={['fal', 'calendar']} /></span>
                    <span>Today</span>
                </li>
                <li data-testid="next_7" className="next_7">
                    <span><FontAwesomeIcon icon={['fal', 'calendar-alt']} /></span>
                    <span>Next 7 days</span>
                </li>
            </ul>

            <div className="sidebar__middle">
                <span><FontAwesomeIcon icon={['fal', 'chevron-down']} /></span>
                <h2>Projects</h2>
            </div>

            <ul className="sidebar__projects">{ showProjects && <Projects /> }</ul>
        </div>
    )
}