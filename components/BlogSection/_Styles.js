import Styled from 'styled-components'
import { BREAKPOINTS } from '@/config'

export const BlogPreviewWrapper = Styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
  margin: 1em;
  ${BREAKPOINTS.tablet_portrait.down} {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
`

export const BlogPreviewCard = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: ${({theme}) => theme.colorPrimary};
  padding: 1em;
`
