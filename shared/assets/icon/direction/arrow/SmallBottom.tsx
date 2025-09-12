interface SmallBottomIconProps {
  size?: string;
  fill?: string;
}

export default function SmallBottomIcon({ size = '2.4rem', fill = '#222' }: SmallBottomIconProps) {
  return (
    <svg width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.35381 4.33549C3.17764 4.55484 2.82236 4.55484 2.64619 4.33549L0.0876206 1.14997C-0.128207 0.881254 0.0793294 0.5 0.441432 0.5L5.55857 0.5C5.92067 0.5 6.12821 0.881255 5.91238 1.14997L3.35381 4.33549Z"
        fill={fill}
      />
    </svg>
  );
}
