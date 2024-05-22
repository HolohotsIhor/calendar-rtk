import React, {useState} from 'react';
import { IRepo } from '../../models/IGithub';
import { useTypedSelector } from '../../hooks/redux';
import { useActions } from '../../hooks/useActions';

export const RepoCard = ({repo}: {repo: IRepo}) => {
    const {favourites} = useTypedSelector(state => state.github)
    const [isFav, setIsFav] = useState(favourites.includes(repo.html_url))
    const { addFavourite, removeFavourite } = useActions()

    const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        addFavourite(repo.html_url)
        setIsFav(true)
    }

    const removeFromFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        removeFavourite(repo.html_url)
        setIsFav(false)
    }

    return (
        <div>
            <a href={repo.html_url} target='_blank' rel='noreferrer'><h2>{repo.full_name}</h2></a>
            <p>Forks: <span className='font-bold mr-2'>{repo.forks}</span></p>
            <p>Watchers: <span className='font-bold mr-2'>{repo.watchers}</span></p>
            <p>{repo?.description}</p>

            {isFav
                ? <button
                    className='mt-2 z-2 py-2 px-2 bg-red-400 text-white rounded hover:shadow-md transition-all'
                    onClick={removeFromFavourite}
                >
                    remove
                </button>
                : <button
                    className='mt-2 mr-2 z-2 py-2 px-2 bg-yellow-400 text-white rounded hover:shadow-md transition-all'
                    onClick={addToFavourite}
                >
                    add
                </button>
            }
        </div>
    );
}