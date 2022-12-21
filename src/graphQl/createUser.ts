import { gql } from '@apollo/client';

const CREATE_USER = gql`
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

export default CREATE_USER;
