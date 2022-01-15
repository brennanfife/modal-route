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
  const router = useRouter()

  return (
    <>
      <Modal isOpen={!!router.query.postId} onClose={() => router.push('/')}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Post id={router.query.postId} pathname={router.pathname} />
          </ModalBody>
        </ModalContent>
      </Modal>
      <Grid />
    </>
  )
}

export default Index
