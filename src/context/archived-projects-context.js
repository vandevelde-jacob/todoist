import React, { createContext, useContext } from 'react';

import { useArchivedProjects } from '../hooks';

export const ArchivedProjectsContext = createContext();
export const ArchivedProjectsProvider = ({children}) => {
    const { archivedProjects, setArchivedProjects } = useArchivedProjects();

    return (
        <ArchivedProjectsContext.Provider value={{ archivedProjects, setArchivedProjects }}>
            {children}
        </ArchivedProjectsContext.Provider>
    );
};

export const useArchivedProjectsValue = () => useContext(ArchivedProjectsContext);
