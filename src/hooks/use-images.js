import { graphql, useStaticQuery } from 'gatsby'

export default function useImages() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulImage {
        nodes {
          caption
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
        }
      }
    }
  `)

  return data.allContentfulImage.nodes
}
