interface MemberShipIconProps {
  size?: string;
  fill?: string;
}

export default function MemberShipIcon({ size = '2.4rem', fill = '#222' }: MemberShipIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 4C2.44772 4 2 4.44772 2 5V19C2 19.5523 2.44772 20 3 20H21C21.5523 20 22 19.5523 22 19V5C22 4.44772 21.5523 4 21 4H3ZM4 18V6H20V18H4ZM9 9C9 8.44772 8.55228 8 8 8C7.44772 8 7 8.44772 7 9V15C7 15.5523 7.44772 16 8 16C8.55229 16 9 15.5523 9 15V9ZM12 8C12.5523 8 13 8.44772 13 9V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V9C11 8.44772 11.4477 8 12 8ZM17 9C17 8.44772 16.5523 8 16 8C15.4477 8 15 8.44772 15 9V15C15 15.5523 15.4477 16 16 16C16.5523 16 17 15.5523 17 15V9Z"
        fill={fill}
      />
    </svg>
  );
}
