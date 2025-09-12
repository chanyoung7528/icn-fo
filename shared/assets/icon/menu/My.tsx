interface MyIconProps {
  size?: string;
  fill?: string;
}

export default function MyIcon({ size = '2.4rem', fill = '#222' }: MyIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.91915 8.10608C9.28759 6.63246 9.5453 5.6406 9.99391 5.02886C10.4828 4.36223 11.3008 4 12 4C13.4477 4 14.5 5.05228 14.5 6.5C14.5 7.92061 13.441 9.10897 11.7575 9.52986C6.62614 10.8127 3 14.3909 3 19V22H21V19C21 17.5888 20.7092 15.978 19.4125 14.3212C18.3962 13.0225 16.8023 11.7476 14.3681 10.5029C15.6338 9.6036 16.5 8.22311 16.5 6.5C16.5 3.94772 14.5523 2 12 2C10.6992 2 9.26723 2.63777 8.38109 3.84614C7.4547 5.1094 7.21241 6.86754 8.08085 8.89392L9.91915 8.10608Z"
        fill={fill}
      />
    </svg>
  );
}
