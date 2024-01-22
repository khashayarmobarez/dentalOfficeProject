import { gql } from '@apollo/client'

const GET_DENTAL_OFFICE_PICS = gql`
  query GetDentalOfficePics {
    dentalOfficePics {
      officePic {
        url
        id
      }
    }
  }
`;

const GET_CONFRENCE_PICS = gql`
  query ConfrencePics {
  confrencePics {
    confrencePic {
      url
      id
    }
  }
}
`;

const GET_DOC_VIDEOS = gql`
query doctorVids {
  doctorVideos {
    video {
      url
    }
    thumbnail {
      url
    }
    duration
    id
    videoName
  }
}`

export { GET_DENTAL_OFFICE_PICS, GET_CONFRENCE_PICS, GET_DOC_VIDEOS  };