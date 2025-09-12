interface BottomIconProps {
  size?: string;
  fill?: string;
}

export default function BottomIcon({ size = '2.4rem', fill = '#222' }: BottomIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.75725 7.00739C2.14777 6.61686 2.78094 6.61686 3.17146 7.00739L11.8929 15.7289L20.6144 7.00739C21.0049 6.61686 21.6381 6.61686 22.0286 7.00739C22.4191 7.39791 22.4191 8.03108 22.0286 8.4216L12.6 17.8502C12.2095 18.2407 11.5763 18.2407 11.1858 17.8502L1.75725 8.4216C1.36672 8.03108 1.36672 7.39791 1.75725 7.00739Z"
        fill={fill}
      />
    </svg>
  );
}
