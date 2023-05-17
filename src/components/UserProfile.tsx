import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserProfileType } from '../types/user';
import { fetchUserProfile } from '../services/fetchUserClient';

function UserProfile(){

    const { username } = useParams();

    const [userData, setUserData] = useState<UserProfileType | null>();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const githubUserData = await fetchUserProfile(username);
                setUserData(githubUserData);
            } catch (error){
                setUserData(null);
            } 
        };

        fetchUserData();
    }, [username]);

    if (!userData) {
        return <h1>Usuário não encontrado...</h1>;
    }

    return (
        <article
            style={{
                height: '29rem',
                width: '17.5rem',
                background: '#fff',
                borderRadius: '4px',
                padding: '24px 16px'
            }}
        >
            <div style={{ display: 'flex', margin: '1.5rem 1rem', justifyContent: 'center', alignItems: 'center' }}>
                <div>
                    <img 
                        alt={userData.login}
                        src={userData.avatar_url}
                        style={{ width: '3rem', height: '3rem', borderRadius: "50%", marginRight: '1rem' }} 
                    />
                </div>

                <div>
                    <h2 style={{ fontSize: '1.2rem', fontWeight: '700' }}>{userData.name}</h2>
                    <p style={{ color: '#A0AEC0', fontSize: '1rem', fontWeight: '400' }} >@{userData.login}</p>
                </div>
            </div>

            <div style={{ margin: '1.5rem 1rem' }}>
                <p style={{ fontSize: '1rem', fontWeight: '400', color: '#4A5568'}}>{userData.bio}</p>
            </div>

            <div style={{ margin: '1.5rem 1rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', color: '#4A5568', fontSize: '14px', marginBottom: '11px' }}>
                    <i className="pi pi-users"></i>
                    <span style={{ margin: '0 4px 0 9px' }}>{userData.followers}</span> seguidores
                </p>
                <p style={{ display: 'flex', alignItems: 'center', color: '#4A5568', fontSize: '14px' }}>
                    <i className="pi pi-heart"></i>
                    <span style={{ margin: '0 4px 0 9px' }}>{userData.following}</span> seguindo
                </p>
            </div>

            <div style={{ margin: '1.5rem 1rem' }}>
                
                {userData.company && (
                    <p style={{ display: 'flex', alignItems: 'center', color: '#4A5568', fontSize: '14px', marginBottom: '11px' }}>
                        <i className="pi pi-briefcase"></i>
                        <span style={{ marginLeft: '9px' }}>{userData.company}</span>
                    </p>
                )}

                {userData.location && (
                    <p style={{ display: 'flex', alignItems: 'center', color: '#4A5568', fontSize: '14px', marginBottom: '11px' }}>
                        <i className="pi pi-map-marker"></i>
                        <span style={{ marginLeft: '9px' }}>{userData.location}</span>
                    </p>
                )}

                {userData.email && (
                    <p style={{ display: 'flex', alignItems: 'center', color: '#4A5568', fontSize: '14px', marginBottom: '11px' }}>
                        <i className="pi pi-envelope"></i>
                        <span style={{ marginLeft: '9px' }}>{userData.email}</span>
                    </p>
                )}

                {userData.blog && (
                    <a
                        target="_blank"
                        href={userData.blog}
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: '#4A5568' }}
                    >
                        <p style={{ display: 'flex', alignItems: 'center', color: '#4A5568', fontSize: '14px', marginBottom: '11px' }}>
                            <i className="pi pi-paperclip"></i>
                            <span style={{ marginLeft: '9px' }}>{userData.blog}</span>
                        </p>
                    </a>
                )}

                {userData.twitter_username && (
                    <a
                        target="_blank"
                        href={`https://twitter.com/${userData.twitter_username}`}
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: '#4A5568' }}
                    >
                        <p style={{ display: 'flex', alignItems: 'center', color: '#4A5568', fontSize: '14px', marginBottom: '11px' }}>
                            <i className="pi pi-twitter"></i>
                            <span style={{ marginLeft: '9px' }}>{userData.twitter_username}</span>
                        </p>
                    </a>
                )}
            </div>
        </article>
    );
}

export default UserProfile;