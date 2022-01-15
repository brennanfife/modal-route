import { useRouter } from 'next/router'
import Post from '../components/Post'
import Grid from '../components/Grid'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
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
            <Post id={query.postId} pathname={pathname} />
          </ModalBody>
        </ModalContent>
      </Modal>
      <Grid />
    </>
  )
}

export default Index
