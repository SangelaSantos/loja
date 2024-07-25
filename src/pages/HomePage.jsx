import React, { useState } from "react";
import { Flex, Radio } from "antd";
import { FaShoppingCart } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { TbCategoryPlus } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { GiAmpleDress } from "react-icons/gi";
import { PiPantsFill } from "react-icons/pi";
import HomeInside from "../components/homeInside";
import FemList from "../components/feminino";
import MascList from "../components/masculino";
import styled from "styled-components";
import Cart from "../components/cart";
import Profile from "../components/profile";

const Div = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100px;
  height: 100vh;
  
`;
const HomePage = () => {
  const [value, setValue] = useState(1);

  const onChangeRadio2 = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <>
      <Div>
        <Flex vertical gap="middle">
          <Radio.Group defaultValue="a" >
            <Radio.Button
              value={1}
              checked={value === 1}
              onChange={onChangeRadio2}
              style={{height: "50px" }}
            >
              <MdHome style={{ width: "100px", fontSize: "24px", marginTop: "4px" }}/>
            </Radio.Button>
            <Radio.Button
              value={2}
              checked={value === 2}
              onChange={onChangeRadio2}
              style={{height: "50px"}}
            >
              <TbCategoryPlus style={{ width: "100px", fontSize: "24px", marginTop: "4px" }}/>
            </Radio.Button>
            <Radio.Button
              value={3}
              checked={value === 3}
              onChange={onChangeRadio2}
              style={{height: "50px"}}
            >
              <GiAmpleDress style={{ width: "100px", fontSize: "24px", marginTop: "4px" }}/>
            </Radio.Button>
            <Radio.Button
              value={4}
              checked={value === 4}
              onChange={onChangeRadio2}
              style={{height: "50px"}}
            >
              <PiPantsFill style={{ width: "100px", fontSize: "24px", marginTop: "4px" }}/>
            </Radio.Button>
            <Radio.Button
              value={5}
              checked={value === 5}
              onChange={onChangeRadio2}
              style={{height: "50px"}}
            >
              <FaShoppingCart style={{ width: "100px", fontSize: "24px", marginTop: "4px" }}/>
            </Radio.Button>
            <Radio.Button
              value={6}
              checked={value === 6}
              onChange={onChangeRadio2}
              style={{height: "50px"}}
            >
              <FaUser style={{ width: "100px", fontSize: "24px", marginTop: "4px" }}/>
            </Radio.Button>
          </Radio.Group>
        </Flex>
      </Div>
      {value === 1 ? (
        <HomeInside />
      ) : value === 2 ? (
        <HomeInside/>
      ) : value === 3 ? (
        <FemList />
      ) : value === 4 ? (
        <MascList />
      ) : value === 5 ? (
        <Cart />
      ) : value === 6 ? (
        <Profile />
      ) : null}
    </>
  );
};

export default HomePage;
