import { atom } from "recoil";
import { ReposProps } from "../../types/repos";

export const repoState = atom<Array<ReposProps>>({
    key: 'repositoriesState',
    default: [],
});