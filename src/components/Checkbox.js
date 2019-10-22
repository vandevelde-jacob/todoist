import React from 'react';
import { firebase } from '../firebase';

export const Checkbox = ({ id, disabled }) => {
    const archiveTask = () => {
        firebase
        .firestore()
        .collection('tasks')
        .doc(id)
        .update({
            archived: true
        });
    };

    return (
        <div
            className="checkbox-holder"
            data-testid="checkbox-action"
            onClick={() => {
                if (disabled) {
                    return;
                } else {
                    archiveTask()}
                }
            }
        >
            <span className="checkbox" />
        </div>
    )
};