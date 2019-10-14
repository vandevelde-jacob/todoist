import { collatedTasks } from '../constants';

export const getTitle = (projects, projectId) => {
    return (
        projects.find(project => project.projectId === projectId)
    )
}

export const getCollatedTitle = (projects, key) => {
    return (
        projects.find(project => project.key === key)
    )
}

export const collatedTasksExist = selected => {
    return (
        collatedTasks.find(task => task.key === selected)
    )
}

export const generatedPushId = (() => {
    const PUSH_CHARS = '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz';

    const lastRandChars = [];

    return function() {
        let now = new Date().getTime();
        const timeStampChars = new Array(8);
        for (var i = 7; i >= 0; i--) {
            timeStampChars[i] = PUSH_CHARS.charAt(now % 64);
            now = Math.floor(now / 64);
        }

        let id = timeStampChars.join('');

        for (var i = 0; i < 12; i++) {
            id += PUSH_CHARS.charAt(lastRandChars[i]);
        }

        return id;
    }
})();