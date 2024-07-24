import React, { useState } from "react";
import { Flex, Radio } from "antd";
import { FaShoppingCart } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { TbCategoryPlus } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import HomeInside from "../components/homeInside";
import Category from "../components/category";
import Cart from "../components/cart";

const HomePage = () => {
  const [value, setValue] = useState(1);

  const onChangeRadio2 = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <>
      <Flex vertical gap="middle">
        <Radio.Group defaultValue="a">
          <Radio.Button
            value={1}
            checked={value === 1}
            onChange={onChangeRadio2}
          >
            <MdHome />
          </Radio.Button>
          <Radio.Button
            value={2}
            checked={value === 2}
            onChange={onChangeRadio2}
          >
            <TbCategoryPlus />
          </Radio.Button>
          <Radio.Button
            value={3}
            checked={value === 3}
            onChange={onChangeRadio2}
          >
            <FaShoppingCart />
          </Radio.Button>
          <Radio.Button
            value={4}
            checked={value === 4}
            onChange={onChangeRadio2}
          >
            <FaUser />
          </Radio.Button>
        </Radio.Group>
      </Flex>
      {value === 1 ? (
        <HomeInside />
      ) : value === 2 ? (
        <Category />
      ) : value === 3 ? (
        <Cart />
      ) : null}
    </>
  );
};

export default HomePage;
