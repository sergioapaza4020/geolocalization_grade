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
    drivers: '/dashboard/drivers',
    routes: '/dashboard/routes',
    assignments: '/dashboard/assignments',
  },
  errors: { notFound: '/errors/not-found' },
} as const;
