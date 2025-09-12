interface EnterIconProps {
  size?: string;
  fill?: string;
}

export default function EnterIcon({ size = '2.4rem', fill = '#222' }: EnterIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 7C8.55228 7 9 7.44772 9 8V15H16C16.5523 15 17 15.4477 17 16C17 16.5523 16.5523 17 16 17H8C7.44772 17 7 16.5523 7 16V8C7 7.44772 7.44772 7 8 7Z"
        fill={fill}
      />
    </svg>
  );
}
