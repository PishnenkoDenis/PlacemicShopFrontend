import { gql } from '@apollo/client';

const GET_DISCOUNTS = gql`
  query getDiscounts($userId: Int!) {
    getDiscounts(userId: $userId) {
      id
      discountName
      procent
      condition
    }
  }
`;

export default GET_DISCOUNTS;
