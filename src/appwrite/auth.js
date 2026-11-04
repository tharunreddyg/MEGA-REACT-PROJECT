import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf.js";
export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      // cspell:ignore appwrite
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.projectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    const response = await this.account.create(ID.unique(), email, password, name);
    if (response) {
      return this.login({ email, password });
    }
    return response;
  }

  async login({ email, password }) {
    return await this.account.createEmailPasswordSession(email, password);
  }

  async getCurrentUser() {
    return await this.account.get();
  }

  async logout() {
    return await this.account.deleteSessions();
  }
}

const authservice = new AuthService();

export default authservice;