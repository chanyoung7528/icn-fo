interface TopIconProps {
  size?: string;
  fill?: string;
}

export default function TopIcon({ size = '2.4rem', fill = '#222' }: TopIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.86418 16.1357C2.25471 16.5262 2.88787 16.5262 3.2784 16.1357L11.9999 7.41421L20.7213 16.1357C21.1119 16.5262 21.745 16.5262 22.1355 16.1357C22.5261 15.7452 22.5261 15.112 22.1355 14.7215L12.707 5.29289C12.3164 4.90237 11.6833 4.90237 11.2928 5.29289L1.86418 14.7215C1.47366 15.112 1.47366 15.7452 1.86418 16.1357Z"
        fill={fill}
      />
    </svg>
  );
}
