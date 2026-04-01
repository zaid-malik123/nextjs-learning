const page = async ({ params }: { params: Promise<{ slug: string[] }> }) => {

  const { slug } = await params;


  return (
    <div className="text-2xl mx-auto mt-5">
      Slug: {slug.join(" / ")}
    </div>
  );
};

export default page;