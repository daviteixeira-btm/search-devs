import { atom } from "recoil";
import { UserProps } from "../types/user";
import { ReposProps } from "../types/repos";

export const userState= atom<UserProps | null>({
    key: 'user-state',
    default: null
});

export const repoState = atom<Array<ReposProps>>({
    key: 'repositoriesState',
    default: [],
});

export const searchInputState = atom({
    key: 'searchInputState',
    default: '',
});