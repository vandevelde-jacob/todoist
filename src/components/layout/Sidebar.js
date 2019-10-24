import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useSelectedProjectValue } from '../../context';
import { Projects } from '../Projects';
import { AddProject } from '../AddProject';

export const Sidebar = () => {
    const { setSelectedProject } = useSelectedProjectValue();
    const [ active, setActive ] = useState('INBOX');
    const [ showProjects, setShowProjects ] = useState(true);
    const [ showArchivedProjects, setShowArchivedProjects ] = useState(true);
    const [ sortAsc, setSortAsc ] = useState(true);

    let arrowDirection = sortAsc ? 'down' : 'down-alt';

    return (
        <div className="sidebar" data-testid="sidebar">
            <ul className="sidebar__generic">
                <li
                    data-testid="inbox"
                    className={active === 'inbox' ? 'active' : undefined}
                    onClick={() => {
                        setActive('inbox');
                        setSelectedProject('INBOX');
                    }}
                >
                    <span><FontAwesomeIcon icon={['fas', 'inbox']} /></span>
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
                    <span><FontAwesomeIcon icon={['far', 'calendar']} /></span>
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
                    <span><FontAwesomeIcon icon={['far', 'calendar-alt']} /></span>
                    <span>Next 7 days</span>
                </li>
            </ul>

            <div className="sidebar__projects-header" onClick={() => setShowProjects(!showProjects)}>
                <span><FontAwesomeIcon icon={['fas', 'chevron-down']} rotation={!showProjects ? 270 : undefined}/></span>
                <h2>Projects</h2>
            </div>

            { showProjects && (
                <div className="sidebar__functions">
                    <span title="Sort by name" onClick={() => setSortAsc(!sortAsc)}><FontAwesomeIcon icon={['fas', `sort-alpha-${arrowDirection}`]} /></span>
                    <span title="Todo"><FontAwesomeIcon icon={['fas', 'sync']} /></span>
                    <span title="Todo"><FontAwesomeIcon icon={['fas', 'cog']} /></span>
                </div>
            )}

            { showProjects && (
                <ul className="sidebar__projects"><Projects isProjectArchived={false} sortAsc={sortAsc} /></ul>
            )}

            { showProjects && (
                <AddProject />
            )}

            <div className="sidebar__archived-projects-header" onClick={() => setShowArchivedProjects(!showArchivedProjects)}>
                <span><FontAwesomeIcon icon={['fas', 'chevron-down']} rotation={!showArchivedProjects ? undefined : 270}/></span>
                <h2>Archived Projects</h2>
            </div>

            { !showArchivedProjects && (
                <ul className="sidebar__archived-projects"><Projects isProjectArchived={true} sortAsc={sortAsc} /></ul>
            )}

        </div>
    )
}