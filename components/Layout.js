import Head from "next/head";
import Link from "next/link";

const Layout = ({ children, title = "Crypto Tracker" }) => {
  return (
    <div className="layout">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="header">
        <Link href="/" pasHref>
          <a>{title}</a>
        </Link>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
