import { useRecoilValue } from "recoil";

import { repositoriesSelector } from "../../services/client";

const ReposPainel = () => {

    const repositories = useRecoilValue(repositoriesSelector);

    if(!repositories){
        return <h1>Repositórios não encontrados...</h1>
    }

    console.log(repositories)

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
            { repositories.map((repo: any) => (
                <div 
                    style={{ 
                        height: 'auto', 
                        margin: '24px', 
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
                            {repo.updated_at}
                        </p>
                    </div>

                </div>
            ))}
        </section>
    );
};

export default ReposPainel;