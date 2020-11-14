import Head from "next/head";

function Home({ time }) {
  console.log(time);
  return (
    <div className="bg-indigo-200">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Welcome to Nextjs Tailwind Boilerplate</h1>
        <p>{time}</p>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const time = Date.now();
  return {
    props: {
      time: time,
    },
  };
}

export default Home;
