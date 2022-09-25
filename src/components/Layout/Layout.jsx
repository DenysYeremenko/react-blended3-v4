import { Outlet } from 'react-router-dom';
import { Item, NavList } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <NavList>
        <li>
          <Item to="/" end>
            Home
          </Item>
        </li>
        <li>
          <Item to="/add">Contact</Item>
        </li>
      </NavList>
      <Outlet />
    </>
  );
};
