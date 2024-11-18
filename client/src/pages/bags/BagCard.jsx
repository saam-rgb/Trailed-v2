import React from "react";
import { Link } from "react-router-dom";
import getImgUrl from "../../utils/getImgUrl";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";

export const BagCard = ({ bag }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className=" rounded-lg transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:h-72  sm:justify-center gap-4">
        <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
          <Link to={`/bags/${bag._id}`}>
            <img
              src={`${getImgUrl(bag.coverImage)}`}
              alt=""
              className="w-full h-[250px] bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
            />
          </Link>
        </div>

        <div>
          <Link to={`/bags/${bag._id}`}>
            <h3 className="text-xl font-semibold hover:text-primary mb-3">
              {bag.title}
            </h3>
          </Link>
          <p className="text-gray-600 mb-5">
            {bag.description.length > 80
              ? `${bag.description.slice(0, 80)}...`
              : bag.description}
          </p>
          <p className="font-medium mb-5">
            ${bag.newPrice}{" "}
            <span className="line-through font-normal ml-2">
              ${bag.oldPrice}
            </span>
          </p>
          <button
            className="btn-primary px-6 space-x-1 flex items-center gap-1  "
            onClick={() => handleAddToCart(bag)}>
            <FiShoppingCart className="" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};
