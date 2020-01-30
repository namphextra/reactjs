import Repository from '../repository';

const resource = 'auth';

export default {
  createCredential(username: string, password: string) {
    return Repository.post(`${resource}/credentials`, { username, password });
  },
};
