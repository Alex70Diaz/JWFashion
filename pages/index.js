import HeroBanner from "@/components/HeroBanner"
import Wrapper from "@/components/Wrapper"
import ProductCard from "@/components/ProductCard"
export default function Home() {

  return <main>
    <HeroBanner />
    <Wrapper>
      {/* heading and paragaph start */}
      <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
        <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
          NUEVA COLECCIÓN

        </div>
        <div className="text-md md:text-xl">
          "¡Es hora de elevar tu estilo con nosotros!"

        </div>
      </div>
      {/* heading and paragaph end */}
      {/* products grid start */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0"> */}
      <div className="grid">
        <ProductCard  />
      </div>
      {/* products grid end */}
    </Wrapper>
  </main>
}
