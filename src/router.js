import { createBrowserRouter } from 'react-router';
import MasterLayout from './layouts/MasterLayoute';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import CatPage from './pages/CatPage';
import TestPage from './pages/TestPage';
import DogPage from './pages/DogPage';


const router = createBrowserRouter([
    {
        path: '/', Component: MasterLayout, children: [
            { index: true, Component: HomePage },
            { path: '/posts', Component: PostPage },
            { path: '/cats', Component: CatPage },
            { path: '/dogs', Component: DogPage },
            { path: '/tests', Component: TestPage },
        ]
    }
]);

export default router;