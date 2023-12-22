import {UserType} from 'types';
import {RootStateOrAny, RootStoreType} from '../index';
import {useSelector} from 'react-redux';
import {Store} from 'redux';

export const selectUsers = (state: RootStoreType): UserType[] => state.usersData.users

// export const selectUsers = useSelector<RootStateOrAny ,Array<UserType> >  (state => state.usersData.users)

// useSelector<AppRootStateType, Array<TodolistType>>(state => state.todolists)
