import Head from "next/head";
import Header from "@components/home/header";
import About from "@components/home/about";
import { __ } from "@utils/translate";
import styles from "@components/home/home.module.scss";

type HomeProps = {
  lang?: "ro" | "en";
};

export default function Home(props: HomeProps) {
  const { lang } = props;

  return (
    <>
      <Head>
        <title>{__("Coltisor Victor - Web Developer", lang)}</title>
        <meta
          name="description"
          content={__("Welcome to my personal website", lang)}
        />
      </Head>

      <main className={"overflow-x-hidden " + styles.main}>
        <Header lang={lang} />
        <About lang={lang} />
      </main>
    </>
  );
}
