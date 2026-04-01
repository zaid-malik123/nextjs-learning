const page = async ({ params }: { params: Promise<{ id: string }> }) => {

  const resolvedParams = await params;

  console.log(resolvedParams.id);

  return (
    <div className="text-8xl font-bold text-center mt-5">Post ID: {resolvedParams.id}</div>
  );
};

export default page;