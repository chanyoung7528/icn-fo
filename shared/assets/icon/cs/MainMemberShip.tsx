interface MainMemberShipIconProps {
  size?: string;
  fill?: string;
}

export default function MainMemberShipIcon({ size = "2.4rem", fill = "#222" }: MainMemberShipIconProps) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.998 4H25.3314C26.0678 4 26.6647 4.59695 26.6647 5.33333V26.6667C26.6647 27.403 26.0678 28 25.3314 28H15.998V4Z"
      fill="#5CACA7"
      fill-opacity="0.35"
     />
    <path
      d="M5.33154 8V26.6667C5.33154 27.403 5.9285 28 6.66488 28H25.3315C26.0679 28 26.6649 27.403 26.6649 26.6667V5.33333C26.6649 4.59695 26.0679 4 25.3315 4H5.33154"
      stroke="black"
      stroke-width="1.33333"
      stroke-linecap="round"
     />
    <circle cx="15.9982" cy="16.6667" r="4" stroke="black" stroke-width="1.33333"  />
    <path
      d="M10.6655 23.9987C10.6655 23.9987 11.9989 21.332 15.9989 21.332C19.9989 21.332 21.3322 23.9987 21.3322 23.9987"
      stroke="black"
      stroke-width="1.33333"
      stroke-linecap="round"
     />
    <path d="M11.998 8H19.998" stroke="black" stroke-width="1.33333" stroke-linecap="round"  />
  </svg>
  );
}