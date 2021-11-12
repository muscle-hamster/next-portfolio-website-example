import React, { useState } from "react"
import Image from 'next/image'
import Styled from 'styled-components'
import Layout from '@/components/Layout'
import AboutContainer from '@/components/About'
import ExperienceContainer from '@/components/Experience'
import Footer from '@/components/Footer'
import BlogPreview from '@/components/BlogSection'
import { HeaderImage } from './_Styles.js'
import Space from '@/images/mountains.jpg'
import Typed from 'typed.js'

const HomePageTyping = () => {
  const el = React.useRef(null);
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [
        '<h1>Your Name Here\nSoftware Engineer</h1>',
      ],
      typeSpeed: 50,
      backSpeed: 50,
      showCursor: false,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])
  return (
    <div id="typedBox">
    <div>
      <span style={{ whiteSpace: 'pre' }} ref={el} />
    </div>
    </div>
  )
}


export default function HomeLayout() {
  return (
    <div>
      <HeaderImage>
        <HomePageTyping />
        <Image
          alt="Space"
          src={Space}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </HeaderImage>
    <AboutContainer/>
    <ExperienceContainer/>
    <BlogPreview/>
    <Footer/>
    </div>
  )
}

// Photo by <a href="https://unsplash.com/@maxmckinnon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Max McKinnon</a> on <a href="https://unsplash.com/s/photos/universe?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
// https://unsplash.com/photos/c9OCWLka764
