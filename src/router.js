import { createBrowserRouter } from 'react-router';
import MasterLayout from './layouts/MasterLayoute';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import CatPage from './pages/CatPage';
import TestPage from './pages/TestPage';
import DogPage from './pages/DogPage';
import GitHubUserPage from './pages/GitHubUserPage';
import PhotoPage from './pages/PhotoPage';
import RecipePage from './pages/RecipePage';


const router = createBrowserRouter([
    {
        path: '/', Component: MasterLayout, children: [
            { index: true, Component: HomePage },
            { path: '/posts', Component: PostPage },
            { path: '/cats', Component: CatPage },
            { path: '/dogs', Component: DogPage },
            { path: '/users', Component: GitHubUserPage },
            { path: '/photos', Component: PhotoPage },
            { path: '/recipes', Component: RecipePage },
            { path: '/tests', Component: TestPage },
        ]
    }
]);

export default router;