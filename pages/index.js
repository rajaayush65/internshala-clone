import Head from "next/head";
import Header from "../components/Header";
import MainPage from "../components/MainPage";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Internshala Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="">
        <MainPage />
      </main>
    </div>
  );
}
