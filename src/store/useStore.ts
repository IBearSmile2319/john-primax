import create from 'zustand';
import {
    devtools,
} from 'zustand/middleware';
import UserSlice, { UserStateActions } from './slice/user.slice';

const useStore = create<UserStateActions>()(devtools((...a) => ({
    ...UserSlice(...a),
})));


export default useStore;