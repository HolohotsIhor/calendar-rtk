import React, { useEffect, useState } from 'react';
import { useSearchUsersQuery } from '../../store/github/indexApi';
import { useDebounce } from '../../hooks/useDebounce';
import { useActions } from '../../hooks/useActions';

export const SearchForm = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const debounced = useDebounce(searchValue)
    const { addUsers } = useActions()
    const { data} = useSearchUsersQuery(debounced, {skip: debounced.length < 3}) // Query if langth > 3

    useEffect(() => {
        if (data) addUsers(data)
    }, [data, addUsers])

    return (
        <div
            className='ant-form-item-control-input-content'
        >
            <input
                type="text"
                className='ant-input css-dev-only-do-not-override-1uweeqc ant-input-outlined login-form__input'
                placeholder='Repo name'
                value={searchValue}
                onChange={event => setSearchValue(event.target.value)}
            />
        </div>
    );
}