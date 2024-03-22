import ShareCoin from "./shareCoin";

const page = () => {
  return (
    <section className="p-4 max-w-6xl mx-auto">
      <h1 className="text-xl md:text-3xl font-medium mt-5 mb-5">
        Share your Coins to yours!
      </h1>
      <ShareCoin />
    </section>
  );
};
export default page;
