import { gql } from '@apollo/client';

const ADD_SHOP_SETTINGS = gql`
  mutation createShop($dto: CreateShopDto!) {
    createShop(dto: $dto) {
      id
      title
      description
      telephone
      email
      address
      legal_entity
      inn
      kpp
      legal_address
      bank
      bik
      check_account
      corp_account
      user_id
      logo
      wallpaper
    }
  }
`;

export default ADD_SHOP_SETTINGS;
