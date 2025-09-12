interface MinusIconProps {
  size?: string;
  fill?: string;
}

export default function MinusIcon({ size = '2.4rem', fill = '#222' }: MinusIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.4286 12.0001C22.4286 12.5524 21.9809 13.0001 21.4286 13.0001L2.57144 13C2.01915 13 1.57144 12.5523 1.57144 12C1.57144 11.4477 2.01915 11 2.57144 11L21.4286 11.0001C21.9809 11.0001 22.4286 11.4478 22.4286 12.0001Z"
        fill={fill}
      />
    </svg>
  );
}
