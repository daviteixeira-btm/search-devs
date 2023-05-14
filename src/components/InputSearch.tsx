import { ChangeEvent, KeyboardEvent } from 'react';

import { ReposProps } from '../types/repos';

import { RecoilValueReadOnly, useRecoilState } from 'recoil';

import { searchInputState } from '../core/atoms';

import { InputText } from 'primereact/inputtext';

type SearchProps = {
    loadUser: (userName: string) => Promise<void>;
    repositoriesSelector: (username: string) => RecoilValueReadOnly<ReposProps[]>;
}

const InputSearch = ({ loadUser, repositoriesSelector }: SearchProps) => {

    const [searchInput, setSearchInput] = useRecoilState(searchInputState);

    const handleKeyDown = (e: KeyboardEvent) => {
        if(e.key === "Enter"){
            loadUser(searchInput);
            repositoriesSelector(searchInput);
        }
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
    };

    return (
        <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText
                type="text"
                value={searchInput}
                placeholder="Search"
                onKeyDown={handleKeyDown}
                onChange={handleInputChange}
                style={{
                    width: '36rem',
                    marginRight: '2rem',
                    borderRadius: '.3rem',
                    // border: '2px solid #8C19D2',
                }}             
            />
        </span>
    );
};

export default InputSearch;