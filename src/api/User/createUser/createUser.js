import { prisma } from '../../../prisma/generated/prisma-client'

export default {
  Mutation: {
    createUser: (_, { data }) => {
      return prisma.createUser(data)
    }
  }
}
