import CustomersText from "@/components/home/CustomersText";
import Landing from "@/components/home/Landing";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Naš Film</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
      <CustomersText />
    </>
  );
}