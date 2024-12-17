export const appRoutes = {
  home: '/',
  categories: 'categories',
  characters: 'categories/characters',
  character: (id: string) => `categories/characters/:${id}`,
  episodes: 'categories/episodes',
  episode: (id: string) => `categories/episodes/:${id}`,
  locations: 'categories/locations',
  location: (id: string) => `categories/locations/:${id}`,
};