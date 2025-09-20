export default function SocialButton({ children, href }) {
  return (
    <li>
      <a
        href={href}
        className="text-gray-700 transition hover:opacity-75 dark:text-gray-200">
        {children}
      </a>
    </li>
  );
}
