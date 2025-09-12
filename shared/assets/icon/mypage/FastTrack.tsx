interface FastTrackIconProps {
  size?: string;
  fill?: string;
}

export default function FastTrackIcon({ size = '2.4rem', fill = '#222' }: FastTrackIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="5.76978"
        y="13.333"
        width="30"
        height="21.6667"
        stroke={fill}
        stroke-width="1.8"
        stroke-linejoin="round"
      />
      <path
        d="M14.1052 8.33333C14.1052 6.49239 15.5976 5 17.4386 5H24.1052C25.9462 5 27.4386 6.49238 27.4386 8.33333V13.3333H14.1052V8.33333Z"
        stroke={fill}
        stroke-width="1.8"
      />
      <path d="M29.1012 14.167V35.8337M12.4346 14.167V35.8337" stroke={fill} stroke-width="1.8" />
      <rect
        x="20.7698"
        y="21.667"
        width="8.33333"
        height="5"
        stroke={fill}
        stroke-width="1.8"
        stroke-linejoin="round"
      />
    </svg>
  );
}
