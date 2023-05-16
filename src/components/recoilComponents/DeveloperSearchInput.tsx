import { useRecoilState } from 'recoil';
import { searchInputState } from '../../core/atoms';
// import fetchUserProfile from '../services/cliente2';
import { ChangeEvent, KeyboardEvent } from 'react';

const DeveloperSearchInput = ({ onSearch }: any) => {
    
    const [searchValue, setSearchValue] = useRecoilState(searchInputState);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const handleSearch = () => {
        if (searchValue.trim() !== '') {
            onSearch(searchValue);
        }
    };

    // const handleKeyDown = async (event: KeyboardEvent) => {
    //     if (event.key === 'Enter') {

    //         event.preventDefault(); // Evita que o formulário seja enviado
            
    //         if (searchValue.trim() !== '') {

    //             await fetchUserProfile(searchValue)
    //                 .then((userProfile) => {
    //                     onSearch(userProfile);
    //                 })
    //                 .catch((error) => {
    //                     console.error('Erro ao buscar perfil do usuário:', error);
    //                 });
    //         }
    //     }
    // };

    return (
        <div>
            <input 
                type="text"
                value={searchValue}
                placeholder="Search"
                onChange={handleInputChange}
                // onKeyDown={handleKeyDown} 
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default DeveloperSearchInput;