import React, { FC, useState } from 'react';
import { Layout, Row } from 'antd';
import { useDebounce } from '../../hooks/useDebounce';
import { useSearchUsersQuery } from '../../store/github/indexApi';

export const Rtk: FC = () => {
    const [search, setSearch] = useState('holohots')
    const debounced = useDebounce(search)
    const { isLoading, isError, data } = useSearchUsersQuery(debounced, {skip: debounced.length < 3}) // Query if langth > 3

    return (
        <Layout>
            <Row className='container h-full'>
                RTK
                {isLoading
                    ? <p className='font-red-500 text-center'>Loading..</p>
                    : data?.map(user => (
                        <li
                            className='pl-4 pt-1 pb-1 text-gray-500 cursor-pointer hover:text-white hover:bg-gray-600'
                            key={user.id}
                            onClick={() => console.log(user.login)}>{user.login}</li>
                    ))
                }
            </Row>
        </Layout>
    );
}