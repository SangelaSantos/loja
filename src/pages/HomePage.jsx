import React, { useState } from "react";
import { Flex, Radio } from "antd";
import { FaShoppingCart } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { FaBaby } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { GiAmpleDress } from "react-icons/gi";
import { PiPantsFill } from "react-icons/pi";
import HomeInside from "../components/homeInside";
import FemList from "../components/feminino";
import MascList from "../components/masculino";
import styled from "styled-components";
import Cart from "../components/cart";
import Profile from "../components/profile";
import InfantilList from "../components/infantil";
import LogoTelaHome from "../img/logo.png";
const SideBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 130px;
  height: 100%;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: 24px;
  z-index: 1000;
`;

const HomePage = () => {
  const [value, setValue] = useState(1);
  const [hoveredButton, setHoveredButton] = useState(null);

  const onChangeRadio2 = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const handleMouseEnter = (buttonValue) => {
    setHoveredButton(buttonValue);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };
  return (
    <>
      <SideBar>
      <img
            src={LogoTelaHome}
            alt="login"
            style={{
              width: "100px",
              height: "100px",
              marginLeft: "10px"
            }}
          />
        <Flex vertical gap="middle">
          <Radio.Group defaultValue="a" >
            <Radio.Button
              value={1}
              checked={value === 1}
              onChange={onChangeRadio2}
              onMouseEnter={() => handleMouseEnter(1)}
              onMouseLeave={handleMouseLeave}
              style={{
                height: "50px",
                border: 0,
                borderRadius: 0,
                backgroundColor: value === 1 ? "white" : hoveredButton === 1 ? "grey" : "black",
                color: value === 1 || hoveredButton === 1 ? "black" : "white"
              }}
            >
              <MdHome style={{ width: "100px", fontSize: "40px", marginTop: "4px", color: value === 1 ? "black" : hoveredButton === 1 ? "black" : "white"}}/>
            </Radio.Button>
            <Radio.Button
              value={2}
              checked={value === 2}
              onChange={onChangeRadio2}
              onMouseEnter={() => handleMouseEnter(2)}
              onMouseLeave={handleMouseLeave}
              style={{
                height: "50px",
                border: 0,
                borderRadius: 0,
                backgroundColor: value === 2 ? "white" : hoveredButton === 2 ? "grey" : "black",
                color: value === 2 || hoveredButton === 2 ? "black" : "white"
              }}
            >
              <FaBaby style={{ width: "100px", fontSize: "40px", marginTop: "4px", color: value === 2 ? "black" : hoveredButton === 2 ? "black" : "white"}}/>
            </Radio.Button>
            <Radio.Button
              value={3}
              checked={value === 3}
              onChange={onChangeRadio2}
              onMouseEnter={() => handleMouseEnter(3)}
              onMouseLeave={handleMouseLeave}
              style={{
                height: "50px",
                border: 0,
                borderRadius: 0,
                backgroundColor: value === 3 ? "white" : hoveredButton === 3 ? "grey" : "black",
                color: value === 3 || hoveredButton === 3 ? "black" : "white"
              }}
            >
              <GiAmpleDress style={{ width: "100px", fontSize: "40px", marginTop: "4px", color: value === 3 ? "black" : hoveredButton === 3 ? "black" : "white"}}/>
            </Radio.Button>
            <Radio.Button
              value={4}
              checked={value === 4}
              onChange={onChangeRadio2}
              onMouseEnter={() => handleMouseEnter(4)}
              onMouseLeave={handleMouseLeave}
              style={{
                height: "50px",
                border: 0,
                borderRadius: 0,
                backgroundColor: value === 4 ? "white" : hoveredButton === 4 ? "grey" : "black",
                color: value === 4 || hoveredButton === 4 ? "black" : "white"
              }}
            >
              <PiPantsFill style={{ width: "100px", fontSize: "40px", marginTop: "4px", color: value === 4 ? "black" : hoveredButton === 4 ? "black" : "white"}}/>
            </Radio.Button>
            <Radio.Button
              value={5}
              checked={value === 5}
              onChange={onChangeRadio2}
              onMouseEnter={() => handleMouseEnter(5)}
              onMouseLeave={handleMouseLeave}
              style={{
                height: "50px",
                border: 0,
                borderRadius: 0,
                backgroundColor: value === 5 ? "white" : hoveredButton === 5 ? "grey" : "black",
                color: value === 5 || hoveredButton === 5 ? "black" : "white"
              }}
            >
              <FaShoppingCart style={{ width: "100px", fontSize: "40px", marginTop: "4px", color: value === 5 ? "black" : hoveredButton === 5 ? "black" : "white"}}/>
            </Radio.Button>
            <Radio.Button
              value={6}
              checked={value === 6}
              onChange={onChangeRadio2}
              onMouseEnter={() => handleMouseEnter(6)}
              onMouseLeave={handleMouseLeave}
              style={{
                height: "50px",
                border: 0,
                borderRadius: 0,
                backgroundColor: value === 6 ? "white" : hoveredButton === 6 ? "grey" : "black",
                color: value === 6 || hoveredButton === 6 ? "black" : "white"
              }}
            >
              <FaUser style={{ width: "100px", fontSize: "40px", marginTop: "4px", color: value === 6 ? "black" : hoveredButton === 6 ? "black" : "white"}}/>
            </Radio.Button>
          </Radio.Group>
        </Flex>
      </SideBar>
      {value === 1 ? (
        <HomeInside />
      ) : value === 2 ? (
        <InfantilList/>
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