interface MovieCardProps {
  title: string;
  overview: string;
  posterPath: string;
}

const MovieCard = ({title, overview, posterPath}: MovieCardProps) => {
  const imageURL = posterPath ? 
  `https://image.tmdb.org/t/p/w500${posterPath}`
  : '/no-image-available.png';
  return (
    <div className="bg-white rounded shadow p-4">
      <img className="w-full h-64 rounded shadow p-4" src={imageURL} alt="Movie poster"/>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-sm text-gray-500">{overview.substring(0,150)}</p>
    </div>
  )
}

export default MovieCard
