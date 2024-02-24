import { Posts } from "../components/Posts"
import { PostSearch } from "../components/PostSearch"

// async function getData() {
//     const responce = await fetch('https://jsonplaceholder.typicode.com/posts', {
//         next:{
//             revalidate: 60 // updating the request every 60s
//         }
//     })

//     if (!responce.ok) throw new Error('Unable to fetch posts!((')
//     return responce.json()
// }

// export const metadata: Metadata = {
//     title: 'Blog | Next App',

//   }

export default function Blog() {
    return(
        <>
            <h1>Blog page</h1>
            <PostSearch />
            <Posts />
        </>
    )
}
