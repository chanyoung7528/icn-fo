interface Left2IconProps {
  size?: string;
  fill?: string;
}

export default function Left2Icon({ size = '2.4rem', fill = '#222' }: Left2IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.44297 4.40137C9.8526 4.7718 9.88438 5.40417 9.51395 5.8138L4.82384 11.0002H21.4284C21.9807 11.0002 22.4284 11.4479 22.4284 12.0002C22.4284 12.5525 21.9807 13.0002 21.4284 13.0002H4.82384L9.51395 18.1866C9.88438 18.5963 9.8526 19.2286 9.44297 19.5991C9.03334 19.9695 8.40097 19.9377 8.03054 19.5281L1.82959 12.6709C1.48519 12.2901 1.48519 11.7103 1.82959 11.3295L8.03054 4.47235C8.40097 4.06272 9.03334 4.03094 9.44297 4.40137Z"
        fill={fill}
      />
    </svg>
  );
}
