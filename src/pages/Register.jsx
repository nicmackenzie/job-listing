import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../components/register/RegisterForm';
import { AppContext } from '../context/app-context';

function Register() {
  const { users, onLogin } = useContext(AppContext);
  const [error, setError] = useState({ hasError: false, errorMsg: '' });
  const navigate = useNavigate();

  const submitHandler = data => {
    setError(false);
    const user = users.find(user => user.email === data.email);
    if (user) {
      setError({ hasError: true, errorMsg: 'Email already exists' });
      return;
    }

    // to do allow user to automatically be logedin after register
    onLogin(data);
    navigate('/');
  };
  return (
    <div className="max-w-md mx-auto mt-[50vw] lg:mt-[15vw] flex flex-col gap-2">
      {error.hasError && (
        <div className="w-full bg-red-200 font-bold text-base py-2 px-4 rounded">
          {error.errorMsg}
        </div>
      )}
      <RegisterForm onSubmitHandler={submitHandler} />
    </div>
  );
}

export default Register;
