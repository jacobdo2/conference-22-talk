import { CSSProperties } from 'react';
import { getNavigationLinkStyle, navigationLinkContainer, navigationStyle } from './style';

const SECTIONS = [
  {
    name: 'Passenger ferries',
    path: '/division/passenger-ferries'
  },
  {
    name: 'Freight ferries & Logistics',
    path: '/division/freight-ferries-and-logistics'
  },
  {
    name: 'About',
    path: '/about'
  }
];

type SectionNavigationLinkProps = {
  label: string;
  href: string;
  isActive?: boolean;
  style?: CSSProperties;
};

function SectionNavigationLink({
  label,
  href,
  isActive = false,
  style = {}
}: SectionNavigationLinkProps) {
  return (
    <a style={{ ...getNavigationLinkStyle(isActive), ...style }} href={href}>
      {label}
    </a>
  );
}

export function SectionNavigation() {
  const activeLinkName = 'Freight ferries & Logistics';

  return (
    <nav style={navigationStyle}>
      <div style={navigationLinkContainer}>
        {SECTIONS.map(({ name, path }) => (
          <SectionNavigationLink
            label={name}
            href={path}
            isActive={name === activeLinkName}
            key={name}
          />
        ))}
        <SectionNavigationLink
          style={{ marginLeft: 'auto' }}
          label="Sign in / Sign up"
          href="/sign-up"
        />
      </div>
    </nav>
  );
}
