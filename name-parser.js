export function parseFirstName (value) {
  const name = value.split(' ')
  if (name[0] === 'Mr.' || name[0] === 'Mrs.' || name[0] === 'Dr.') {
    name.shift()
  }
  return name[0]
}
