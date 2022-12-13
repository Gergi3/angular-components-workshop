const baseUrl = 'http://localhost:3000/api';

export const requestsUrls = {
  base: baseUrl,
  
  themes: `${baseUrl}/themes`,
  themesId: (id: string) => `${baseUrl}/themes/${id}`,

  posts: `${baseUrl}/posts`,
  postsWithLimit: (limit: string | number) => `${baseUrl}/posts?limit=${limit}`
}
