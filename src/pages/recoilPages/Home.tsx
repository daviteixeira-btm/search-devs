import { useState } from 'react';

import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

import Error from '../../components/Error';

import { UserProps } from '../../types/user';

import { userState } from '../../core/atoms';
import { fetchUser, repositoriesSelector } from '../../services/client';
import InputSearch from '../../components/recoilComponents/InputSearch';
import ButtonSearch from '../../components/recoilComponents/ButtonSearch';

const Home = () => {

    const [, setUser] = useRecoilState<UserProps | null>(userState);

    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleLoadUser = async (userName: string) => {
        setError(false);
        setUser(null);

        const loadUserResponse = await fetchUser(userName);
        if(loadUserResponse === 404){
            setError(true);
            return;
        }

        setUser(loadUserResponse);
        navigate("/perfil");
    };

    return (
        <main
            style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center', 
                flexDirection: 'column',
                justifyContent: 'center',
            }}
        >

            <h1
                style={{ 
                    fontSize: '5rem', 
                    fontWeight: '700', 
                    color: '#8C19D2', 
                    marginBottom: '3.5rem' 
                }}
            >
                <span style={{ color: '#0069CA' }}>Search</span> d_evs
            </h1>

            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    marginBottom: '2rem',
                    justifyContent: 'center',
                }}
            >
                <InputSearch 
                    loadUser={handleLoadUser} 
                    repositoriesSelector={repositoriesSelector} 
                />
                
                <ButtonSearch 
                    loadUser={handleLoadUser} 
                    repositoriesSelector={repositoriesSelector} 
                />
            </div>

            {error && <Error />}
        </main>
    );
};

export default Home;