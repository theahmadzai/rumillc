import { graphql, useStaticQuery } from 'gatsby'

export default function useProducts() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProduct {
        nodes {
          title
          slug
          image {
            title
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: TRACED_SVG
              height: 293
              width: 293
              formats: [AUTO, WEBP]
            )
          }
          status
          description {
            raw
          }
          category {
            title
          }
        }
      }
    }
  `)

  return data.allContentfulProduct.nodes
}
