interface Top2IconProps {
  size?: string;
  fill?: string;
}

export default function Top2Icon({ size = '2.4rem', fill = '#222' }: Top2IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.40137 9.44297C4.7718 9.8526 5.40417 9.88438 5.8138 9.51395L11.0002 4.82384L11.0002 21.4284C11.0002 21.9807 11.4479 22.4284 12.0002 22.4284C12.5525 22.4284 13.0002 21.9807 13.0002 21.4284L13.0002 4.82384L18.1866 9.51395C18.5963 9.88438 19.2286 9.85261 19.5991 9.44297C19.9695 9.03334 19.9377 8.40097 19.5281 8.03054L12.6709 1.82959C12.2901 1.48519 11.7103 1.48519 11.3295 1.82959L4.47235 8.03054C4.06271 8.40097 4.03094 9.03334 4.40137 9.44297Z"
        fill={fill}
      />
    </svg>
  );
}
