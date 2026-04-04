import PostList from "@/components/PostList";
import TopicShowClient from "@/components/TopicShowClient";
import { fetchPostsByTopicSlug } from "@/lib/query/post";

const TopicShowPage = async ({ params }: { params: { slug: string } }) => {
  const id = (await params).slug;

  const posts = await fetchPostsByTopicSlug(id);


  return <div>
    <TopicShowClient id={id} />
    <PostList posts={posts}/>
  </div>
  ;
};

export default TopicShowPage;