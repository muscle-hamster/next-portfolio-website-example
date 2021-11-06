import Styled from 'styled-components'
import { BREAKPOINTS } from '@/config/index.js'

export const MyNav = Styled.nav`
  ul {
    list-style-type: none;
    li {
      margin-left: 2rem;
      padding: 10px;
      a {
        font-family: ${({ theme }) => theme.fontFamily};
        color: black;
        text-decoration: none;
        &:hover {
          cursor: pointer;
        }
        ${BREAKPOINTS.tablet_portrait.down} {
          color: white;
        }
      }
    }
    ${BREAKPOINTS.laptop.down} {
      display: none;
    }
  }
  ${BREAKPOINTS.tablet_portrait.down} {
    display: flex;
    padding: 0;
  }
  button {
    ${BREAKPOINTS.tablet_portrait.down} {
      font-family: ${({ theme }) => theme.fontPrimary};
      display: none;
    }
    font-family: ${({ theme }) => theme.fontPrimary};
    font-size: 0.9rem;
    padding: 10px;
    &:hover {
      cursor: pointer;
    }
  }
`
