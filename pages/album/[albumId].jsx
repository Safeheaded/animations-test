import { Box, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { albums } from "../../utils/data";
import { motion } from "framer-motion";

const MotionImage = motion(Image);
const MotionBox = motion(Box);

export default function AlbumPage() {
  const router = useRouter();
  const { albumId } = router.query;
  const album = albums[albumId];
  return (
    <Box>
      {albumId && (
        <Box w='sm'>
          <MotionImage layoutId={`image-${album.id}`} src={album.imageUrl} alt="" />
          <MotionBox layoutId={`box-${album.id}`}>{album.name}</MotionBox>
        </Box>
      )}
    </Box>
  );
}
