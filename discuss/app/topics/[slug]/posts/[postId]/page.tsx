import PostList from '@/components/PostList';
import { fetchPostsByTopicSlug } from '@/lib/query/post';
import React from 'react'

const ShowSinglePost = async ({params}: {params: {slug: string}}) => {
  const id = (await params).slug;

  const posts = await fetchPostsByTopicSlug(id);

  
  return (
    <div>
      <PostList posts={posts} />
    </div>
  )
}

export default ShowSinglePost