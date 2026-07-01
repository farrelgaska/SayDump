import { Topic } from '../types/topic'

export const dummyTopics: Topic[] = [
  {
    id: 't1',
    name: 'Philosophy',
    slug: 'philosophy',
    description: 'Deep questions and existential queries.',
    createdAt: new Date().toISOString(),
    _count: { dumps: 42 },
  },
  {
    id: 't2',
    name: 'Software Development',
    slug: 'software-dev',
    description: 'Code rants, bugs, and architectures.',
    createdAt: new Date().toISOString(),
    _count: { dumps: 104 },
  },
  {
    id: 't3',
    name: 'Late Night Rants',
    slug: 'late-night-rants',
    description: 'Unfiltered thoughts when the coffee kicks in.',
    createdAt: new Date().toISOString(),
    _count: { dumps: 78 },
  },
]
