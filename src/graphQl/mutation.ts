import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser($user: CreateUserDto!) {
    createUser(dto: $user) {
      id
      fullName
      email
      phone
      address
      role
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($user: LoginViaEmailDto!) {
    loginUser(user: $user) {
      email
      role
    }
  }
`;
