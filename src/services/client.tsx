import { selector } from 'recoil';
import { UserProps } from '../types/user';
import { searchInputState } from '../core/atoms';

export const fetchUser = async (userName: string) => {

  const userResponse = await fetch(`https://api.github.com/users/${userName}`);

  if (userResponse.status === 404) {
    return 404;
  }

  const data = await userResponse.json();

  const {
    bio,
    name,
    blog,
    email,
    login,
    company,
    location,
    followers,
    following,
    avatar_url,
    twitter_username,
  } = data;

  const UserData: UserProps = {
    bio,
    name,
    blog,
    login,
    email,
    company,
    location,
    followers,
    following,
    avatar_url,
    twitter_username,
  }

  return UserData;
}

export const fetchRepositories = async (userName: string) => {
    const userResponse = await fetch(`https://api.github.com/users/${userName}/repos`);
    const UserData = await userResponse.json();
    return UserData;
}

export const repositoriesSelector = selector({
    key: 'repositoriesSelector',
    get: async ({ get }) => {
      const username = get(searchInputState);
      const repositories = await fetchRepositories(username);

      repositories.sort((a: { stargazers_count: number; }, b: { stargazers_count: number; }) => b.stargazers_count - a.stargazers_count);
      
      return repositories;
    },
});

