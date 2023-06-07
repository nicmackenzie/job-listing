import { Link } from 'react-router-dom';

const links = [
{
  name: 'Home',
  link: '/home'
 },
 {
  name: 'About',
  link: '/about'
 },
 {
  name: 'Contact',
  link: '/contact'
 },
 {
  name: 'Blog',
  link: '/blog'
 }
]


function Navbar({ user }) {

  return (

    <nav className="flex">
      <ul className="flex gap-4 items-center justify-between w-full">
        
        {!user && (
          <div className='flex gap-4'>
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
           

          </div>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;






