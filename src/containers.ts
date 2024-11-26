import { createContainer, asClass } from 'awilix';
import { scopePerRequest } from 'awilix-express';
import express from 'express';
import { LoginService } from './components/login/login.service';
import { LoginRepository } from './components/login/login.repository';

export default (app: express.Application): void => {
    const container = createContainer({
        injectionMode: 'CLASSIC',
    });

    container.register({
        // Services
        loginService: asClass(LoginService).scoped(),

        // Repositories
        loginRepository: asClass(LoginRepository).scoped(),
    });

    app.use(scopePerRequest(container));
}