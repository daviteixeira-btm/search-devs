import { ChangeEvent, useState } from "react";
import UserProfile from "../components/UserProfile";
import { NavLink, useNavigate } from "react-router-dom";
import InputUserSearch from "../components/InputUserSearch";
import UserReposComponent from "../components/UserReposComponent";

const UserPerfilPage = () => {

    const navigate = useNavigate();
    
    const [username, setUsername] = useState('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handleFormSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        navigate(`/perfil/${username}`);
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
                <h1
                    style={{ 
                        fontSize: '2rem', 
                        fontWeight: '700', 
                        margin: '1.3rem 7rem'
                    }}
                >
                    <NavLink to="/" style={{ textDecoration: 'none', color: '#8C19d2' }}>
                        <span style={{ color: '#0069CA' }}>Search</span> d_evs
                    </NavLink>
                </h1>

                <InputUserSearch
                    username={username}
                    handleFormSubmit={handleFormSubmit}
                    handleInputChange={handleInputChange}
                />
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
                    <UserProfile />
                </div>

                <div>
                    <UserReposComponent />
                </div>
                
            </section>
        </main>
    );
};

export default UserPerfilPage;