import { Flex } from '@chakra-ui/react'
import Link from 'next/link'

export const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function Grid() {
  return (
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
  )
}
