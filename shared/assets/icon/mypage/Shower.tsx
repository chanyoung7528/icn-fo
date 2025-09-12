interface ShowerIconProps {
  size?: string;
  fill?: string;
}

export default function ShowerIcon({ size = '2.4rem', fill = '#222' }: ShowerIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M35.0776 21.6667H5.07764V25C5.07764 28.6819 8.0624 31.6667 11.7443 31.6667H28.411C30.2519 31.6667 31.7443 30.1743 31.7443 28.3333V10.8333C31.7443 7.61167 29.1326 5 25.911 5V5C22.6893 5 20.0776 7.61167 20.0776 10.8333V11.6667"
        stroke={fill}
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M10.0795 31.666L8.41284 34.9993" stroke={fill} stroke-width="1.8" stroke-linecap="round" />
      <path d="M30.0776 31.666L31.7443 34.9993" stroke={fill} stroke-width="1.8" stroke-linecap="round" />
      <circle cx="16.7443" cy="14.9997" r="1.66667" fill={fill} />
      <circle cx="23.415" cy="16.6667" r="1.66667" fill={fill} />
    </svg>
  );
}
