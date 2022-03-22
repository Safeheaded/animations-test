import { Wrap, Box, Text, Image, Link } from "@chakra-ui/react";
import NLink from "next/link";
import { motion } from "framer-motion";

const MotionImage = motion(Image);
const MotionBox = motion(Box);

const Card = ({ imageUrl, name, id, releaseDate }) => {
  return (
    <Link as={NLink} href={`/album/${id}`}>
      <Box m="1em" borderRadius="lg" w="xs" borderWidth="1px">
        <MotionImage layoutId={`image-${id}`} alt="" src={imageUrl} />
        <MotionBox
          layoutId={`box-${id}`}
          mt="4"
          fontWeight="semibold"
          fontSize="25px"
          as="h1"
          lineHeight="tight"
          isTruncated
        >
          {name}
        </MotionBox>
        <Box
          mt="4"
          fontWeight="semibold"
          as="h2"
          lineHeight="tight"
          isTruncated
        >
          {releaseDate}
        </Box>
      </Box>
    </Link>
  );
};

export default Card;
