// import React, { Component } from "react"
import { graphql } from "gatsby"
import React from 'react'

// class Homepage extends Component {
//   render() {
//     const data = this.props.data

//     return (
//       <>
//         <div>
//           <h1>Pages</h1>
//           {data.pages.edges.map(({ node }) => (
//             <div key={node.slug}>
//               <Link to={node.slug}>
//                 <h2>{node.title}</h2>
//               </Link>
//               <h3>{node.excerpt}</h3>
//             </div>
//           ))}
//         </div>

//         <h1>Posts</h1>
//         {data.posts.edges.map(({ node }) => (
//           <div key={node.slug}>
//             <Link to={node.slug}>
//               <h2>{node.title}</h2>
//             </Link>
//             <h3>{node.excerpt}</h3>
//           </div>
//         ))}
//       </>
//     )
//   }
// }

// export default Homepage



export default function Index({data: {posts}}) {
  console.log(posts)
  return (
    <div>
      yo home
    </div>
  )
}

export const pageQuery = graphql`
query {
  posts: allWpPost {
	nodes {
	  id
	  uri
	}
  }
}
`