import { useRouter } from 'next/router'
import Grid from '../components/Grid'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Flex,
} from '@chakra-ui/react'

const Index = () => {
  const { query, push, pathname } = useRouter()

  return (
    <>
      <Modal isOpen={!!query.postId} onClose={() => push('/browse')}>
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
              I am the post {query.postId}; my pathname is: {pathname}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Grid />
    </>
  )
}

export default Index
