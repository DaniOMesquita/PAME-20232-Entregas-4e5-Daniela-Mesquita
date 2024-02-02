import (Strategy, PassportStrategy) from "passport-local"
import { Strategy } from "passport-local"
import class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly AuthService: AuthService
    ) {
        super(usernameField: 'email', passportField: 'password');
}
    validate(username: string, password: string) {
        return this.AuthService.validateUser(username, password);
    }
