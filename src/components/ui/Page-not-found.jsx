import { Link } from 'react-router-dom';
function NotFound() {
  return (
    <div className="max-w-lg rounded shadow-md lg:rounded-md mx-auto mt-[50vw] lg:mt-[25vw] p-4">
      <h1 className="text-6xl font-bold text-gray-800 mb-8">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-8">
        The page or job listing you are looking for does not exist.
      </p>
      <Link to="/" className="btn btn-primary">
        Go back to Home
      </Link>
    </div>
  );
}

export default NotFound;
