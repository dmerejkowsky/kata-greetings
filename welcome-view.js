import { welcomeMessage } from './messages.js'

export function displayWelcome (message) {
  $('#welcome').text(message)
}

export function getNameInput () {
  return $('input.name').val()
}

export function setupClickHandlers () {
  $('body').on('click', 'button.done', onDoneButtonClicked)
}

function onDoneButtonClicked () {
  const message = welcomeMessage()
  displayWelcome(message)
}
