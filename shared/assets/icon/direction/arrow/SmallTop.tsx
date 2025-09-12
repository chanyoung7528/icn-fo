interface SmallTopIconProps {
  size?: string;
  fill?: string;
}

export default function SmallTopIcon({ size = '2.4rem', fill = '#222' }: SmallTopIconProps) {
  return (
    <svg width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.64619 0.664508C2.82236 0.445164 3.17764 0.445164 3.35381 0.664508L5.91238 3.85003C6.12821 4.11875 5.92067 4.5 5.55857 4.5L0.441432 4.5C0.0793292 4.5 -0.128207 4.11875 0.0876207 3.85003L2.64619 0.664508Z"
        fill={fill}
      />
    </svg>
  );
}
