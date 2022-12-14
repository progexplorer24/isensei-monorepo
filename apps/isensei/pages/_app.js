import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { UserProvider } from "@supabase/auth-helpers-react";
import { supabaseClient } from "@supabase/auth-helpers-nextjs";

import "@/css/tailwind.css";
import "@/css/prism.css";
import "@/css/fonts.css";
import "@/css/katex.min.css";
import "@code-hike/mdx/dist/index.css";
import siteMetadata from "@/data/siteMetadata";
import LayoutWrapper from "@/components/LayoutWrapper";
import RSS from "@/components/Rss";
import { ClientReload } from "@/components/ClientReload";
import { AuthProvider } from "@/lib/auth/auth";
import { supabase } from "@/lib/auth/client";

const isDevelopment = process.env.NODE_ENV === "development";
const isSocket = process.env.SOCKET;

export default function App({ Component, pageProps: { ...pageProps } }) {
  return (
    <AuthProvider supabase={supabase}>
      <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        {isDevelopment && isSocket && <ClientReload />}

        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
        <RSS />
      </ThemeProvider>
    </AuthProvider>
  );
}
