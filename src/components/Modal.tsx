import {
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function ModalComponent({ world }) {
  const { push, pathname } = useRouter()

  return (
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
  )
}
