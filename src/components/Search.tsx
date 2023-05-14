import { KeyboardEvent } from 'react';

import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

import { useRecoilState } from 'recoil';
import { searchInputState } from '../core/atoms';

type SearchProps = {
    loadUser: (userName: string) => Promise<void>;
    repositoriesSelector: any;
}

const Search = ({ loadUser, repositoriesSelector }: SearchProps) => {

    const [searchInput, setSearchInput] = useRecoilState(searchInputState);

    const handleKeyDown = (e: KeyboardEvent) => {
        if(e.key === "Enter"){
            loadUser(searchInput);
            repositoriesSelector(searchInput);
        }
    };

    const handleInputChange = (e: any) => {
        setSearchInput(e.target.value);
    };

    return (
        <>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText
                    type='text'
                    value={searchInput}
                    placeholder="Search"
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    style={{ width: '37rem', marginRight: '2rem' }} 
                />
            </span>

            <Button
                onClick = {() => {
                    loadUser(searchInput)
                    repositoriesSelector(searchInput)
                }}
                type="button"
                label="Search"
                style={{ width: '11rem' }}
                className="p-button-raised p-button-help p-p-3"
            />
            
        </>
    );
};

export default Search