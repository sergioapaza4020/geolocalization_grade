import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  // { key: 'overview', title: 'Inicio', href: paths.dashboard.overview, icon: 'chart-pie' },
  // { key: 'customers', title: 'Clientes', href: paths.dashboard.customers, icon: 'users' },
  // { key: 'integrations', title: 'Integraciones', href: paths.dashboard.integrations, icon: 'plugs-connected' },
  // { key: 'settings', title: 'Opciones', href: paths.dashboard.settings, icon: 'gear-six' },
  // { key: 'account', title: 'Cuenta', href: paths.dashboard.account, icon: 'user' },
  // { key: 'error', title: 'Error', href: paths.errors.notFound, icon: 'x-square' },

  { key: 'profile', title: 'Perfil', href: paths.dashboard.profile, icon: 'user'},
  { key: 'users', title: 'Usuarios', href: paths.dashboard.users, icon: 'users'},
  { key: 'drivers', title: 'Conductores', href: paths.dashboard.registerDriver, icon: 'plugs-connected'},
  { key: 'routes', title: 'Rutas y líneas', href: paths.dashboard.routes, icon: 'plugs-connected'},
  { key: 'assignments', title: 'Asignaciones', href: paths.dashboard.assignments, icon: 'gear-six'},

  { key: 'profile', title: 'Perfil', href: paths.dashboard.drivers.profile, icon: 'user'},
  { key: 'assignments', title: 'Asignaciones', href: paths.dashboard.drivers.assignments, icon: 'users'},
  { key: 'workday', title: 'Jornada', href: paths.dashboard.drivers.workday, icon: 'plugs-connected'},
  { key: 'record', title: 'Registro', href: paths.dashboard.drivers.record, icon: 'address-book'},
] satisfies NavItemConfig[];
