import slugifyOriginal from 'slugify'

export function slugify(text: string): string {
  return slugifyOriginal(text, {
    lower: true,
    strict: true,
    trim: true,
  })
}
