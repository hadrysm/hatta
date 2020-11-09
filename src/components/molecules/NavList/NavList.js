import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

const menuData = ['about', 'articles', 'gallery', 'contact'];

const NavList = ({ isMenuOpen }) => {
  return (
    <Wrapper isMenuOpen={isMenuOpen}>
      <List>
        {menuData.map(item => (
          <ListItem key={item}>
            <Link to={`/${item}`}>{item}</Link>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
};

NavList.propTypes = {
  isMenuOpen: PropTypes.bool,
};

NavList.defaultProps = {
  isMenuOpen: false,
};

export default NavList;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  transform: ${({ isMenuOpen }) => (isMenuOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.2s ease-in-out;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ListItem = styled.li`
  margin-bottom: 5rem;
  font-size: ${({ theme }) => theme.font.size.xs};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
`;
