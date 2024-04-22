import { gql } from "@apollo/client"

export const STAFFS = gql`
  query STAFFS($where: staff_bool_exp) {
    staff(where: $where) {
      id
      surname
      forename
      school_id
      is_teacher
      mis_id
      display_name
      school_id
    }
  }
`
