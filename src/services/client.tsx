import { selector } from 'recoil';

export const fetchRepositories = async (userName: string) => {
    const userResponse = await fetch(`https://api.github.com/users/${userName}/repos`);
    const UserData = await userResponse.json();
    return UserData;
}

export const repositoriesSelector = selector({
    key: 'repositoriesSelector',
    get: async ({ get }) => {
      const username = 'diego3g'; // Substitua pelo nome de usuário desejado
      const repositories = await fetchRepositories(username);
      return repositories;
    },
});

