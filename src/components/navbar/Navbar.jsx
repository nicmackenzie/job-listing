import { Link } from 'react-router-dom';

// const links = [
//   {
//     name: 'Home',
//     link: '/home',
//   },
//   {
//     name: 'About',
//     link: '/about',
//   },
//   {
//     name: 'Contact',
//     link: '/contact',
//   },
//   {
//     name: 'Blog',
//     link: '/blog',
//   },
// ];

function Navbar({ user, onLogout }) {
  return (
    <nav className="flex">
      <ul className="flex gap-4 items-center justify-between w-full">
        <div className="flex gap-4 items-center">
          {/* {links.map(link => (
            <li key={link.name}>
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))} */}
        </div>
        {!user && (
          <div className="flex gap-4">
            <li>
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </li>
          </div>
        )}
        {user && user.role === 'employer' && (
          <div className="flex gap-4">
            <li>
              <Link className="nav-link" to="/jobs/new">
                New Job
              </Link>
            </li>
            <button className="nav-link" onClick={onLogout}>
              Logout
            </button>
          </div>
        )}
        {user && user.role === 'user' && (
          <div className="flex gap-4">
            <button className="nav-link" onClick={onLogout}>
              Logout
            </button>
          </div>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
