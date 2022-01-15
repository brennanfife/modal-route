import { Flex } from '@chakra-ui/react'

const Post = ({ id, pathname }) => {
  return (
    <Flex
      w="100%"
      h="100%"
      bgColor="darkcyan"
      alignItems="center"
      justifyContent="center"
    >
      I am the article {id}; my pathname is: {pathname}
    </Flex>
  )
}

export default Post
