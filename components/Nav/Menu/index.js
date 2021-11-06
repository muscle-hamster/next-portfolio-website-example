import React, { useState } from "react"
import { nanoid } from "nanoid"
import Styled from "styled-components"
import Link from 'next/link'
import { MyMenu, Hamburger } from './_Styles'

import { ROUTES, BREAKPOINTS } from "@/config"

const Menu = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Hamburger open={+open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </Hamburger>
      <MyMenu open={+open}>
        <ul>
          {ROUTES.map(({ name, path }) => (
            <li key={nanoid()}>
              <Link href={path}>{name}</Link>
            </li>
          ))}
        </ul>
      </MyMenu>
    </>
  )
}

export default Menu
