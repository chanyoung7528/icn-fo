interface FileSearchIconProps {
  size?: string;
  fill?: string;
}

export default function FileSearchIcon({ size = '2.4rem', fill = '#222' }: FileSearchIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.846 16.6442C12.7219 16.6442 11 14.933 11 12.8221C11 10.7112 12.7219 9 14.846 9C16.9701 9 18.692 10.7112 18.692 12.8221C18.692 13.8934 18.2486 14.8617 17.5341 15.5557L21 19"
        stroke={fill}
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <path d="M4 4C6.4 4 13 4 19 4" stroke={fill} stroke-width="1.5" stroke-linecap="round" />
      <path d="M4 10C4.45714 10 6.85714 10 8 10" stroke={fill} stroke-width="1.5" stroke-linecap="round" />
      <path d="M4 16C4.34286 16 6.14286 16 7 16" stroke={fill} stroke-width="1.5" stroke-linecap="round" />
    </svg>
  );
}
