const baseUrl = 'http://localhost:3000/api';

const requestsUrls = {
  base: baseUrl,
  themes: `${baseUrl}/themes`,
  themesId: (id: string) => `${baseUrl}/themes/${id}`,
  posts: `${baseUrl}/posts`
}

export {
  requestsUrls
}