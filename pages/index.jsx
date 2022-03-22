import { Wrap, Box, Text, Image, Flex } from '@chakra-ui/react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { albums } from '../utils/data'
import Card from '../components/Card'

export default function Home() {

  const displayAlbums = albums.map(album => <Card {...album} key={album.id} />)

  return (
    <Flex wrap='wrap' w='100%'>
        {displayAlbums}
    </Flex>
  )
}
