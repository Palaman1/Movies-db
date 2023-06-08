import Head from "next/head";

import MovieSearch from "./components/MovieSearch";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Head>
        <title>
          What Movie Is Next?
        </title>
        <meta name="description" content="A simple movie database"></meta>
      </Head>

      <main className="container mx-auto py-10 px-4 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-8 text-white">What Movie Is Next?</h1>
        <MovieSearch />
      </main>
    </div>
  )
}
