import React from "react";
import styles from "./Site.module.css";
import { PageOne } from "./pages/PageOne";
import { PageTwo } from "./pages/PageTwo";
import { PageThree } from "./pages/PageThree";
import { Link, Navigate, NavLink, Route, Routes } from "react-router-dom";
import { Error404 } from "./pages/Error404";
import { S } from "./markUp/_styles";
import { Page } from "./pages/Page";
import { dataState } from "./data/dataState";

export const Site = () => {
  return (
    <div>
      <div className={styles.header}>
        <h1>HEADER</h1>
      </div>
      <div className={styles.body}>
        <div className={styles.nav}>
          {/*<NavWrapper>*/}
          {/*    <NavLink className={({isActive}) =>*/}
          {/*        isActive ? styles.active : styles.navLink*/}
          {/*    } to={'/page1'}>p1</NavLink>*/}
          {/*</NavWrapper>*/}

          {/*<S.NavWrapper>*/}
          {/*    <NavLink to={'/page1'}>p1</NavLink>*/}
          {/*</S.NavWrapper>*/}

          <S.NavWrapper>
            <NavLink to={"/page/0"}>p1</NavLink>
          </S.NavWrapper>
          <S.NavWrapper>
            <NavLink to={"/page/1"}>p2</NavLink>
          </S.NavWrapper>
          <S.NavWrapper>
            <NavLink to={"/page/2"}>p3</NavLink>
          </S.NavWrapper>
          <S.NavWrapper>
            <NavLink to={"/page"}>page</NavLink>
          </S.NavWrapper>
        </div>
        <div className={styles.content}>
          <Routes>
            {/*<Route path={'/'} element={<PageOne/>}/>*/}

            <Route path={"/"} element={<Navigate to={"/page1"} />} />

            {/*<Route path={'/page1'} element={<PageOne/>}/>*/}
            <Route
              path={"/page/:item"}
              element={<Page pages={dataState.pages} />}
            />

            <Route path={"/page/error"} element={<Error404 />} />
            <Route path={"/*"} element={<Navigate to={"/page/error"} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
