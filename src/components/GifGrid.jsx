import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "../components";

export const GifGrid = ({ category }) => {
  const { data, isLoading } = useFetchGifs(category);

  if (isLoading) {
    return <h2>Cargando...</h2>;
  }
  return (
    <div>
      <h3>{category}</h3>
      <div className="card-grid">
        {data.map((item) => (
          <GifItem
            key={item.id}
            title={item.title}
            url={item.images.downsized_medium.url}
          />
        ))}
      </div>
    </div>
  );
};
