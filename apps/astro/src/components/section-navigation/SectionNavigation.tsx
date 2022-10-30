import { CSSProperties } from 'react';
import theme from '../../theme';

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

const navigationStyle = {
  height: 50,
  display: 'flex',
  alignItems: 'center',
  background: theme.groupBlue.primary,
  padding: 4
};

const navigationLinkContainer = {
  width: '100%',
  maxWidth: 1440,
  heigth: '100%',
  margin: 'auto',
  display: 'flex',
  gap: 4
};

const getNavigationLinkStyle = (isActive: boolean) => {
  const activeStyle = {
    border: `1px solid ${theme.blue.primary}`,
    borderRadius: 2,
    color: theme.blue.primary
  };

  const baseStyle = {
    alignItems: 'center',
    color: theme.white.primary,
    display: 'flex',
    fontSize: 12,
    height: 24,
    padding: '0 8px',
    textDecoration: 'none'
  };

  if (isActive) {
    return {
      ...baseStyle,
      ...activeStyle
    };
  }

  return baseStyle;
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
