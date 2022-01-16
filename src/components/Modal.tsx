import {
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function ModalComponent({ world }) {
  const { push } = useRouter();

  return (
    <Modal isOpen={true} onClose={() => push("/")}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>{world}</ModalHeader>
        <ModalBody>
          <Flex
            w="100%"
            h="100%"
            bgColor="darkcyan"
            alignItems="center"
            justifyContent="center"
          >
            I am the world {world}
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
