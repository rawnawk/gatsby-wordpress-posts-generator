import React from 'react'
import { graphql } from "gatsby"
import parse from 'html-react-parser'
// import PropTypes from "prop-types"

// class Post extends Component {
//   render() {
//     const post = this.props.data.post

//     return (
//       <>
//         <h1>{post.title}</h1>
//         <div>{post.content}</div>
//       </>
//     )
//   }
// }

// Post.propTypes = {
//   data: PropTypes.object.isRequired,
//   edges: PropTypes.array,
// }

// export default Post





export default function Post({data}) {
  console.log(data)
  return (
    <div>
      {parse(data.wpPost.content)}
    </div>
  )
}

export const postQuery = graphql`
  query($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      content
    }
  }
`