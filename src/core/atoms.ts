import { atom } from "recoil";
import { UserProps } from "../types/user";
import { ReposProps } from "../types/repos";

export const repoState = atom<Array<ReposProps>>({
    key: 'repositoriesState',
    default: [],
});

export const userState= atom<UserProps | null>({
    key: 'user-state',
    default: null
})