import { useState, KeyboardEvent } from 'react';

import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

type SearchProps = {
    loadUser: (userName: string) => Promise<void>;
}

const Search = ({ loadUser }: SearchProps) => {

    const [userName, setUserName] = useState("");

    const handleKeyDown = (e: KeyboardEvent) => {
        if(e.key === "Enter"){
            loadUser(userName);
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