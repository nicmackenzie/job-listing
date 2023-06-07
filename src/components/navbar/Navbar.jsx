import { Link } from 'react-router-dom';

function Navbar({ user }) {
  return (
    <nav className="flex justify-end">
      <ul className="flex gap-4 items-center">
        {!user && (
          <>
            <li>
              <Link
                to="/login"
                className="text-white font-semibold text-lg transition-all hover:text-primary-700"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="text-white font-semibold text-lg transition-all hover:text-primary-700"
              >
                Register
              </Link>
            </li>
          </>
        )}
        {user && user.role === 'employer' && (
          <Link
            className="text-white font-semibold text-lg transition-all hover:text-primary-700"
            to="/jobs/new"
          >
            New Job
          </Link>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;