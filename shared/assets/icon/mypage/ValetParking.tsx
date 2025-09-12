interface ValetParkingIconProps {
  size?: string;
  fill?: string;
}

export default function ValetParkingIcon({ size = '2.4rem', fill = '#222' }: ValetParkingIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20.5392" cy="19.9998" r="15.3846" stroke={fill} stroke-width="1.8" />
      <path
        d="M15.1657 27.333V12.014H21.1748C24.666 12.014 26.6549 14.151 26.6549 17.1768C26.6549 20.2448 24.6237 22.3395 21.0902 22.3395H18.3395V27.333H15.1657ZM18.3395 19.7793H20.5824C22.4655 19.7793 23.3753 18.7214 23.3753 17.1768C23.3753 15.6533 22.4655 14.6165 20.5824 14.6165H18.3395V19.7793Z"
        fill={fill}
      />
    </svg>
  );
}
