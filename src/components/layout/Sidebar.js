import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useSelectedProjectValue } from '../../context';
import { Projects } from '../Projects';
import { AddProject } from '../AddProject';

export const Sidebar = () => {
    const { setSelectedProject } = useSelectedProjectValue();
    const [ active, setActive ] = useState('INBOX');
    const [ showProjects, setShowProjects ] = useState(true);

    return (
        <div className="sidebar" data-testid="sidebar">
            <ul className="sidebar__generic">
                <li
                    data-testid="index"
                    className={active === 'inbox' ? 'active' : undefined}
                    onClick={() => {
                        setActive('inbox');
                        setSelectedProject('INBOX');
                    }}
                >
                    <span><FontAwesomeIcon icon={['fal', 'inbox']} /></span>
                    <span>Inbox</span>
                </li>
                <li
                    data-testid="today"
                    className={active === 'today' ? 'active' : undefined}
                    onClick={() => {
                        setActive('today');
                        setSelectedProject('TODAY');
                    }}
                >
                    <span><FontAwesomeIcon icon={['fal', 'calendar']} /></span>
                    <span>Today</span>
                </li>
                <li
                    data-testid="next_7"
                    className={active === 'next_7' ? 'active' : undefined}
                    onClick={() => {
                        setActive('next_7');
                        setSelectedProject('NEXT_7');
                    }}
                >
                    <span><FontAwesomeIcon icon={['fal', 'calendar-alt']} /></span>
                    <span>Next 7 days</span>
                </li>
            </ul>

            <div className="sidebar__middle" onClick={() => setShowProjects(!showProjects)}>
                <span><FontAwesomeIcon icon={['fal', 'chevron-down']} rotation={!showProjects ? 270 : 0}/></span>
                <h2>Projects</h2>
            </div>

            <ul className="sidebar__projects">{ showProjects && <Projects /> }</ul>
            <AddProject />
        </div>
    )
}