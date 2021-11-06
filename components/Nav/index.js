import React from "react"
import Styled from "styled-components"
import Link from 'next/link'
import { nanoid } from "nanoid"
import { MyNav } from './_Styles.js'

import Menu from "./Menu"
import { ROUTES, BREAKPOINTS } from "@/config"

const Nav = () => (
  <>
    <MyNav>
      <ul>
        {ROUTES.map(({ name, path }) => (
          <li key={nanoid()}>
            <Link href={path}>{name}</Link>
          </li>
        ))}
      </ul>
      <Menu />
    </MyNav>
  </>
)

export default Nav

