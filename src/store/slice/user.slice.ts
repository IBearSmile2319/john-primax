import { StateCreator } from 'zustand'
import { axiosConnect } from '../../helpers/axios';


export interface UserState {
    user: any;
    token: string;
    // actions
}
export interface UserActions {
    signIn: (email: string, password: string) => void;
    signOut?: () => void;
    reset ?: () => void;
}

export interface UserStateActions extends UserState, UserActions {}

const initialState: UserState = {
    user: {
        id: 0,
        name: '',
        email: '',
        password: '',
        role: '',
    },
    token: '',
}

const UserSlice: StateCreator<
    UserState & UserActions, 
    [["zustand/devtools", never]]
> = (set) => ({
    // initial state
    ...initialState,
    // actions
    signIn: (email: string, password: string) => {
        set({
            user: {
                id: 1,
                name: 'John Doe',
                email,
                password,
                role: 'admin',
            },
            token: '1234567890',
        });
    },
    reset: () => set(initialState),
})

export default UserSlice;