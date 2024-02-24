'use client'

import { Metadata } from "next"
import { useEffect, useState } from "react"
import { Posts } from "../components/Posts"
import { getAllPosts } from "../services/getPosts"
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
    const [posts, setPosts] = useState<any[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAllPosts()
            .then(setPosts)
            .finally(() => setLoading(false))
    })

    return(
        <>
            <h1>Blog page</h1>
            <PostSearch onSearch={setPosts}/>
            {loading 
                ? (<h3>Loading...</h3>) 
                : (<Posts posts={posts} />) 
            }
        </>
    )
}