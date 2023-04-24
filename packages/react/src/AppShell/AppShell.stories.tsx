import { createStyles } from '@mantine/core';
import { Meta } from '@storybook/react';
import {
  Icon2fa,
  IconBellRinging,
  IconDatabaseImport,
  IconFingerprint,
  IconKey,
  IconReceipt2,
  IconSettings,
} from '@tabler/icons-react';
import React from 'react';
import { Logo } from '../Logo/Logo';
import { AppShell } from './AppShell';

export default {
  title: 'Medplum/AppShell',
  component: AppShell,
} as Meta;

// Extra styles to contain the AppShell inside of a Storybook story
// By default, the Mantine AppShell component is position: fixed
// But that breaks out of the Storybook story container
// By using position: absolute, we can keep the AppShell inside the story
const useStyles = createStyles(() => {
  return {
    root: {
      position: 'relative',
      margin: 0,
      padding: 0,

      '& header': {
        position: 'absolute',
      },

      '& nav': {
        position: 'absolute',
      },
    },
  };
});

export function Basic(): JSX.Element {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <AppShell
        logo={<Logo size={24} />}
        version="your.version"
        menus={[
          {
            title: 'My Menu',
            links: [
              { href: '/notifications', label: 'Notifications', icon: <IconBellRinging /> },
              { href: '/billing', label: 'Billing', icon: <IconReceipt2 /> },
              { href: '/security', label: 'Security', icon: <IconFingerprint /> },
              { href: '/sshkeys', label: 'SSH Keys', icon: <IconKey /> },
              { href: '/databases', label: 'Databases', icon: <IconDatabaseImport /> },
              { href: '/auth', label: 'Authentication', icon: <Icon2fa /> },
              { href: '/settings', label: 'Other Settings', icon: <IconSettings /> },
            ],
          },
        ]}
      >
        Your application here
      </AppShell>
    </div>
  );
}