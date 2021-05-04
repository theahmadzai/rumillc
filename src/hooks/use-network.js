import { graphql, useStaticQuery } from 'gatsby'

export default function useNetwork() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulNetwork {
        nodes {
          name
          image {
            title
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              height: 293
              width: 293
              formats: [AUTO, WEBP]
            )
          }
          info {
            raw
          }
        }
      }
    }
  `)

  return data.allContentfulNetwork.nodes
}
