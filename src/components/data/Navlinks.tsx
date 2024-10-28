
import {
  BarChart2,
  ShoppingCart,
  ClipboardList,
  MessageSquareMore,
  Settings,
  LogOut,
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface NavLink {
  title: string;
  path: string;
  icon: LucideIcon;
}

export const NavLinks: NavLink[] = [
  {
    title: 'Dashboard',
    icon: BarChart2,
    path: 'dashboard',
  },
  {
    title: 'Approvals',
    icon: ShoppingCart,
    path: 'approvals',
  },
  {
    title: 'User Management',
    icon: ClipboardList,
    path: 'usermanagement',
  },
  {
    title: 'Notification',
    icon: MessageSquareMore,
    path: 'notification',
  },
  {
    title: 'Help & Support',
    icon: Settings,
    path: 'helpsupport',
  },
  {
    title: 'Logout',
    icon: LogOut,
    path: 'logout',
  },
];
