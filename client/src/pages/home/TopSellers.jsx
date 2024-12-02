import React, { useEffect, useState } from "react";
import { BagCard } from "../bags/BagCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { useFetchAllBagsQuery } from "../../redux/services/bagApi";

const categories = ["All", "Backpack", "Duffle", "Luggage"];

export const TopSellers = () => {
  // const [bags, setBags] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState("All");

  const { data: bagz = [] } = useFetchAllBagsQuery();

  const bags = bagz?.bag || [];

  // useEffect(() => {
  //   fetch("bags.json")
  //     .then((res) => res.json())
  //     .then((data) => setBags(data));
  // }, []);
  // console.log(bags);

  const filteredBags =
    selectedCategories === "All"
      ? bags
      : bags.filter(
          (item) => item.category === selectedCategories.toLocaleLowerCase()
        );

  return (
    <div className="my-10 md:px-10 px-2">
      <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>
      {/* category filter */}
      <div className="mb-8">
        <select
          name="category"
          id="category"
          className="border bg-[#eaeaea] border-gray-400 rounded-md focus:outline-none px-4 py-2 "
          onChange={(e) => setSelectedCategories(e.target.value)}>
          {categories.map((items, index) => (
            <option value={items} className="py-2 px-8" key={index}>
              {items}
            </option>
          ))}
        </select>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation, Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1100: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper">
        <div>
          {filteredBags &&
            filteredBags.length > 0 &&
            filteredBags.map((bag, index) => (
              <SwiperSlide key={index}>
                <BagCard bag={bag} />
              </SwiperSlide>
            ))}
        </div>
      </Swiper>
    </div>
  );
};
