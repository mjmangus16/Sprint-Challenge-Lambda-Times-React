import React from "react";
import styled from "styled-components";

const Topbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`;

const ContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const LeftSpan = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;

const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const CenterSpan = styled.span`
  cursor: pointer;
  margin-right: 5%;

  &&:hover {
    text-decoration: underline;
  }

  &&:last-child {
    margin-right: 0;
  }
`;

const ContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;

const RightSpan = styled.span`
  cursor: pointer;
`;

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <Topbar>
      <Container>
        <ContainerLeft>
          <LeftSpan>TOPICS</LeftSpan>
          <LeftSpan>SEARCH</LeftSpan>
        </ContainerLeft>
        <ContainerCenter>
          <CenterSpan>GENERAL</CenterSpan>
          <CenterSpan>BROWNBAG</CenterSpan>
          <CenterSpan>RANDOM</CenterSpan>
          <CenterSpan>MUSIC</CenterSpan>
          <CenterSpan>ANNOUNCEMENTS</CenterSpan>
        </ContainerCenter>
        <ContainerRight>
          <RightSpan>LOG IN</RightSpan>
        </ContainerRight>
      </Container>
    </Topbar>
  );
};

export default TopBar;
