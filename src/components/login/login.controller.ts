import { Request, Response } from "express";
import { route, GET } from "awilix-express";
import { LoginService } from "./login.service";

@route("/login")
export class LoginController {
  constructor(private loginService:LoginService) {}

  @route("/login")
  @GET()
  public async login(req: Request, res: Response) {
    try {
      const result = await this.loginService.login();
      res.status(200).json(result);
    } catch (error: any) {
      res.status(401).json({ message: error.message });
    }
  }
}
