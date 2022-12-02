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
      id
      role
    }
  }
`;

export const ADD_DISCOUNT = gql`
  mutation addDiscount($discount: CreateDiscountDto!) {
    addDiscount(dto: $discount) {
      id
      discountName
      procent
      condition
    }
  }
`;

export const DELETE_DISCOUNT = gql`
  mutation deleteDiscount($id: Int!) {
    deleteDiscount(id: $id) {
      id
    }
  }
`;

export const UPDATE_DISCOUNT = gql`
  mutation updateDiscount($dto: CreateDiscountDto!, $id: Int!) {
    updateDiscount(dto: $dto, id: $id) {
      id
      condition
      procent
      discountName
    }
  }
`;
