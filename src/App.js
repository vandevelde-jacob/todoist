import React from 'react';

import { Header } from './components/layout/Header';
import { Content } from './components/layout/Content';
import { ProjectsProvider, SelectedProjectProvider } from './context';

// userId:
// B89U51sSozf1bmxltuAe

export const App = () => {
    return (
        <SelectedProjectProvider>
            <ProjectsProvider>
                <div className="App">
                    <Header />
                    <Content />
                </div>
            </ProjectsProvider>
        </SelectedProjectProvider>
    );
}
