type GoogleMapsProps = {
  src: string;
  loading?: "lazy" | "eager";
  title?: string;
};

function GoogleMaps({
  src,
  loading = "lazy",
  title = "Google Maps",
}: GoogleMapsProps) {
  return (
    <iframe
      className="w-full h-full"
      src={src}
      style={{ border: 0 }}
      loading={loading}
      title={title}
    ></iframe>
  );
}

export default GoogleMaps;
