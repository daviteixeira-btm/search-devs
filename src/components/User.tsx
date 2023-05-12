import { useRecoilValue } from "recoil";
import { userState } from "../core/atoms/user.atom";

const User = () => {

    const user = useRecoilValue(userState);

    if(!user){
        return <h1>Usuario não pesquisado...</h1>
    }

    return (
        <article
            style={{
                background: '#fff',
                width: '17.5rem',
                height: '29rem',
                borderRadius: '4px',
                padding: '24px 16px'
            }}
        >
            <div style={{ display: 'flex', margin: '1.5rem 1rem', justifyContent: 'center', alignItems: 'center' }}>
                <div>
                    <img 
                        alt={user.login}
                        src={user.avatar_url}
                        style={{ width: '3rem', height: '3rem', borderRadius: "50%", marginRight: '1rem' }} 
                    />
                </div>

                <div>
                    <h2 style={{ fontSize: '1.2rem', fontWeight: '700' }}>{user.name}</h2>
                    <p style={{ color: '#A0AEC0', fontSize: '1rem', fontWeight: '400' }} >@{user.login}</p>
                </div>
            </div>

            <div style={{ margin: '1.5rem 1rem' }}>
                <p style={{ fontSize: '1rem', fontWeight: '400', color: '#4A5568'}}>{user.bio}</p>
            </div>

            <div style={{ margin: '1.5rem 1rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', color: '#4A5568', fontSize: '14px', marginBottom: '11px' }}>
                    <i className="pi pi-users"></i>
                    <span style={{ marginLeft: '9px' }}>{user.followers}</span> seguidores
                </p>
                <p style={{ display: 'flex', alignItems: 'center', color: '#4A5568', fontSize: '14px' }}>
                    <i className="pi pi-heart"></i>
                    <span style={{ marginLeft: '9px' }}>{user.following}</span> seguindo
                </p>
            </div>

            <div style={{ margin: '1.5rem 1rem' }}>
                
                {user.company && (
                    <p style={{ display: 'flex', alignItems: 'center', color: '#4A5568', fontSize: '14px', marginBottom: '11px' }}>
                        <i className="pi pi-briefcase"></i>
                        <span style={{ marginLeft: '9px' }}>{user.company}</span>
                    </p>
                )}

                {user.location && (
                    <p style={{ display: 'flex', alignItems: 'center', color: '#4A5568', fontSize: '14px', marginBottom: '11px' }}>
                        <i className="pi pi-map-marker"></i>
                        <span style={{ marginLeft: '9px' }}>{user.location}</span>
                    </p>
                )}

                {user.email && (
                    <p style={{ display: 'flex', alignItems: 'center', color: '#4A5568', fontSize: '14px', marginBottom: '11px' }}>
                        <i className="pi pi-envelope"></i>
                        <span style={{ marginLeft: '9px' }}>{user.email}</span>
                    </p>
                )}

                {user.blog && (
                    <p style={{ display: 'flex', alignItems: 'center', color: '#4A5568', fontSize: '14px', marginBottom: '11px' }}>
                        <i className="pi pi-paperclip"></i>
                        <span style={{ marginLeft: '9px' }}>{user.blog}</span>
                    </p>
                )}

                {user.twitter_username && (
                    <p style={{ display: 'flex', alignItems: 'center', color: '#4A5568', fontSize: '14px', marginBottom: '11px' }}>
                        <i className="pi pi-twitter"></i>
                        <span style={{ marginLeft: '9px' }}>{user.twitter_username}</span>
                    </p>
                )}
            </div>

        </article>
    );
};

export default User;