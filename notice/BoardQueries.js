import { gql } from "@apollo/client";

export const GET_NOTICEBOARD_DETAIL = gql`
  query getNoticeBoardDetail($id: String!) {
    getNoticeBoardDetail(id: $id) {
      _id
      title
      createdAt
      description
      hit
    }
  }
`;

export const GET_NOTICEBOARD_NEXT_ID = gql`
  query getNoticeBoardNextId($id: String!) {
    getNoticeBoardNextId(id: $id) {
      _id
    }
  }
`;

export const GET_NOTICEBOARD_BEFORE_ID = gql`
  query getNoticeBoardBeforeId($id: String!) {
    getNoticeBoardBeforeId(id: $id) {
      _id
    }
  }
`;
