// components/Loader.js
import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #1C1C27;
`;

const Spinner = styled.div`
  position: relative;
  width: 3em;
  height: 3em;
  border-radius: 50%;
  border: 2px solid #444;
  box-shadow: 
    -10px -10px 10px #6359f8, 
    0px -10px 10px 0px #9c32e2, 
    10px -10px 10px #f36896, 
    10px 0 10px #ff0b0b, 
    10px 10px 10px 0px #ff5500, 
    0 10px 10px 0px #ff9500, 
    -10px 10px 10px 0px #ffb700;
  animation: ${spin} 0.7s linear infinite;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1.5em; 
    height: 1.5em; 
    border-radius: 50%;
    background-color: #ccc;
  }
`;

const Text = styled.p`
  margin-top: 3em;
  color: white;
  font-size: 0.9em;
`;

const Loader = () => {
  return (
    <SpinnerWrapper>
      <Spinner />
      <Text>Loading Portfolio...</Text>
      </SpinnerWrapper>
  );
};

export default Loader;
