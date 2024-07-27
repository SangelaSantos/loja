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

const DivF = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 60px;
  box-shadow: 5px 0 10px rgba(39, 39, 39, 0.5);
  
`;
const Div = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 150px;
  height: 100%;
  box-shadow: 5px 0 10px rgba(39, 39, 39, 0.5);
  
`;
const HomePage = () => {
  const [value, setValue] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onChangeRadio2 = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <>
      <DivF>
        <input
                placeholder="Pesquisa 🔍"
                value={searchTerm}
                onChange={handleSearchChange}
                style={{ marginTop: "20px", borderRadius: "10px", width: "130px", marginBottom: "10px", marginLeft: "200px" }}
              />
      </DivF>
      <Div>
        <Flex vertical gap="middle">
          <Radio.Group defaultValue="a" >
            <Radio.Button
              value={1}
              checked={value === 1}
              onChange={onChangeRadio2}
              style={{height: "60px" }}
            >
              <MdHome style={{ width: "118px", fontSize: "24px", marginTop: "4px" }}/>
            </Radio.Button>
            <Radio.Button
              value={2}
              checked={value === 2}
              onChange={onChangeRadio2}
              style={{height: "60px"}}
            >
              <FaBaby style={{ width: "118px", fontSize: "24px", marginTop: "4px" }}/>
            </Radio.Button>
            <Radio.Button
              value={3}
              checked={value === 3}
              onChange={onChangeRadio2}
              style={{height: "60px"}}
            >
              <GiAmpleDress style={{ width: "118px", fontSize: "24px", marginTop: "4px" }}/>
            </Radio.Button>
            <Radio.Button
              value={4}
              checked={value === 4}
              onChange={onChangeRadio2}
              style={{height: "60px"}}
            >
              <PiPantsFill style={{ width: "118px", fontSize: "24px", marginTop: "4px" }}/>
            </Radio.Button>
            <Radio.Button
              value={5}
              checked={value === 5}
              onChange={onChangeRadio2}
              style={{height: "60px"}}
            >
              <FaShoppingCart style={{ width: "118px", fontSize: "24px", marginTop: "4px" }}/>
            </Radio.Button>
            <Radio.Button
              value={6}
              checked={value === 6}
              onChange={onChangeRadio2}
              style={{height: "60px"}}
            >
              <FaUser style={{ width: "118px", fontSize: "24px", marginTop: "4px" }}/>
            </Radio.Button>
          </Radio.Group>
        </Flex>
      </Div>
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