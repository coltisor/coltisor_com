import Head from "next/head";
import Header from "@components/home/header";
import About from "@components/home/about";
import { ___, ____ } from "@utils/translate";

type HomeProps = {
  lang?: "ro" | "en";
};

export default function Home(props: HomeProps) {
  const { lang } = props;

  return (
    <>
      <Head>
        <title>{____("Coltisor Victor - Web Developer")}</title>
        <meta
          name="description"
          content={____("Welcome to my personal website")}
        />
      </Head>

      <main className="overflow-x-hidden">
        <Header lang={lang} />
        <About lang={lang} />
      </main>
    </>
  );
}
