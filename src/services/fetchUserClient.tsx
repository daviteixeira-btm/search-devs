
export const fetchUserProfile = async (username: string | undefined) => {

    const apiUrl = `https://api.github.com/users/${username}`;

    const response = await fetch(apiUrl)
        .then((data) => {
            if (!data.ok) {
                throw new Error(`Erro ao buscar perfil do usuário: ${data.status} ${data.statusText}`);
            }
            return data.json();

        }).catch((error) => {
            throw new Error(`Erro ao buscar perfil do usuário: ${error.message}`);
        })

    if (response.status === 404) {
        return 404;
    }

    return response;
};

export const fetchUserReposClient = async (username: string | undefined) => {

    const apiUrl = `https://api.github.com/users/${username}/repos`;

    const response = await fetch(apiUrl)
        .then((data) => {
            if (!data.ok) {
                throw new Error(`Erro ao buscar os reposítorios do usuário: ${data.status} ${data.statusText}`);
            }
            return data.json();

        }).catch((error) => {
            throw new Error(`Erro ao buscar os reposítorios do usuário: ${error.message}`);
        })

    if (response.status === 404) {
        return 404;
    }

    response.sort((a: { stargazers_count: number; }, b: { stargazers_count: number; }) => b.stargazers_count - a.stargazers_count);

    return response;
};