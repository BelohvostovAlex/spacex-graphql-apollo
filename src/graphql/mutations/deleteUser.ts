import { gql } from "@apollo/client";

export const DELETE_USER = gql`
mutation delete_users($where: users_bool_exp!) {
  delete_users(where: $where) {
    returning {
      name
      id
    }
  }
}
`