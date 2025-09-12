interface MenuIconProps {
  size?: string;
  fill?: string;
}

export default function MenuIcon({ size = "2.4rem", fill = "#222" }: MenuIconProps) {
  return (
    <svg  width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.75 4C2.75 3.44772 3.19772 3 3.75 3H21C21.5523 3 22 3.44772 22 4C22 4.55228 21.5523 5 21 5H3.75C3.19772 5 2.75 4.55228 2.75 4ZM2.75 12C2.75 11.4477 3.19772 11 3.75 11H16.5C17.0523 11 17.5 11.4477 17.5 12C17.5 12.5523 17.0523 13 16.5 13H3.75C3.19772 13 2.75 12.5523 2.75 12ZM2.75 20C2.75 19.4477 3.19772 19 3.75 19H21C21.5523 19 22 19.4477 22 20C22 20.5523 21.5523 21 21 21H3.75C3.19772 21 2.75 20.5523 2.75 20Z"
      fill={fill}
     />
  </svg>
  );
}