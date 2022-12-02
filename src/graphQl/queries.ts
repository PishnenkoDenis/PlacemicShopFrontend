import { gql } from '@apollo/client';

export const POST_USER = gql`
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

export const GET_DISCOUNTS = gql`
  query getDiscounts($userId: Int!) {
    getDiscounts(userId: $userId) {
      id
      discountName
      procent
      condition
    }
  }
`;
