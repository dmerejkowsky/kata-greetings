import { getFirstName } from './current-user.js'

export function welcomeMessage() {
  const name = getFirstName()
  return 'Welcome, ' + name + '!'
}
