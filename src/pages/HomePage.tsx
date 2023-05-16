import Error from '../components/Error';
import { Button } from 'primereact/button';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputUserSearch from '../components/InputUserSearch';

function HomePage() {

    const [error, setError] = useState(false);

    const [username, setUsername] = useState('');

    const navigate = useNavigate();

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handleFormSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        if(username === ''){
            setError(true);
            return;
        }

        navigate(`/perfil/${username}`);
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
                    color: '#8C19D2',
                    fontSize: '5rem',
                    fontWeight: '700',
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
                <InputUserSearch
                    username={username}
                    handleFormSubmit={handleFormSubmit}
                    handleInputChange={handleInputChange}
                />

                <Button
                    type="submit"
                    label="Search"
                    style={{ width: '11rem' }}
                    onClick={(handleFormSubmit)}
                    className="p-button-raised p-button-help p-p-3" 
                />

            </div>

            {error && <Error />}
        </main>
    );
}

export default HomePage;