import React from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const TaskDate = ({setTaskDate, showTaskDate, setShowTaskDate}) => {
    return (
        showTaskDate && (
            <div className="task-date" data-testid="task-date__list">
                <ul className="task-date__list">
                    <li
                        data-testid="task-date-today"
                        onClick={() => {
                            setShowTaskDate(false);
                            setTaskDate(moment().format('DD/MM/YYYY'))
                        }}
                    >
                        <span>
                            <FontAwesomeIcon icon={['fal', 'space-shuttle']} />
                        </span>
                        <span>Today</span>
                    </li>
                    <li
                        data-testid="task-date-tomorrow"
                        onClick={() => {
                            setShowTaskDate(false);
                            setTaskDate(moment()
                            .add(1, 'day')
                            .format('DD/MM/YYYY'))
                        }}
                    >
                        <span>
                            <FontAwesomeIcon icon={['fal', 'sun']} />
                        </span>
                        <span>Tomorrow</span>
                    </li>
                    <li
                        data-testid="task-date-next-week"
                        onClick={() => {
                            setShowTaskDate(false);
                            setTaskDate(moment()
                            .add(7, 'day')
                            .format('DD/MM/YYYY'))
                        }}
                    >
                        <span>
                            <FontAwesomeIcon icon={['fal', 'paper-plane']} />
                        </span>
                        <span>Next week</span>
                    </li>
                </ul>
            </div>
        )
    );
}