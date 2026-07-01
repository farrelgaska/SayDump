import bcrypt from 'bcrypt'

const SALT_ROUNDS = 10

export const passwordUtils = {
  hash: async (password: string): Promise<string> => {
    return bcrypt.hash(password, SALT_ROUNDS)
  },
  
  compare: async (password: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(password, hash)
  },
}
