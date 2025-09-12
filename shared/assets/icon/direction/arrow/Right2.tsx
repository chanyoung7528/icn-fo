interface Right2IconProps {
  size?: string;
  fill?: string;
}

export default function Right2Icon({ size = '2.4rem', fill = '#222' }: Right2IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.557 4.40137C14.1474 4.7718 14.1156 5.40417 14.4861 5.8138L19.1762 11.0002H2.57157C2.01928 11.0002 1.57157 11.4479 1.57157 12.0002C1.57157 12.5525 2.01928 13.0002 2.57157 13.0002H19.1762L14.4861 18.1866C14.1156 18.5963 14.1474 19.2286 14.557 19.5991C14.9667 19.9695 15.599 19.9377 15.9695 19.5281L22.1704 12.6709C22.5148 12.2901 22.5148 11.7103 22.1704 11.3295L15.9695 4.47235C15.599 4.06272 14.9667 4.03094 14.557 4.40137Z"
        fill={fill}
      />
    </svg>
  );
}
