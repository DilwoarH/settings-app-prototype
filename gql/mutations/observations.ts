import { gql } from "@apollo/client"

export const UPDATE_OBSERVATION = gql`
  mutation UPDATE_OBSERVATION(
    $_set: observation_set_input
    $where: observation_bool_exp!
  ) {
    update_observation(where: $where, _set: $_set) {
      returning {
        id
        deleted_at
        deleted_by
        published_at
      }
    }
  }
`
