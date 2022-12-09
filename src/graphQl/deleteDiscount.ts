import { gql } from '@apollo/client';

const DELETE_DISCOUNT = gql`
  mutation deleteDiscount($id: Int!) {
    deleteDiscount(id: $id) {
      id
    }
  }
`;

export default DELETE_DISCOUNT;
