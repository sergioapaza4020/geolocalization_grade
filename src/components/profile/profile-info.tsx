import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const user = {
  name: 'Sofia Rivers',
  avatar: '/assets/avatar.png',
  jobTitle: 'Senior Developer',
  country: 'USA',
  city: 'Los Angeles',
  timezone: 'GTM-7',
} as const;

export function ProfileInfo(): React.JSX.Element {
  return (
    <Stack spacing={2} sx={{ alignItems: 'center' }}>
      <div>
        <Avatar src={user.avatar} sx={{ height: '20rem', width: '20rem' }} />
      </div>
      <Stack spacing={1} sx={{ textAlign: 'center' }}>
        <Typography variant="h5">{user.name}</Typography>
      </Stack>
    </Stack>
  );
}
