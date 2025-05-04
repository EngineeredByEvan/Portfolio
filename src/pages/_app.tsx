import "@/styles/globals.css";
import type { AppProps } from "next/app";
import GitHubFloating from '@/components/GitHubFloating';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GitHubFloating />
    </>
  );
}