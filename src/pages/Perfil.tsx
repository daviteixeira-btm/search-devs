import { useState } from 'react';

import { useRecoilState } from 'recoil';
import { NavLink, useNavigate } from 'react-router-dom';

import InputSearch from '../components/InputSearch';

import { UserProps } from '../types/user';

import { userState } from '../core/atoms';

import { fetchUser, repositoriesSelector } from '../services/client';

import { Button } from 'primereact/button';

import User from '../components/User';
import ReposPainel from '../components/ReposPainel';

const Perfil = () => {

    const [, setUser] = useRecoilState<UserProps | null>(userState);

    const [, setError] = useState(false);

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
        <main>
            <nav
                style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    background: '#ffffff' 
                }}
            >

                <NavLink to="/" style={{ textDecoration: 'none' }}>
                    <h1
                        style={{ 
                            color: '#8C19D2', 
                            fontSize: '2rem', 
                            fontWeight: '700', 
                            margin: '1.3rem 7rem'
                        }}
                    >
                        <span style={{ color: '#0069CA' }}>Search</span> d_evs
                    </h1>
                </NavLink>

                <InputSearch loadUser={handleLoadUser} repositoriesSelector={repositoriesSelector} />
            </nav>
            
            <section
                style={{ 
                    width: '100%',
                    height: '100%', 
                    display: 'flex',
                    padding: '5rem 2rem',
                    background: '#f2f2f2', 
                    justifyContent: 'space-evenly',
                }}
            >

                <div>
                    <User />
                    
                    <Button
                        type="button"
                        label="Contato"
                        className="p-button-raised p-button-help p-p-3"
                        style={{ 
                            width: '17.5rem', 
                            borderRadius: '6px', 
                            marginTop: '2.5rem', 
                        }}
                    />
                </div>

                <div>
                    <ReposPainel />
                </div>
                
            </section>
        </main>
    );
};

export default Perfil;