interface PlusIconProps {
  size?: string;
  fill?: string;
}

export default function PlusIcon({ size = '2.4rem', fill = '#222' }: PlusIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1.57144C11.4477 1.57144 11 2.01915 11 2.57144L11 11L2.57143 11C2.01914 11 1.57143 11.4477 1.57143 12C1.57143 12.5523 2.01914 13 2.57143 13L11 13L11 21.4286C11 21.9809 11.4477 22.4286 12 22.4286C12.5523 22.4286 13 21.9809 13 21.4286L13 13L21.4285 13C21.9808 13 22.4285 12.5523 22.4285 12C22.4285 11.4478 21.9808 11 21.4285 11L13 11L13 2.57144C13 2.01916 12.5523 1.57144 12 1.57144Z"
        fill={fill}
      />
    </svg>
  );
}
