import { createBrowserRouter } from 'react-router';
import MasterLayout from './layouts/MasterLayoute';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';


const router = createBrowserRouter([
    {
        path: '/', Component: MasterLayout, children: [
            { index: true, Component: HomePage },
            { path: '/posts', Component: PostPage },
        ]
    }
]);

export default router;