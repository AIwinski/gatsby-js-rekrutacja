import styled from 'styled-components';
import { colors } from '../../styles/variables';
import { Link } from 'gatsby';

export const NavStyled = styled.nav`
  display: flex;
  background: ${colors.white_secondary};
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  font-size: 13px;
  line-height: 13px;
  height: 50px;
  font-weight: bold;
`

export const NavLogo = styled(Link)`
  color: #FA6980;
  padding: 17px;
`

export const NavItem = styled(Link)`
  color: ${colors.black};
  opacity: 0.5;
  text-transform: uppercase;
  padding: 17px 15px;
  text-decoration: none;

  &.active {
    opacity: 1;
  }
`