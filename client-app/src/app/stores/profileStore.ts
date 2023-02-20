import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Profile } from "../models/profile";
import { store } from "./store";

export default class ProfileStore {
  profile: Profile | null = null;
  loaingProfile = false;

  constructor() {
    makeAutoObservable(this);
  }

  get isCurrentUser() {
    if (store.userStore.user && this.profile) {
      return store.userStore.user.username === this.profile.username;
    }
    return false;
  }

  loadProfile = async (username: string) => {
    this.loaingProfile = true;
    try {
      const profile = await agent.Profiles.get(username);
      runInAction(() => {
        this.profile = profile;
        this.loaingProfile = false;
      });
    } catch (error) {
      runInAction(() => {
        this.loaingProfile = false;
      });
    }
  };
}
