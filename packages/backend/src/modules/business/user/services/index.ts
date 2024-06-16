import { UserService } from './user.service';

export const UserExports = [UserService];

export const UserProviders = [...UserExports];

export { UserService };
