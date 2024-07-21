import React from "react";
import styled from "styled-components";
import { FaHome } from "react-icons/fa";

export const Container = styled.div`
  margin-bottom: 50px;
  font-family: "Montserrat", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  background-color: #f5f5f5;
`;

export const LeftSection = styled.div`
  max-width: 50%;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  color: #ff6347;
  font-size: 18px;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  background-color: #ff6347;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff4500;
  }
`;

export const RightSection = styled.div`
  max-width: 50%;
`;

export const HouseImage = styled.img`
  max-width: 100%;
  height: auto;
`;
