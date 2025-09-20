export default function Logo({ img, alt }) {
  return (
    <li
      className={"w-20 gap-5 md:w-30 transition duration-50"}
    >
      <img src={img} alt={alt} />
    </li>
  );
}
