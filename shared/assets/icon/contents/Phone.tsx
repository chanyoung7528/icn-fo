interface PhoneIconProps {
  size?: string;
  fill?: string;
}

export default function PhoneIcon({ size = '2.4rem', fill = '#222' }: PhoneIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4C5 2.89543 5.89543 2 7 2H17C18.1046 2 19 2.89543 19 4V15.5C19 16.0523 18.5523 16.5 18 16.5C17.4477 16.5 17 16.0523 17 15.5L17 4L7 4V20H17V19C17 18.4477 17.4477 18 18 18C18.5523 18 19 18.4477 19 19V20C19 21.1046 18.1046 22 17 22H7C5.89543 22 5 21.1046 5 20V4ZM13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18ZM11 4.5C10.7239 4.5 10.5 4.72386 10.5 5C10.5 5.27614 10.7239 5.5 11 5.5H13C13.2761 5.5 13.5 5.27614 13.5 5C13.5 4.72386 13.2761 4.5 13 4.5H11Z"
        fill={fill}
      />
    </svg>
  );
}
