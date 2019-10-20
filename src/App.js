import React, { useState } from 'react';

import { Header } from './components/layout/Header';
import { Content } from './components/layout/Content';
import { ProjectsProvider, SelectedProjectProvider } from './context';

// userId:
// B89U51sSozf1bmxltuAe

export const App = ({ darkModeDefault = true }) => {
    const [darkMode, setDarkMode] = useState(darkModeDefault);

    return (
        <SelectedProjectProvider>
            <ProjectsProvider>
                <main
                    data-testid="application"
                    className={darkMode ? 'darkmode' : undefined}
                >
                    <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
                    <Content />
                </main>
            </ProjectsProvider>
        </SelectedProjectProvider>
    );
}
