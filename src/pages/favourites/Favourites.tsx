import React from 'react';
import { useTypedSelector } from '../../hooks/redux';
import { useActions } from '../../hooks/useActions';

export const Favourites = () => {
    const favourites = useTypedSelector(state => state.github.favourites);
    const { removeFavourite } = useActions()

    const handleClick = (repo: string) => {
        removeFavourite(repo)
    }

    return (
        <div>
            {
                favourites.map((favourite, index) => (
                    <div
                        key={index}
                        onClick={() => handleClick(favourite)}
                    >
                        { favourite }
                    </div>
                ))
            }
        </div>
    );
}