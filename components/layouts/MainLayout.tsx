import Head from "next/head";
import { Navbar } from "../Navbar";
import { FC } from "react";

import styles from "./MainLayout.module.css";
interface Props {
  children: any;
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Fernando</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>{children}</main>
    </div>
  );
};
