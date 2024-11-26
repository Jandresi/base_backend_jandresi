import { LoginRepository } from "./login.repository";

export class LoginService {
  constructor(private loginRepository: LoginRepository) {}

  public async login() {
    try {
      const repo = await this.loginRepository.searchUser();
      return {repo, service: 'Llegó hasta el service.ts'};
    } catch (error:any) {
      throw new Error(error.message);
    }
  }
}
