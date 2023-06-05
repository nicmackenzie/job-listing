import { useContext, useState } from 'react';
import { AppContext } from '../context/app-context';
import LoginForm from '../components/login/LoginForm';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const { users, onLogin } = useContext(AppContext);
  const [hasError, setHasError] = useState(false);

  const submitHandler = data => {
    setHasError(false);
    const user = users.find(user => user.email === data.email);
    if (!user || user.password !== data.password) {
      setHasError(true);
      return;
    }
    onLogin(user);
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto mt-[50vw] lg:mt-[25vw] flex flex-col gap-2">
      {hasError && (
        <div className="w-full bg-red-200 font-bold text-base py-2 px-4 rounded">
          Invalid email or password
        </div>
      )}
      <LoginForm onSubmitHandler={submitHandler} />
    </div>
  );
}

export default Login;
