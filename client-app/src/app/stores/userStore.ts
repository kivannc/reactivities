import { makeAutoObservable } from 'mobx';
import agent from '../api/agent';
import { User, UserFormValues } from '../models/user';
import { router } from '../router/Routers';
import { store } from './store';

export default class UserStore {
  user: User | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUser = (user: User | null) => {
    this.user = user;
  };

  get isLoggedIn() {
    return !!this.user;
  }

  get username() {
    return this.user?.displayName;
  }

  login = async (creds: UserFormValues) => {
    try {
      const user = await agent.Account.login(creds);
      store.commonStore.setToken(user.token);
      this.setUser(user);
      router.navigate('/activities');
      store.modalStore.closeModal();
    } catch (error) {
      throw error;
    }
  };

  register = async (creds: UserFormValues) => {
    try {
      const user = await agent.Account.register(creds);
      store.commonStore.setToken(user.token);
      this.setUser(user);
      router.navigate('/activities');
      store.modalStore.closeModal();
    } catch (error) {
      throw error;
    }
  };

  logout = () => {
    store.commonStore.setToken(null);
    this.setUser(null);
    router.navigate('/');
  };

  getUser = async () => {
    try {
      const user = await agent.Account.current();
      this.setUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  setImage = (image: string) => {
    if (this.user) this.user.image = image;
  };

  // get isCurrentUser() {
  //     return this.user?.username === this.user?.displayName;
  // }

  // get isCurrentUserAdmin() {
  //     return this.user?.roles.includes('Admin');
  // }

  // get isCurrentUserModerator() {
  //     return this.user?.roles.includes('Moderator');
  // }
}
