import { gql } from '@apollo/client';

const ADD_DISCOUNT = gql`
  mutation addDiscount($discount: CreateDiscountDto!) {
    addDiscount(dto: $discount) {
      id
      discountName
      procent
      condition
    }
  }
`;

export default ADD_DISCOUNT;
