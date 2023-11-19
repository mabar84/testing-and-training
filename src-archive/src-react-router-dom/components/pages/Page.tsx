import React from 'react';
import {PagesType} from '../data/dataState';
import {Navigate, useLocation, useParams} from 'react-router-dom';
import {Error404} from './Error404';

type PropsType = {
    pages: PagesType[]
}

export const Page: React.FC<PropsType> = ({pages}) => {

    const params = useParams()
    const location = useLocation()

    console.log(params.item)
    console.log(location.pathname)
    return (
        pages[Number(params.item)]
            ?
            <div>

                {location.pathname === '/page/0' && <div>Secret text</div>}
                {pages[Number(params.item)].heading}
                <br/>
                {pages[Number(params.item)].about}

            </div>
            :
            <Navigate to={'/page/error'}/>
        // <Error404/>
    );
};

