import { parseFirstName } from './name-parser.js'
import { getNameInput } from './welcome-view.js'

function getFullName () {
  return getNameInput()
}

export function getFirstName () {
  return parseFirstName(getFullName())
}
