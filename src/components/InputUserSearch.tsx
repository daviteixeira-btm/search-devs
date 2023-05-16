import { InputText } from "primereact/inputtext";

const InputUserSearch = ({ handleFormSubmit, username, handleInputChange }: any) => {

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