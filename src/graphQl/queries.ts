import { gql } from '@apollo/client';

const POST_USER = gql`
  query {
    postUsers {
      id
      fullName
      email
      birthday
      phone
      avatar
      role
      address
    }
  }
`;

export default POST_USER;
