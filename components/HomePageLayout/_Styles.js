import Styled from 'styled-components'
import { BREAKPOINTS } from '@/config/index.js'

export const HeaderImage = Styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  span {
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    color: white;
    z-index: 1;
  }
  #typedBox {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    align-items: center;
    height: 100%;
    width: 100%;
    color: white;
    position: absolute;
    z-index: 2;
    h1 {
      text-align: center;
      font-size: 5em;
      font-family: ${({theme}) => theme.fontPrimary};
      font-weight: 100;
    }
  }
`
