import { useState, KeyboardEvent } from 'react';

import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

type SearchProps = {
    loadUser: (userName: string) => Promise<void>;
    repositoriesSelector: any;
}

const Search = ({ loadUser, repositoriesSelector }: SearchProps) => {

    const [userName, setUserName] = useState("");

    const handleKeyDown = (e: KeyboardEvent) => {
        if(e.key === "Enter"){
            loadUser(userName);
            repositoriesSelector(userName);
        }
    };

    return (
        <>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText
                    placeholder="Search"
                    onChange={(e) => setUserName(e.target.value)}
                    onKeyDown={handleKeyDown}
                    style={{ width: '37rem', marginRight: '2rem' }} 
                />
            </span>

            <Button
                onClick = {() => {
                    loadUser(userName)
                    repositoriesSelector(userName)
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