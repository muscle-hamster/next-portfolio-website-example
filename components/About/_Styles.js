import Styled from 'styled-components'
import { BREAKPOINTS } from '@/config/index.js'

export const AboutSectionStyles = Styled.div`
  font-family: ${({theme}) => theme.fontPrimary};
  font-weight: 100;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 30px;
  grid-gap: 20px;
  ${BREAKPOINTS.tablet_portrait.down} {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2, 1fr);
    padding: 0;
  }
`
  // background-color: #2A2E30;
export const AboutContainerStyles = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-family: ${({theme}) => theme.fontPrimary};
    font-weight: 100;
  }
`

export const AboutDescription = Styled.p`
`

// Can probably change progress-values to a mixin
export const AboutProgress = Styled.div`
  margin: 0 auto;

  .progress {
    background: rgba(0,0,0,0.1);
    border-radius: 100px;
    align-items: center;
    display: flex;
    height: 10px;
    width: 350px;
  }

  .progress-value1 {
    animation: frontend 3s normal forwards;
    border-radius: 100px;
    background: green;
    height: 10px;
  }

  .progress-value2 {
    animation: backend 3s normal forwards;
    border-radius: 100px;
    background: green;
    height: 10px;
  }

  .progress-value3 {
    animation: devops 3s normal forwards;
    border-radius: 100px;
    background: green;
    height: 10px;
  }

  @keyframes frontend {
    0% { width: 0; }
    100% { width: 40%; }
  }

  @keyframes backend {
    0% { width: 0; }
    100% { width: 75%; }
  }

  @keyframes devops {
    0% { width: 0; }
    100% { width: 68%; }
  }
`
