import Home from '@/pages/Home'
import Team from '@/pages/Team'
import Sos from '@/pages/Sos'
import Admin from '@/pages/Admin'
import NotFound from '@/pages/NotFound'

export default {
  pages: {
    Home,
    Team,
    Sos,
    Admin,
    NotFound
  },
  routes: {
    '/': 'Home',
    '/team': 'Team',
    '/order': 'Sos',
    '/admin': 'Admin'
  },
  notFound: 'NotFound'
}
