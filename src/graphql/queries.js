import { gql } from '@apollo/client';

export const ALL_TASKS = gql`
query {
  allTasks {
    name
    category
  }
}
`

export const ALL_CATEGORIES = gql`
query {
  allCategories {
    name
  }
}
`


