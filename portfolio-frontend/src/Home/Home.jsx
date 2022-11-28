import React, { useState } from 'react';
import styled from '@emotion/styled';

const HomePageRoot = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const HomePageDashboard = styled.div`
  background-color: ${({ theme }) => theme.colors.dashboardButton};

  padding: 20px;
  width: 30%;
  height: 30%;
  border-radius: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const Home = () => {
  const [showLink, setShowLink] = useState(false);

  const onClickDashboard = () => {
    setShowLink(show => !show);
  };

  return (
    <HomePageRoot>
      <HomePageDashboard onClick={onClickDashboard}>
        {!showLink && <Text>Not Clicked</Text>}
        {showLink && <Text>Show</Text>}
      </HomePageDashboard>
    </HomePageRoot>
  );
};
