import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUser, ServerResponse } from '../../models/IGithub';

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
        })
    })
})

// Кастомный хук useSearchUsersQuery, генерируется toolkit. Lazy - делаем запрос, когда захотим, а не сразу
export const { useSearchUsersQuery } = githubApi;