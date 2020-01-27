import Search from './components/Search'
import Payment from './components/Payment'

const routes = [
  { name: 'Search', path: '/', component: Search },
  { name: 'Payment', path: '/payment/:bookingKey', component: Payment }
]

export default routes;
