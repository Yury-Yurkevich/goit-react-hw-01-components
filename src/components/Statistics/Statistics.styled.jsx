import styled from 'styled-components';

export const Statistic = styled.section`
  width: 300px;
  margin: 20px auto;
  background-color: #fefefe;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  padding: 20px;
  text-transform: uppercase;
  text-align: center;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  background-color: #c4ced8;
`;

export const StatsItem = styled.li`
  flex-basis: calc(100% / 4);
  padding: 10px 0 15px 0;
  
`;

export const Label = styled.span`
  display: block;
  font-size: 12px;
  margin-bottom: 5px;
`;

export const Percentage = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 500;
`;