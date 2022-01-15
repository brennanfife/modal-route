import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { data } from '../'
import {
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Box,
} from '@chakra-ui/react'
import SEO from '../../components/SEO'
import Link from 'next/link'

export default function BrowsePage({ world }) {
  const { prefetch, push, pathname } = useRouter()

  useEffect(() => {
    prefetch('/')
  }, [])

  return (
    <>
      <SEO title={world} />
      <Flex direction="column">
        <div
          style={{
            display: 'inline-grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridGap: '10px',
            gridAutoRows: 'minmax(100px, auto)',
          }}
        >
          {data.map((id, index) => (
            <Link key={index} href="/browse/[world]" as={`/browse/${id}`}>
              <Flex
                w="150px"
                h="150px"
                bgColor="lightblue"
                as="a"
                border="black solid 1px"
                alignItems="center"
                justifyContent="center"
              >
                {id}
              </Flex>
            </Link>
          ))}
        </div>
      </Flex>
      <Modal isOpen={true} onClose={() => push('/')}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              w="100%"
              h="100%"
              bgColor="darkcyan"
              alignItems="center"
              justifyContent="center"
            >
              I am the world {world}; my pathname is: {pathname}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export function getStaticProps({ params: { world } }) {
  return { props: { world: world } }
}

export function getStaticPaths() {
  return {
    paths: data.map((world) => ({
      params: { world: world.toString() },
    })),
    fallback: false,
  }
}
