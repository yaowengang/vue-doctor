const Home = r => require.ensure([], () => r(require('../page/index/index')), 'Home')
const Shop = r => require.ensure([], () => r(require('../page/shop/shop')), 'Shop')
const Health = r => require.ensure([], () => r(require('../page/health/health-center')), 'Health')
const Comunity = r => require.ensure([], () => r(require('../page/comunity/comunity')), 'Comunity')
const Personal = r => require.ensure([], () => r(require('../page/personal/personal-center')), 'Personal')

export default [{
  path: '/',
  component: Home,
  children: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/shop',
      component: Shop
    },
    {
      path: '/health-center',
      component: Health
    },
    {
      path: '/comunity',
      component: Comunity
    },
    {
      path: '/personal-center',
      component: Personal
    }
  ]
}]
