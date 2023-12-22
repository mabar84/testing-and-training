import {RootStateOrAny, RootStoreType} from 'store';


export const selectUsersCount = (state: RootStoreType): number => state.userCount.count
