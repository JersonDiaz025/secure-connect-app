import { gql } from '@apollo/client';

export const REGISTER_MUTATION = gql`
  mutation Register($data: RegisterInput!) {
    register(data: $data) {
      user {
        id
        displayname
        uuid
      }
      token {
        token
        refresh_token
        token_expires
        refresh_token_expires
        time
        timezone
      }
    }
  }
`;
