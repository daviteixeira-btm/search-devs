import { useState } from 'react';

import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

import Error from '../components/Error';
import Search from '../components/Search';

import { UserProps } from '../types/user';

import { userState } from '../core/atoms/user.atom';
import { repositoriesSelector } from '../services/client';

const Home = () => {

    const [, setUser] = useRecoilState<UserProps | null>(userState);

    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const loadUser = async (userName: string) => {

        setError(false);
        setUser(null);

        const response = await fetch(`https://api.github.com/users/${userName}`);
        const data = await response.json();

        if (response.status === 404) {
            setError(true);
            return;
        }

        const {
            bio,
            name,
            blog,
            email,
            login,
            company,
            location,
            followers,
            following,
            avatar_url,
            twitter_username,
        } = data;

        const userData: UserProps = {
            bio,
            name,
            blog,
            login,
            email,
            company,
            location,
            followers,
            following,
            avatar_url,
            twitter_username,
        };

        setUser(userData);
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
                <Search loadUser={loadUser} repositoriesSelector={repositoriesSelector}/>
            </div>

            {error && <Error />}
        </main>
    );
};

export default Home;