import BreadCrumb from "@/components/BreadCrumb";

const ShopPage = () => {
  return (
    <section>
      <div className="bg-[url('/images/slide-1.jpg')] bg-no-repeat bg-cover py-19.5 md:py-28.75">
        <div className="text-center flex flex-col gap-y-4 md:gap-y-6">
          <BreadCrumb />
          <h2 className="text-[40px] leading-11 font-medium text-black md:text-[54px] md:leading-14.5 capitalize">
            Shop Page
          </h2>
          <p className="text-base leading-6.5 font-medium text-gray-900 md:text-[20px] md:leading-8">
            Let’s design the place you always imagined.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShopPage;
