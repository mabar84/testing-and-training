import React, {useEffect, useState} from 'react';
import './App.css';
import {NavLink, Outlet} from 'react-router-dom';
import styles from './components/Site.module.css';
import {S} from './components/pages/__styles';
import {useWindowSize} from './helpers/useWindowSize';


function App() {
    const widthSize = useWindowSize()

    return (
        <>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                {widthSize > 1000
                    ? <div className={styles.nav}>
                        <S.NavWrapper><NavLink to={'/page/0'}>Page1</NavLink></S.NavWrapper>
                        <S.NavWrapper><NavLink to={'/page/1'}>Page2</NavLink></S.NavWrapper>
                        <S.NavWrapper><NavLink to={'/page/2'}>Page3</NavLink></S.NavWrapper>
                        <S.NavWrapper><NavLink to={'/page/protected'}>Protected Page</NavLink></S.NavWrapper>
                    </div>
                    : <div></div>}


                <div className={styles.content}>
                    <Outlet/>
                </div>
            </div>

        </>
    );
}


export default App;