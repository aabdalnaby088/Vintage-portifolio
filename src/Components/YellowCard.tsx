

export default function YellowCard({
  imageUrl,
  alt = "Access pass — Abdelrahman",
}: {
  imageUrl: string;
  alt?: string;
}) {
  return (
    <img
      src={imageUrl}
      alt={alt}
      width={490}
      className="block"
    />
  );
}
