export const GifItem = ({ data }) => {
  const { title, images } = data;
  const {
    downsized_medium: { url },
  } = images;

  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
