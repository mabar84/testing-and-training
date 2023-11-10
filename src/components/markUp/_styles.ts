import {styled} from 'styled-components';

const NavWrapper = styled.div`
  margin-left: 10px;
  font-size: 20px;

  & > a {
    text-decoration: none;
    color: #282c34;
  }

  & > a.active {
    text-decoration: none;
    color: lightseagreen;
  }

  & > a:hover {
    color: steelblue; /* Цвет ссылки */
  }
`

export const S = {
    NavWrapper
}