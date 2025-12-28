import type { ServiceCategory } from '@/types/service'

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'funerals',
    title: 'Funerals',
    route: '/funerals',
    backgroundImage: '/images/funerals-bg.jpg',
    description: 'Compassionate and dignified funeral services to honor your loved ones'
  },
  {
    id: 'celebrations',
    title: 'Celebrations',
    route: '/celebrations',
    backgroundImage: '/images/celebrations-bg.jpg',
    description: 'Memorable celebrations for life\'s special moments'
  },
  {
    id: 'corporate',
    title: 'Corporate',
    route: '/corporate',
    backgroundImage: '/images/corporate-bg.jpg',
    description: 'Professional event management for corporate functions'
  },
  {
    id: 'religious',
    title: 'Religious',
    route: '/religious',
    backgroundImage: '/images/religious-bg.jpg',
    description: 'Meaningful spiritual ceremonies and gatherings'
  }
]

export function getServiceById(id: string): ServiceCategory | undefined {
  return serviceCategories.find(service => service.id === id)
}