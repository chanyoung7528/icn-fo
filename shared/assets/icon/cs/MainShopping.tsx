interface MainShoppingIconProps {
  size?: string;
  fill?: string;
}

export default function MainShoppingIcon({ size = "2.4rem", fill = "#222" }: MainShoppingIconProps) {
  return (
    <svg width="32" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.5 10.668H25.6125C26.4297 10.668 27.0546 11.3964 26.9303 12.204L24.6739 26.8707C24.5739 27.5212 24.0142 28.0013 23.3561 28.0013H16.5V10.668Z"
      fill="#5CACA7"
      fill-opacity="0.35"
     />
    <path
      d="M5.8335 14.668L8.28579 26.9295C8.41044 27.5527 8.95766 28.0013 9.59323 28.0013H23.3563C24.0144 28.0013 24.574 27.5212 24.6741 26.8707L26.9305 12.204C27.0548 11.3964 26.4299 10.668 25.6127 10.668H5.8335"
      stroke="black"
      stroke-width="1.33333"
      stroke-linecap="round"
     />
    <path
      d="M12.5 14.6667V8C12.5 8 12.5 8 12.5 8C12.5 8 12.5 4 16.5 4C20.5 4 20.5 8 20.5 8C20.5 8 20.5 8 20.5 8V14.6667"
      stroke="black"
      stroke-width="1.33333"
      stroke-linecap="round"
     />
  </svg>
  );
}