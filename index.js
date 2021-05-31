$(setupClickHandlers)

function setupClickHandlers () {
  $('body').on('click', 'button.done', onDoneButtonClicked)
}

function onDoneButtonClicked () {
  const name = getFullName()
  const firstName = parseFirstName(name)
  displayWelcome(welcomeMessage(firstName))
}

function getFullName () {
  return $('input.name').val()
}

function parseFirstName (value) {
  const name = value.split(' ')
  if (name[0] === 'Mr.' || name[0] === 'Mrs.' || name[0] === 'Dr.') {
    name.shift()
  }
  return name[0]
}

function welcomeMessage (firstName) {
  return 'Welcome, ' + firstName + '!'
}

function displayWelcome (message) {
  $('#welcome').text(message)
}
