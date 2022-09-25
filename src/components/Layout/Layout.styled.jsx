import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Item = styled(NavLink)`
  width: 40px;
  height: 20px;
  padding: 15px;
  border-radius: 4px;
  background-color: teal;
  text-decoration: none;
  font-weight: 700;
  color: black;
  &.active {
    color: red;
  }
`;

export const NavList = styled('ul')`
  display: flex;
  list-style: none;
  gap: 10px;
  margin: 20px;
  padding: 0;
`;
