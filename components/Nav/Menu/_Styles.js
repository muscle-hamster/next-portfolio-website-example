import Styled from 'styled-components'
import { BREAKPOINTS } from '@/config/index.js'

export const Hamburger = Styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  margin: 15px;
  flex-direction: column;
  justify-content: space-around;
  background: transparent;
  border: button;
  cursor: pointer;
  z-index: 11;
  div {
    margin: 5px 0;
    width: 1.5rem;
    height: 0.2rem;
    background: ${({ open }) => (open ? "black" : "white")};
    border-radius: 5px;
    transform-origin: 1px;
    position: relative;
    transition: opacity 300ms, transform 300ms;
    &:first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0deg)")};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0deg)")};
    }
  }
`

export const MyMenu = Styled.nav`
  display: none;
  height: 100%;
  width: 100%;
  width: ${({ open }) => (open ? "250px" : "0")};
  margin-right: ${({ open }) => (open ? "250px" : "0")};
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: ${({theme}) => theme.white};
  overflow-x: hidden;
  transition: 0.5s;
  ul {
    width: 100%;
    margin-top: 4rem;
    list-style: none;
    flex-direction: column !important;
    justify-content: center;
    align-items: center;
    li {
      margin-left: 0 !important;
      margin-bottom: 2rem;
      a {
        text-decoration: none;
        font-size: 25px;
        color: ${({theme}) => theme.black};
        transition: 0.3s;
        &:hover {
          color: #f1f1f1;
        }
      }
      button {
        margin-left: 0 !important;
        margin-right: 0 !important;
      }
    }
    ${BREAKPOINTS.laptop.down} {
      display: flex !important;
    }
  }
  ${BREAKPOINTS.laptop.down} {
    display: flex !important;
  }
`

