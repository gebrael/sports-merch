import "@/styles/globals.css";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import { Cairo } from "@next/font/google";

const cairo = Cairo({
  subsets: ["arabic"],
});
export default function App({ Component, pageProps }) {
  return (
    <main className={cairo.className}>
      <Component {...pageProps} />
    </main>
  );
}
