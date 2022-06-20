import { gql } from "@apollo/client";

export const UPDATE_USER = gql`
mutation update_users($_set: users_set_input, $where: users_bool_exp!) {
  update_users(_set: $_set, where: $where) {
    returning {
      id
      name
      rocket
      timestamp
    }
  }
}
`