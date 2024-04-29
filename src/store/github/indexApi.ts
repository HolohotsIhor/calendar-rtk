import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IRepo, IUser, ServerResponse } from '../../models/IGithub';

export const githubApi = createApi({
    reducerPath: 'github/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.github.com/',
    }),
    // 2 types of query: build(GET, POST) and mutation(DELETE, UPDATE)
    endpoints: build => ({
        searchUsers: build.query<IUser[], string>({
            // query: () => `search/users`
            query: (search: string) => ({
                url: `search/users`,
                params: {
                    q: search,
                    per_page: 10
                }
            }),
            // Transform response to array
            transformResponse: (response: ServerResponse<IUser>) => response.items
        }),
        getUserRepos: build.query<IRepo[], string>({
            query: (username: string) => ({
                url: `users/${username}/repos`,
                headers: {
                    Authorization: `airslateToken`,
                },
            })
        }),
    })
})

// Hook useSearchUsersQuery, Ganereted by toolkit.
// Lazy - we make a request when we want, not right away
export const {
    useSearchUsersQuery,
    useLazyGetUserReposQuery } = githubApi;