import Head from "next/head";

import MovieSearch from "./components/MovieSearch";
import Link from "next/link";
import SvgComponent from "./components/SvgComponent";

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
        <Link href="#" className="text-4xl font-bold mb-8 text-white"><SvgComponent className="w-[100%] h-[45px]" /> </Link>
        <MovieSearch />
      </main>
    </div>
  )
}
