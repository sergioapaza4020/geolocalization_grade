import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'overview', title: 'Inicio', href: paths.dashboard.overview, icon: 'chart-pie' },
  { key: 'customers', title: 'Clientes', href: paths.dashboard.customers, icon: 'users' },
  { key: 'integrations', title: 'Integraciones', href: paths.dashboard.integrations, icon: 'plugs-connected' },
  { key: 'settings', title: 'Opciones', href: paths.dashboard.settings, icon: 'gear-six' },
  { key: 'account', title: 'Cuenta', href: paths.dashboard.account, icon: 'user' },
  { key: 'error', title: 'Error', href: paths.errors.notFound, icon: 'x-square' },

  { key: 'profile', title: 'Perfil', href: paths.dashboard.profile, icon: 'user'},
  { key: 'profile', title: 'Usuarios', href: paths.dashboard.users, icon: 'users'},
  { key: 'profile', title: 'Conductores', href: paths.dashboard.drivers, icon: 'plugs-connected'},
  { key: 'profile', title: 'Rutas y líneas', href: paths.dashboard.routes, icon: 'plugs-connected'},
  { key: 'profile', title: 'Asignaciones', href: paths.dashboard.assignments, icon: 'gear-six'},
] satisfies NavItemConfig[];
