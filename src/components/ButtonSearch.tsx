import { Button } from 'primereact/button'
import { RecoilValueReadOnly, useRecoilState } from 'recoil';
import { ReposProps } from '../types/repos';
import { searchInputState } from '../core/atoms';

type SearchProps = {
    loadUser: (userName: string) => Promise<void>;
    repositoriesSelector: (username: string) => RecoilValueReadOnly<ReposProps[]>;
}

const ButtonSearch = ({ loadUser, repositoriesSelector }: SearchProps) => {

    const [searchInput, ] = useRecoilState(searchInputState);

    return (
        <Button
            onClick={() => {
                loadUser(searchInput)
                repositoriesSelector(searchInput)
            }}
            type="button"
            label="Search"
            style={{ width: '11rem' }}
            className="p-button-raised p-button-help p-p-3"
        />
    )
}

export default ButtonSearch