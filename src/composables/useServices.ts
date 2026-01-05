import type { ServiceCategory } from '@/types/service'

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'funerals',
    title: 'Funerailles',
    route: '/funerailles',
    backgroundImage: '/images/background/funerals-bg2.png',
    description: 'Services funeraire pleins de compassion et de dignites pour honorer vos proches'
  },
  {
    id: 'celebrations',
    title: 'Celebrations',
    route: '/celebrations',
    backgroundImage: '/images/background/celebration-bg.png',
    description: 'Célebrations mémorable pour des instants de vie'
  },
  {
    id: 'corporate',
    title: 'Entreprises',
    route: '/entreprises',
    backgroundImage: '/images/background/corporate-bg.png',
    description: 'Reunion d\'affaires, rassemblement d\'entreprise'
  },
  {
    id: 'religious',
    title: 'Religieux',
    route: '/religieux',
    backgroundImage: '/images/background/religious-bg.png',
    description: 'Rassemblements spirituels'
  }
]

export function getServiceById(id: string): ServiceCategory | undefined {
  return serviceCategories.find(service => service.id === id)
}