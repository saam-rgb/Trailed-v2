import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { BagCard } from "../bags/BagCard";

export const Recommended = () => {
  const [bags, setBags] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState("All");

  useEffect(() => {
    fetch("bags.json")
      .then((res) => res.json())
      .then((data) => setBags(data));
  }, []);
  console.log(bags);

  //   const filteredBags =
  //     selectedCategories === "All"
  //       ? bags
  //       : bags.filter(
  //           (item) => item.category === selectedCategories.toLocaleLowerCase()
  //         );
  //   console.log(selectedCategories);
  //   console.log(filteredBags);
  return (
    <div className="my-10 md:px-10 px-2">
      <h2 className="text-3xl font-semibold mb-6">Recommended</h2>

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
          {bags.length > 0 &&
            bags.slice(4, 12).map((bag, index) => (
              <SwiperSlide>
                <BagCard key={index} bag={bag} />
              </SwiperSlide>
            ))}
        </div>
      </Swiper>
    </div>
  );
};
