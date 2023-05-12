import { useState } from 'react';

import { UserProps } from '../types/user';

import Search from '../components/Search';

import Error  from '../components/Error';

import { useNavigate } from 'react-router-dom';

import { useRecoilState } from 'recoil';

import { userState } from '../core/atoms/user.atom';

const Home = () => {

    const [user, setUser] = useRecoilState<UserProps | null>(userState);

    const [ error, setError ] = useState(false);

    const navigate = useNavigate();

    const loadUser = async(userName: string) => {

        setError(false);
        setUser(null);

        const response = await fetch(`https://api.github.com/users/${userName}`);
        const data = await response.json();

        if(response.status === 404) {
            setError(true);
            return;
        }

        const { 
            avatar_url,
            login, 
            location, 
            followers, 
            following, 
            name, 
            bio,
            company,
            email,
            blog,
            twitter_username,
        } = data;

        const userData: UserProps = {
            avatar_url,
            login,
            location,
            followers,
            following,
            name,
            bio,
            company,
            email,
            blog,
            twitter_username,
        };

        setUser(userData);
        navigate("/perfil");
    }

    return (
        <main
            style={{ 
                height: '100vh', 
                display: 'flex', 
                alignItems: 'center', 
                // border: '1px solid red', 
                flexDirection: 'column', 
                justifyContent: 'center',
            }}
        >

            <h1 style={{ fontSize: '5rem', fontWeight: '700', color: '#8C19D2', marginBottom: '3.5rem'}}>
                <span style={{ color: '#0069CA' }}>Search</span> d_evs
            </h1>
            
            <div
                style={{ 
                    width: '100%', 
                    display: 'flex', 
                    justifyContent: 'center'
                }}
            >
                <Search loadUser={loadUser} />
                { error && <Error /> }
            </div>
        </main>
    );
};

export default Home;