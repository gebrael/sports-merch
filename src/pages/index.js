import Head from "next/head";
import { Inter } from "next/font/google";
import NavBar from "./../Components/Nav/index";
import MainSlider from "@/Components/Sliders/MainSlider";
import BrandsSlider from "@/Components/Sliders/BrandsSlider";
import Footer from "@/Components/Footer";
import Deals from "./../Components/Deals/index";
import ProductSlider from "./../Components/Sliders/ProductSlider";
import { getSliderImges } from "./api/mainSlider";
import { getMainCategories } from "./api/MainCategories";
import { getPopularBrands } from "./api/PopularBrands";
import { getFeaturedItems } from "./api/FeaturedItems";

export async function getServerSideProps() {
  const sliderImgs = await getSliderImges();
  const mainCategories = await getMainCategories();
  const popularBrands = await getPopularBrands();
  const FeaturedItems = await getFeaturedItems();
  return {
    props: { sliderImgs, mainCategories, popularBrands, FeaturedItems },
  };
}

const inter = Inter({ subsets: ["latin"] });

export default function Home({
  sliderImgs,
  mainCategories,
  popularBrands,
  FeaturedItems,
}) {
  return (
    <>
      <Head>
        <title>Sports Merch</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col overflow-hidden">
        <NavBar />

        <div className="h-[20vh] lg:h-[75vh] overflow-hidden">
          <MainSlider slides={sliderImgs} />
        </div>

        <BrandsSlider slides={mainCategories} />
        <div className="h-[80vh] lg:h-[40vh] overflow-hidden">
          <MainSlider
            hasBanner={true}
            banner={1}
            slides={{
              results: [
                {
                  image: "https://bit.ly/41Yc0GF",
                },
                {
                  image: "https://bit.ly/41Yc0GF",
                },
                {
                  image: "https://bit.ly/41Yc0GF",
                },
              ],
            }}
          />
        </div>
        <BrandsSlider backGround="#2D2F7D" slides={popularBrands} />
        <div className="h-[50vh] overflow-hidden">
          <MainSlider
            hasBanner={true}
            banner={2}
            slides={{
              results: [
                {
                  image: "https://bit.ly/3ZDmGJ5",
                },
                {
                  image: "./sale-banner.png",
                },
                {
                  image: "https://bit.ly/3T6U3Bu",
                },
              ],
            }}
          />
        </div>

        <div className="w-full h-[35vh]">
          <ProductSlider title="featured items" slides={FeaturedItems} />
        </div>

        <div className="w-full h-[35vh]">
          <ProductSlider title="Most Viewed items" slides={FeaturedItems} />
        </div>
        <Deals />
        <Footer />
      </main>
    </>
  );
}
