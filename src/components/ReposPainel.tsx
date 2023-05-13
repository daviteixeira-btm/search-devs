import { useRecoilValue } from "recoil";

import { repositoriesSelector } from "../services/client";


const ReposPainel = () => {

    const repositories = useRecoilValue(repositoriesSelector);

    if(!repositories){
        return <h1>Repositórios não encontrados...</h1>
    }

    console.log(repositories)

    return (
        <section
            style={{ 
                width: '56.5rem', 
                border: '1px solid black', 
                height: '50rem',
                background: '#fff',
                borderRadius: '4px'
            }}
        >
            <div style={{ border: '1px solid black', height: '12.3rem', margin: '24px' }}>
                {repositories.map((repo: any) => (
                    <li key={repo.id}>{repo.name}</li>
                ))}
            </div>
        </section>
    );
};

export default ReposPainel;