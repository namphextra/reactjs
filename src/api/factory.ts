import AuthRepository from './auth/repository';

interface Repositories {
  [key: string]: any
}
const repositories: Repositories = {
  auth: AuthRepository,
};

export default {
  get: (name: string) => repositories[name],
};
