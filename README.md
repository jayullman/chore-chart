This is my submission for the CS50 final project.

The only conditions for the project were...



I implemented a housemate chore tracking app. The idea was based on a system I came up with (although I may not have been the first), as a way to decide whose turn it was to do a particular chore. Whenever someone completes a chore, they put a marker next to the chore. Each person can only place one marker next to each chore. The remaining housemates then perform the chore the next time. The last person to not have done any particular chore must then complete that chore. When all housemates have completed the chore, the list resets. This ensures that everyone does the chore at least once per cycle without enforcing the particular time that someone must do it.

The app was implemented using React.js as the view library and Redux for data architecture. There is no backend, and data is persisted via local storage. The user selection box is meant to simulate who is currently logged into the system.

The is a single page app, utilizing react router to determine which React components are rendered to the user. There are 3 main areas:
1. The main screen which shows a brief summary of whose turn it is to do which chores and who did the chore the last time.
2. The chore chart lists the chores in a table-like format. Clicking the 'complete' button. The person who is currently 'logged in' will have their token placed next to the chore, indicating that they

things i did:
* implemented my own modals. Followed a tutorial located here:
* heavy use of modules, making a strong attempt to separate concerns into different modules and components
* used flexbox to create responsive elements and components
