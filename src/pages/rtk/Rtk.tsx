import React, { FC } from 'react';
import { Layout, Row } from 'antd';
import { SearchForm } from '../../components/searchForm/SearchForm';
import './Rtk.styl'
import { useTypedSelector } from '../../hooks/redux';
import { useLazyGetUserReposQuery } from '../../store/github/indexApi';
import { RepoCard } from '../../components/RepoCard/RepoCard';

export const Rtk: FC = () => {
    const { users } = useTypedSelector(state => state.github)
    const [fetchReposs,
        { isLoading: areReposLoading, data: repos}] = useLazyGetUserReposQuery()

    const handleClick = (username: string) => {
        console.log(username)
        fetchReposs(username)
    }

    return (
        <Layout>
            <Row className='container h-full'>
                {users
                    ? (
                        <>
                            <SearchForm/>
                            <ul className='list'>
                                {
                                    users.map((user, index) => (
                                        <li
                                            className='pl-4 pt-1 pb-1 text-gray-500 cursor-pointer hover:text-white hover:bg-gray-600'
                                            key={index}
                                            onClick={() => handleClick(user.login)}>
                                            {user.login}
                                        </li>
                                    ))}
                            </ul>
                            <div className="container">
                                {
                                    areReposLoading
                                        ? <p className='text-center'>Repos loading...</p>
                                        : repos?.map(repo => <RepoCard repo={repo} key={repo.id}/>)
                                }
                            </div>
                        </>
                    )
                    : <p className='font-red-500 text-center'>No users..</p>
                }
            </Row>
        </Layout>
    );
}