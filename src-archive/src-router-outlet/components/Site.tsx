import React from 'react';
import styles from './Site.module.css'
import {PageOne} from './pages/PageOne';
import {PageTwo} from './pages/PageTwo';
import {PageThree} from './pages/PageThree';
import {Navigate, NavLink, Outlet, Route, Routes} from 'react-router-dom';
import {Error404} from './pages/Error404';
import {S} from './pages/__styles'
import styled from 'styled-components';
import {Page} from './pages/Page';
import {dataState} from '../data/dataState';


export const Site = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>

                <div className={styles.content}>
                    <Outlet/>


                </div>
            </div>
        </div>
    );
};

// const NavWrapper = styled.div`
//   margin-left: 10px;
//   font-size: 20px;
//
//   & > a {
//     text-decoration: none;
//     color: #1e3786;
//   }
//
//   & > a.active {
//     text-decoration: none;
//     color: #03eaff;
//   }
//
//   & > a:hover {
//     color: steelblue; /* Цвет ссылки */
//   }
// `
