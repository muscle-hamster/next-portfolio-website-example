import Head from 'next/head'
import Image from 'next/image'
import Styled from 'styled-components'
import Layout from '@/components/Layout'
import HomeLayout from '@/components/HomePageLayout'


export default function Home() {
  return (
    <Layout>
      <HomeLayout />
    </Layout>
  )
}
