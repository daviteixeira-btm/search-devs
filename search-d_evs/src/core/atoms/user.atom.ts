import { atom } from "recoil";
import { UserProps } from "../../types/user";

export const userState= atom<UserProps | null>({
    key: 'user-state',
    default: null
})