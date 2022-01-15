import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { data } from '../../components/Grid'
import {
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

export default function BrowsePage({ world }) {
  const { prefetch, push, pathname } = useRouter()

  useEffect(() => {
    prefetch('/')
  }, [])

  return (
    <>
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
