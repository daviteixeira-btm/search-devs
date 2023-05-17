import { InputText } from "primereact/inputtext";
import { ChangeEventHandler, FormEventHandler } from "react";

type InputUserSearchProps = {
    username: string;
    handleFormSubmit: FormEventHandler<HTMLFormElement>;
    handleInputChange: ChangeEventHandler<HTMLInputElement>;
}

const InputUserSearch = ({ username, handleFormSubmit, handleInputChange }: InputUserSearchProps) => {
    return (
        <form onSubmit={handleFormSubmit}>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText
                    type="text"
                    value={username}
                    placeholder="Search"
                    onChange={handleInputChange}
                    style={{
                        width: '36rem',
                        marginRight: '2rem',
                        borderRadius: '.3rem',
                    }}
                />
            </span>
        </form>
    );
};

export default InputUserSearch;