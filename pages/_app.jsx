import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../theme/theme";
import { AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </AnimateSharedLayout>
  );
}

export default MyApp;
