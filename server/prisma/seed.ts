import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database topics...')

  // Seed default Topics
  const topics = [
    { name: 'Philosophy', slug: 'philosophy', description: 'Deep questions and existential queries.' },
    { name: 'Software Development', slug: 'software-dev', description: 'Code rants, bugs, and architectures.' },
    { name: 'Late Night Rants', slug: 'late-night-rants', description: 'Unfiltered thoughts when the coffee kicks in.' },
  ]

  for (const topic of topics) {
    await prisma.topic.upsert({
      where: { slug: topic.slug },
      update: {},
      create: topic,
    })
  }

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
