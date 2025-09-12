interface HeartIconProps {
  size?: string;
  fill?: string;
}

export default function HeartIcon({
  size = "2.4rem",
  fill = "#222",
}: HeartIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.71 3C4.69453 3 2.25 5.79822 2.25 9.25C2.25 11.2419 2.71429 12.375 4.10714 14.0294C4.74289 14.7845 9.833 19.674 11.4846 21.2566C11.7742 21.5341 12.2283 21.5316 12.5182 21.2542L16.1038 17.8242C17.8364 16.136 19.5371 14.4519 19.8929 14.0294C21.2857 12.375 21.75 11.2419 21.75 9.25C21.75 5.79822 19.3055 3 16.29 3C14.5499 3 12.9998 3.93185 12 5.38339C11.0002 3.93185 9.45015 3 7.71 3Z"
        fill={fill}
      />
    </svg>
  );
}
