import TopicShowClient from "@/components/TopicShowClient";

const TopicShowPage = async ({ params }: { params: { slug: string } }) => {
  const id = (await params).slug;


  return <TopicShowClient id={id} />;
};

export default TopicShowPage;