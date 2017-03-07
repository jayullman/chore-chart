# CS50 Final Project
## This is my submission for the CS50 final project.

Live site: https://libeja.github.io/chore-chart/

### The requirements of the project were:

The final project is your opportunity to take your newfound savvy with programming out for a spin and develop your very own piece of software. So long as your project draws upon this course’s lessons, the nature of your project is entirely up to you. You may implement your project in any language(s). You are welcome to utilize infrastructure other than the CS50 Appliance. All that we ask is that you build something of interest to you, that you solve an actual problem, that you impact your community, or that you change the world.
(from CS50 website)

I implemented a housemate chore tracking app. The idea was based on a system I came up with (although I may not have been the first), as a way to decide whose turn it was to do a particular chore. Whenever someone completes a chore, they put a marker next to the chore. Each person can only place one marker next to each chore. The remaining housemates then perform the chore the next time. The last person to not have done any particular chore must then complete that chore. When all housemates have completed the chore, the list resets. This ensures that everyone does the chore at least once per cycle without enforcing the particular time that someone must do it.

The app was implemented using React.js as the view library and Redux for data architecture. There is no backend, and data is persisted via local storage. The user selection box is meant to simulate who is currently logged into the system.

The single page app utilizes conditional rendering based on the current view, determined by a property in the Redux store.

There are 3 main areas:
1. The main screen which shows a brief summary of which chores the current user hasn't
completed yet for the current cycle.
2. The chore chart lists the chores in a table-like format. By clicking the 'complete' button, the person who is currently 'logged in' will have their token placed next to the chore, indicating that they have completed that chore for the current cycle.
3. The settings screen allows a user to add housemates, chores and to edit both records. There is also a delete user data option which clears the Redux store and localStorage.

### Implementation notes
* Implemented my own modals dialogue boxes
* Heavy use of modules, making a strong attempt to separate concerns into different modules and components
* Used flexbox to create responsive elements and components
* Utilized localStorage to maintain perpetual state
