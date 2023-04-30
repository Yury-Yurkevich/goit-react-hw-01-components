import styled from 'styled-components';

export const UserProfile = styled.div`
  width: 300px;
  margin: 20px auto;
  background-color: #ffffff;
  border-radius: 5px;
`;

export const Description = styled.div`
  text-align: center;
  padding: 42px;
`;

export const Avatar = styled.img`
  display: block;
  margin: 0 auto;
  width: 102px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const UserName = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
`;

const stylesForTagLocation = {
  'margin-bottom': '10px',
  'font-size': '16px',
  color: 'gray',

};

export const UserTag = styled.p(stylesForTagLocation);

export const UserLocation = styled.p(stylesForTagLocation);

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  background-color: #efebebea;
`;

export const StatsItem = styled.li`
  flex-basis: calc(100% / 3);
  padding-top: 20px;
  padding-bottom: 20px;
  border: 1px solid #0000005e;
`;

export const Label = styled.span`
  display: block;
  color: gray;
  font-size: 14px;
  margin-bottom: 5px;
`;

export const Quantity = styled.span`
  display: block;
  font-weight: 800;
  font-size: 16px;
`;