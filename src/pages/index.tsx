import { useRouter } from 'next/router'
import Link from 'next/link'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Flex,
} from '@chakra-ui/react'

export const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function Index() {
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
    </>
  )
}
