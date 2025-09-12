interface LeftIconProps {
  size?: string;
  fill?: string;
}

export default function LeftIcon({ size = '2.4rem', fill = '#222' }: LeftIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.1355 2.7216C16.526 3.11213 16.526 3.74529 16.1355 4.13582L8.27115 12.0001L16.1355 19.8645C16.526 20.255 16.526 20.8881 16.1355 21.2787C15.7449 21.6692 15.1118 21.6692 14.7213 21.2787L6.14983 12.7072C5.7593 12.3167 5.7593 11.6836 6.14983 11.293L14.7213 2.7216C15.1118 2.33108 15.7449 2.33108 16.1355 2.7216Z"
        fill={fill}
      />
    </svg>
  );
}
