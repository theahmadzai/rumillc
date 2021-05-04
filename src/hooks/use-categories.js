import { graphql, useStaticQuery } from 'gatsby'

export default function useCategories() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCategory {
        nodes {
          title
          products {
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
    }
  `)

  return data.allContentfulCategory.nodes
}
