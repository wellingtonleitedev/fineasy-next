import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStyles from "../styles/global";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  GlobalStyles();

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
