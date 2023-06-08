interface MovieCardProps {
  title: string;
  overview: string;
  posterPath: string;
  original_language: string;
  release_date: string;
  runtime: string;
  vote_average: string;
}

const MovieCard = ({ title, overview, posterPath, original_language, release_date, runtime, vote_average }: MovieCardProps) => {
  const imageURL = posterPath ? 
  `https://image.tmdb.org/t/p/w500${posterPath}`
    : 'https://github.com/Palaman1/qr_next/blob/main/public/not.png?raw=true';
  return (
    <div className="bg-white rounded shadow p-4 flex flex-col justify-between">
      <>
        <img 
          className="w-[300px] object-cover h-64 rounded shadow"
          src={imageURL}
          width={700}
          height={700} 
          alt="Movie poster"
        />
      </>
      <>
        <h2 className="text-2xl text-black font-bold mb-2">{title}</h2>
        <p className="text-sm text-gray-500">{overview.substring(0,158)}</p>
        <br />
        <p className="text-sm text-black">Original language: {original_language}</p>
        <p className="text-sm text-black">{release_date}</p>
        <p>{runtime}</p>
        <p className="text-sm text-black">Average: <span className="text-lg text-[#824a4a]">{vote_average}/10</span></p>
      </>
    </div>
  )
}

export default MovieCard
