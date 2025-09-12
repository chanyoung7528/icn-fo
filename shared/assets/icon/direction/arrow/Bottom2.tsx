interface Bottom2IconProps {
  size?: string;
  fill?: string;
}

export default function Bottom2Icon({ size = '2.4rem', fill = '#222' }: Bottom2IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.40137 14.557C4.7718 14.1474 5.40417 14.1156 5.8138 14.4861L11.0002 19.1762L11.0002 2.57157C11.0002 2.01928 11.4479 1.57157 12.0002 1.57157C12.5525 1.57157 13.0002 2.01928 13.0002 2.57157L13.0002 19.1762L18.1866 14.486C18.5963 14.1156 19.2286 14.1474 19.5991 14.557C19.9695 14.9667 19.9377 15.599 19.5281 15.9695L12.6709 22.1704C12.2901 22.5148 11.7103 22.5148 11.3295 22.1704L4.47235 15.9695C4.06271 15.599 4.03094 14.9667 4.40137 14.557Z"
        fill={fill}
      />
    </svg>
  );
}
