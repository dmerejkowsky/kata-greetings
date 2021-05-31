# first refactoring:

extract
  setupClickHandlers
  onDoneButtonClicked
  getFullName
  welcomeMessage
  displayWelcome

# second refactoring

Who needs to change what?

Teams involved:

developers

designers (html class)

product manager (what does the button do, where does the name code from,
how do we greet the user)

copywriter (messages, localization ...)

QA, customer service

extract:
 name-parser -> parseFirstName
 messages -> welcomeMessage
 welcome-view -> setupClickHandlers, getFullName, displayWelcome

Now we can cleanup index.js

# third

welcome-view cleanup

  current-user -> getFirstName
  welcome-view -> getNameInput


