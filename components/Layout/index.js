import React from "react"
import Styled, { ThemeProvider } from "styled-components"
import Navigation from '@/components/Nav'
// import { Normalize } from "styled-normalize"

// import Seo from "@components/SiteSEO"
import { myTheme, Fonts } from "@/styles"

const MyMain = Styled.div`
  transition: margin-right .5s;
`

  // background-color: ${({theme}) => theme.backgroundPrimary};
const PageBase = Styled.div`
  background-color: ${({theme}) => theme.white};
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
