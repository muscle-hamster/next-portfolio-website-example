import React from "react"
import Styled, { ThemeProvider } from "styled-components"
import Navigation from '@/components/Nav'
// import { Normalize } from "styled-normalize"

// import Seo from "@components/SiteSEO"
import { myTheme, Fonts } from "@/styles"

const MyMain = Styled.div`
  transition: margin-right .5s;
`

const PageBase = Styled.div`
  grid-area: Body;
  background-color: ${({theme}) => theme.backgroundPrimary};
`

const Layout = ({ bgImage, title, description, children, header, subpageHeader }) => {
  return (
    <ThemeProvider theme={myTheme}>
      <Fonts />
        <Navigation />
        <PageBase>
          <MyMain>{children}</MyMain>
        </PageBase>
    </ThemeProvider>
  )
}

export default Layout
