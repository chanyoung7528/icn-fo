interface LoungeIconProps {
  size?: string;
  fill?: string;
}

export default function LoungeIcon({ size = '2.4rem', fill = '#222' }: LoungeIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M35.3083 28.334V13.334H28.6417V23.334H11.975V13.334H5.30835V28.334C5.30835 30.1749 6.80073 31.6673 8.64168 31.6673H31.975C33.816 31.6673 35.3083 30.1749 35.3083 28.334Z"
        stroke={fill}
        stroke-width="1.8"
        stroke-linejoin="round"
      />
      <path
        d="M31.9649 13.3343V11.6676C31.9649 7.98575 28.9802 5.00098 25.2983 5.00098H15.2983C11.6164 5.00098 8.63159 7.98575 8.63159 11.6676V13.3343"
        stroke={fill}
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M10.3083 31.667V35.0003" stroke={fill} stroke-width="1.8" stroke-linecap="round" />
      <path d="M30.3083 31.667V35.0003" stroke={fill} stroke-width="1.8" stroke-linecap="round" />
    </svg>
  );
}
