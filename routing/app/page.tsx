import Image from "next/image";
import HomeImage from "@/public/photo-1774333406492-2806c117fe59.avif";

const Home = () => {
  return (
    <div className="">
      <div className="text-8xl font-bold text-center mt-5">Home</div>
      <Image
        className="mx-auto mt-10"
        width={400}
        height={400}
        src={HomeImage}
        alt="home image"
      />
    </div>
  );
};

export default Home;
