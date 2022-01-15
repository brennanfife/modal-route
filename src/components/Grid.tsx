import Link from 'next/link'
import styles from './styles.module.css'
import { Flex } from '@chakra-ui/react'

export const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function PostCardGrid() {
  return (
    <Flex direction="column">
      <h2>With Dynamic Routing, and reloads will keep the modal</h2>
      <div
        style={{
          display: 'inline-grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridGap: '10px',
          gridAutoRows: 'minmax(100px, auto)',
        }}
      >
        {data.map((id, index) => (
          <Link key={index} href="/article/[articleId]" as={`/article/${id}`}>
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
  )
}
