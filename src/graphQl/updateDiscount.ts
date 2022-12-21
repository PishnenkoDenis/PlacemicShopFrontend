import { gql } from '@apollo/client';

const UPDATE_DISCOUNT = gql`
  mutation updateDiscount($dto: CreateDiscountDto!, $id: Int!) {
    updateDiscount(dto: $dto, id: $id) {
      id
      condition
      percent
      discountName
    }
  }
`;

export default UPDATE_DISCOUNT;
