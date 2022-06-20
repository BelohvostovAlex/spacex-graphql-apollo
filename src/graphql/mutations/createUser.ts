import { gql } from "@apollo/client";

export const CREATE_USER = gql`
mutation insert_users($objects: [users_insert_input!]!) {
  insert_users(objects: $objects) {
    returning {
      id
      name
      rocket
    }
  }
}
`