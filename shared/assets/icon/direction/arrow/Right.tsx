interface RightIconProps {
  size?: string;
  fill?: string;
}

export default function RightIcon({ size = '2.4rem', fill = '#222' }: RightIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.86453 2.7216C7.47401 3.11213 7.47401 3.74529 7.86453 4.13582L15.7289 12.0001L7.86453 19.8645C7.47401 20.255 7.47401 20.8881 7.86453 21.2787C8.25506 21.6692 8.88822 21.6692 9.27874 21.2787L17.8502 12.7072C18.2407 12.3167 18.2407 11.6836 17.8502 11.293L9.27874 2.7216C8.88822 2.33108 8.25506 2.33108 7.86453 2.7216Z"
        fill={fill}
      />
    </svg>
  );
}
