export const paths = {
  home: '/',
  auth: { signIn: '/auth/sign-in', signUp: '/auth/sign-up', resetPassword: '/auth/reset-password' },
  dashboard: {
    overview: '/dashboard',
    account: '/dashboard/account',
    customers: '/dashboard/customers',
    integrations: '/dashboard/integrations',
    settings: '/dashboard/settings',

    profile: '/dashboard/profile',
    users: '/dashboard/users',
    registerDriver: '/dashboard/register-driver',
    drivers: {
      profile: '/dashboard/drivers/profile',
      assignments: '/dashboard/drivers/assignments',
      workday: '/dashboard/drivers/workday',
      record: '/dashboard/drivers/record',
    },
    routes: '/dashboard/routes',
    assignments: '/dashboard/assignments',
  },
  errors: { notFound: '/errors/not-found' },
} as const;
