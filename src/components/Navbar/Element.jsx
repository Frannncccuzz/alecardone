import { Link } from "react-router-dom";

export default function Element({ children, destination, dimension }) {
  const handleClick = (e) => {
    if (destination.startsWith("#")) {
      e.preventDefault();
      const id = destination.replace("#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <li>
      {destination.startsWith("#") ? (
        <a
          href={destination}
          onClick={handleClick}
          className={`inline-block ${dimension ?? ""} transition-transform 
          duration-200 transform hover:scale-110 hover:text-red-800`}
        >
          {children}
        </a>
      ) : (
        <Link
          to={destination}
          className={`inline-block ${dimension ?? ""} transition-transform 
          duration-200 transform hover:scale-110 hover:text-red-800`}
        >
          {children}
        </Link>
      )}
    </li>
  );
}
