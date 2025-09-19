interface CheckIconProps {
  size?: string;
  fill?: string;
  type?: 'regular' | 'bold';
}

export default function CheckIcon({ size = '2.4rem', fill = '#000', type = 'regular' }: CheckIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.0959 3.54099C22.5072 3.90961 22.5417 4.54183 22.1731 4.95309L10.6493 17.8102C10.2835 18.2183 9.65747 18.256 9.2454 17.8948L1.9121 11.4662C1.4968 11.1021 1.45527 10.4703 1.81933 10.055C2.1834 9.63973 2.8152 9.59819 3.2305 9.96226L9.82006 15.7389L20.6838 3.61821C21.0524 3.20695 21.6846 3.17237 22.0959 3.54099Z"
        fill={fill}
      />
    </svg>
  );
}
