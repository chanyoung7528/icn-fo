interface ParkingIconProps {
  size?: string;
  fill?: string;
}

export default function ParkingIcon({ size = '2.4rem', fill = '#222' }: ParkingIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M30.0005 14.9987L28.3338 8.33203H11.6672L10.0005 14.9987M30.0005 14.9987L35.0005 18.332V28.332H5.00049V18.332L10.0005 14.9987M30.0005 14.9987L35.0005 13.332M10.0005 14.9987L5.00049 13.332M15.0005 14.9987H25.0005M9.16716 21.6654L13.3338 22.4987M26.6672 22.4987L30.8338 21.6654"
        stroke={fill}
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.32983 28.332H13.3298V31.7936C13.3298 32.6432 12.641 33.332 11.7914 33.332H9.8683C9.01863 33.332 8.32983 32.6432 8.32983 31.7936V28.332Z"
        stroke={fill}
        stroke-width="1.8"
        stroke-linejoin="round"
      />
      <path
        d="M26.6714 28.332H31.6714V31.7936C31.6714 32.6432 30.9826 33.332 30.1329 33.332H28.2098C27.3602 33.332 26.6714 32.6432 26.6714 31.7936V28.332Z"
        stroke={fill}
        stroke-width="1.8"
        stroke-linejoin="round"
      />
    </svg>
  );
}
