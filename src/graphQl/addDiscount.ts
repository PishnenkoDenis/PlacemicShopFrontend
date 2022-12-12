import { gql } from '@apollo/client';

const ADD_TO_DISCOUNT = gql`
  mutation addDiscount($discount: CreateDiscountDto!) {
    addDiscount(dto: $discount) {
      id
      discountName
      percent
      condition
    }
  }
`;

export default ADD_TO_DISCOUNT;
