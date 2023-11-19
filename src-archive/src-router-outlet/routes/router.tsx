import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import {Error404} from '../components/pages/Error404';
import {Page} from '../components/pages/Page';
import {dataState} from '../data/dataState';
import {ProtectedPage} from '../components/pages/ProtectedPage';
import {ProtectedRoute} from './ProtectedRoute';
import {PageInPage} from '../components/pages/PageInPage';

export const router = createBrowserRouter([
    {
        path: '/',    //http://localhost:3000/
        element: <App/>,
        errorElement: <Error404/>,
        children: [
            {
                path: '/page/:id',  //http://localhost:3000/page/:id
                element: (
                    <Page pages={dataState.pages}/>
                ),
            },
            {
                path: '/page/:id/pp',  //http://localhost:3000/page/:id
                element: (
                    <PageInPage/>
                ),
            },
            {
                path: '/page/protected',
                element: (
                    <ProtectedRoute>
                        <ProtectedPage/>
                    </ProtectedRoute>
                ),
            },
            {
                path: '/page/error',
                element: (
                    <Error404/>
                ),
            }
        ],
    },

]);
