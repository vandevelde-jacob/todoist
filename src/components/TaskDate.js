import React from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const TaskDate = ({setTaskDate, showTaskDate, setShowTaskDate}) => {
    return (
        showTaskDate && (
            <div className="task-date-overlay" data-testid="task-date-overlay__list">
                <ul className="task-date-overlay__list">
                    <li
                        data-testid="task-date-overlay-today"
                        onClick={() => {
                            setShowTaskDate(false);
                            setTaskDate(moment().format('DD/MM/YYYY'))
                        }}
                    >
                        <span>
                            <FontAwesomeIcon icon={['far', 'calendar']} />
                        </span>
                        <span>Today</span>
                    </li>
                    <li
                        data-testid="task-date-overlay-tomorrow"
                        onClick={() => {
                            setShowTaskDate(false);
                            setTaskDate(moment()
                            .add(1, 'day')
                            .format('DD/MM/YYYY'))
                        }}
                    >
                        <span>
                            <FontAwesomeIcon icon={['far', 'calendar-plus']} />
                        </span>
                        <span>Tomorrow</span>
                    </li>
                    <li
                        data-testid="task-date-overlay-next-week"
                        onClick={() => {
                            setShowTaskDate(false);
                            setTaskDate(moment()
                            .add(7, 'day')
                            .format('DD/MM/YYYY'))
                        }}
                    >
                        <span>
                            <FontAwesomeIcon icon={['fas', 'paper-plane']} />
                        </span>
                        <span>Next week</span>
                    </li>
                </ul>
            </div>
        )
    );
}