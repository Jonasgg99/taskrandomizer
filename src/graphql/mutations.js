import { gql } from '@apollo/client';

export const CREATE_TASK = gql`
mutation createTask($name: String!, $category: String) {
  addTask(
    name: $name,
    category: $category
  ) {
    name
    category
  }
}`