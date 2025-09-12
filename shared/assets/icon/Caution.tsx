interface CautionIconProps {
  size?: string;
  fill?: string;
}

export default function CautionIcon({ size = '2.4rem', fill = '#222' }: CautionIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none">
      <path
        fill={fill}
        d="m3.531 0-.218 15.247H.688L.47 0h3.062Zm-1.53 21.808c-1.094 0-2.031-.906-2-2.03-.031-1.094.906-2 2-2 1.093 0 1.999.906 1.999 2 0 1.124-.906 2.03-2 2.03Z"
      />
    </svg>
  );
}
