import { selector } from 'recoil';
import { repoState } from '../core/atoms/repos.atom';

export const fetchRepositories = async (userName: string) => {
    const response = await fetch(`https://api.github.com/users/${userName}/repos`);
    const data = await response.json();
    return data;
}

export const repositoriesSelector = selector({
    key: 'repositoriesSelector',
    get: async ({ get }) => {
      const username = 'daviteixeira-btm'; // Substitua pelo nome de usuário desejado
      const repositories = await fetchRepositories(username);
      return repositories;
    },
});

