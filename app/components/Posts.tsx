"use client"

import Link from "next/link"
import useSWR from "swr"
import { getAllPosts } from "../services/getPosts"
// import { usePosts } from "../store"
// import { shallow } from "zustand/shallow"
// import { useEffect } from "react"

const Posts = () => {
    const {data: posts, isLoading} = useSWR('posts', getAllPosts) //swr сам заботится когда вызывается это функция и какие будут статусы загрузки

    // const [posts, loading, getAllPosts] = usePosts((state) => [
    //     state.posts,
    //     state.loading,
    //     state.getAllPosts,
    // ], shallow) //чтобы не было лишнего ререндера

    // useEffect(() => {
    //     getAllPosts()
    // }, [getAllPosts])

    return(
        isLoading 
            ? (<h3>Loading...</h3>)
            : (<ul>
                {posts.map((post: any) => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>)
    )
}

export { Posts }