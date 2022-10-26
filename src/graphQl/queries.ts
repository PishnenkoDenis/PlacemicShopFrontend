import { gql } from '@apollo/client';

const FavoritesProduct = gql`
  query Getproduct {
    product {
      id
      breed
    }
  }
`;
