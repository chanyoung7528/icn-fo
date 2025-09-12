interface SectionIconProps {
  size?: string;
  fill?: string;
}

export default function SectionIcon({ size = '2.4rem', fill = '#222' }: SectionIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 42.5C21.3807 42.5 22.5 41.3807 22.5 40V22.5H40C41.3807 22.5 42.5 21.3807 42.5 20C42.5 18.6193 41.3807 17.5 40 17.5H20C18.6193 17.5 17.5 18.6193 17.5 20V40C17.5 41.3807 18.6193 42.5 20 42.5Z"
        fill={fill}
      />
    </svg>
  );
}
