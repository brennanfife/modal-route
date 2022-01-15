import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Article from '../../components/Article'
import { data } from '../../components/Grid'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

const ArticlePage = ({ articleId }) => {
  const router = useRouter()

  useEffect(() => {
    router.prefetch('/')
  }, [])

  return (
    <>
      <Modal isOpen={true} onClose={() => router.push('/')}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Article id={articleId} pathname={router.pathname} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ArticlePage

export function getStaticProps({ params: { articleId } }) {
  return { props: { articleId: articleId } }
}

export function getStaticPaths() {
  return {
    paths: data.map((articleId) => ({
      params: { articleId: articleId.toString() },
    })),
    fallback: false,
  }
}
