import Layout from "@/components/Layout";
import "@fontsource/roboto-condensed/300.css";
import "@fontsource/roboto-condensed/400.css";
import "@fontsource/roboto-condensed/700.css";
// Supports weights 100-800
import "@fontsource-variable/sora";

import "@/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import Transition from "@/subComponents/Transition";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}
