import type { ServiceCategory } from '@/types/service'

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'funerals',
    title: 'Funerailles',
    route: '/funerailles',
    backgroundImage: '/images/background/funerals-bg.png',
    description: 'Compassionate and dignified funeral services to honor your loved ones'
  },
  {
    id: 'celebrations',
    title: 'Celebrations',
    route: '/celebrations',
    backgroundImage: '/images/background/celebration-bg.png',
    description: 'Mémorable célebrations for life\'s special moments'
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
    description: 'Meaningful spiritual ceremonies and gatherings'
  }
]

export function getServiceById(id: string): ServiceCategory | undefined {
  return serviceCategories.find(service => service.id === id)
}