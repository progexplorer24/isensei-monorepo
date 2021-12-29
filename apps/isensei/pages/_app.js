import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

import "@/css/tailwind.css";
import "@/css/prism.css";
import "@/css/fonts.css";
import siteMetadata from "@/data/siteMetadata";
import Analytics from "@/components/analytics";
import LayoutWrapper from "@/components/LayoutWrapper";
import RSS from "@/components/Rss";
import { ClientReload } from "@/components/ClientReload";

const isDevelopment = process.env.NODE_ENV === "development";
const isSocket = process.env.SOCKET;

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        {isDevelopment && isSocket && <ClientReload />}
        <Analytics />
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
        <RSS />
      </ThemeProvider>
    </SessionProvider>
  );
}
