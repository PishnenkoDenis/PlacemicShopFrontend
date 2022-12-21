import { gql } from '@apollo/client';

const LOGIN_USER = gql`
  mutation loginUser($user: LoginViaEmailDto!) {
    loginUser(user: $user) {
      id
      role
    }
  }
`;

export default LOGIN_USER;
