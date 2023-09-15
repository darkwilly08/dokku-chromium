import { Roles } from '../../enums/Roles';
import { UserDto } from '../../models/dtos/req/UserDto';
import { User } from '../../models/entities/User';

import { toDto as sellerToDto } from './sellerTransform';

const toEntity = (user: UserDto, hashedPassword?: string): Partial<User> => {
  // TODO: validate mandatory fields

  return {
    id: user.id || null,
    username: user.username,
    password: hashedPassword || user.password,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    roles: [Roles.ANONYMOUS], // TODO: make this dynamic
    seller: null,
    passwordExpired: false,
  };
};

const toDto = (user: User): UserDto => {
  const { id } = user;

  if (!id) {
    throw new Error('User id is missing');
  }

  return {
    id,
    username: user.username,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    seller: user.seller ? sellerToDto(user.seller) : null,
  };
};

export { toEntity, toDto };
