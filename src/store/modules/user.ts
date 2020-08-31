import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'
import { getToken } from '@/utils/cookies'
import store from '@/store'
export interface IUserState {
  token: string;
  name: string;
  avatar: string;
  introduction: string;
  roles: string[];
  email: string;
}

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements IUserState {
  public token = getToken() || ''
  public name = ''
  public avatar = 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
  public introduction = ''
  public roles: string[] = ['admin']
  public email = ''
}

export const UserModule = getModule(User)
