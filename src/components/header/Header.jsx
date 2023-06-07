      // ?NavBar
// Header Component - <Header />
// Will be used to display our navigation. **


      // ?Log In & out
// Will receive isLoggedIn(boolean) and filters(array) props from <App />
// Will render the navigation based on user login status as below
// If user not logged in, have two links. One for log in and the other for sign up.
// If user is logged in and as employer, have three links. One for adding new job, the other for my jobs-to display jobs posted for that company, and the last link for logout.
// If user is logged in and as user, have two links. One for my bookmarked jobs and the other for logout.

        // ?Filter
// Will have one child component - <Filters />
// Will use condition rendering to  display the <Filters /> component based on if the filters prop, which is an array, has any elements, i.e if filters.length > 0. We are doing this so that the <Filter /> component is only displayed when filters are applied.




import Navbar from '../navbar/Navbar';
import Filters from '../ui/Filters.jsx'

function Header() {
  return (
    <header className="-full h-36 bg-primary p-4">
      <Navbar  />
    </header>
  );
}

export default Header;