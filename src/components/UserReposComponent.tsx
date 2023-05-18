import { ptBR } from 'date-fns/locale';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserReposType } from '../types/repos';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { fetchUserReposClient } from '../services/fetchUserClient';
import Loader from './Loader/Loader';

function UserReposComponent() {

    const { username } = useParams();
    const [repositories, setRepositories] = useState<UserReposType[]>([]);

    const [, setLoading] = useState(true);
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const fetchRepositories = async () => {
            try {
                const githubUserData = await fetchUserReposClient(username);
                setRepositories(githubUserData);
            } catch (error){
                setRepositories([])
            } finally {
                setLoading(false);
                setTimeout(() => {
                    setShowLoader(false);
                }, 500);
            }
        };

        fetchRepositories();
    }, [username]);

    if (showLoader) {
        return <Loader />;
    }

    if (repositories.length === 0) {
        return <h1 style={{ color: "#8C19D2" }}>Não há reposítorios...</h1>;
    }

    return (
        <section
            style={{
                height: 'auto',
                padding: '1rem',
                width: '56.5rem',
                background: '#fff',
                borderRadius: '4px',
            }}
        >
            <ul>
                {
                    repositories.map((repo) => {

                    const updatedAt = parseISO(repo.updated_at);
                    const daysSinceUpdate = formatDistanceToNow(updatedAt, { addSuffix: true, locale: ptBR });
                    
                    return (
                        <li
                            key={repo.id}
                            
                            style={{
                                height: 'auto',
                                margin: '24px',
                                listStyle: 'none',
                                borderBottom: '1px solid #f2f2f2',
                            }}
                        >
                            <a
                                target="_blank"
                                href={repo.html_url}
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none', color: '#171923', fontWeight: '700' }}
                            >
                                <h3 style={{ marginBottom: '1rem', fontSize: '20px' }}>{repo.name}</h3>
                            </a>

                            <p style={{ marginBottom: '1rem' }}>{repo.description}</p>

                            <div
                                style={{
                                    display: 'flex',
                                    marginBottom: '1rem',
                                    alignItems: 'center',
                                }}
                            >
                                <p
                                    style={{
                                        display: 'flex',
                                        color: '#4A5568',
                                        fontSize: '14px',
                                        alignItems: 'center',
                                    }}
                                >
                                    <i className="pi pi-star"></i>
                                    <span style={{ margin: '0 11px', fontSize: '14px' }}>
                                        {repo.stargazers_count}
                                    </span>
                                    <i className="pi pi-circle-on" style={{ fontSize: '4px' }}></i>
                                </p>
                                <p style={{ marginLeft: '11px', fontSize: '14px' }}>
                                    Atualizado {daysSinceUpdate}
                                </p>
                            </div>

                        </li>
                    )})
                }
            </ul>
        </section>
    );
}

export default UserReposComponent;