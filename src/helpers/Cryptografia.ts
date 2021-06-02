import bcrypt from 'bcrypt'

export default new class Cryptografia {
  genereteHash (data: string) {
    return bcrypt.hashSync(data, 8)
  }

  compareHash (data: string, hash: string) {
    return bcrypt.compareSync(data, hash)
  }
}()
