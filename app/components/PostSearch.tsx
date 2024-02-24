'use client'

import { FormEventHandler, useState } from "react"
// import { usePosts } from "../store"
import useSWR from "swr"
import { getPostsBySearch } from "../services/getPosts"


const PostSearch = () => {
    const [search, setSearch] = useState('')
    const {mutate} = useSWR('posts',) 
    // const getPostsBySearch = usePosts(state => state.getPostsBySearch)

    const handleSubmit:FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        const posts = await getPostsBySearch(search)
        mutate(posts)
    }
    
    return(
        <form onSubmit={handleSubmit} >
            <input 
                type='search'
                placeholder="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    )
}

export { PostSearch }