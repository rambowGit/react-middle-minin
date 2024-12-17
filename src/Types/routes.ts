export const appRoutes = {
  home: '/',
  categories: '/categories',
  articles: '/articles',
  article: (alias: string): string => `/articles/${alias}`,
};