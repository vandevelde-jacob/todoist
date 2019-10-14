import { collatedTasks } from '../constants';

export const collatedTasksExist = selected => {
    collatedTasks.find(task => task.key === selected);
}