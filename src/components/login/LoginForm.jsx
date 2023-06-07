import { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginForm({ onSubmitHandler }) {
  const [formData, setFormData] = useState({
    email: {
      value: '',
      error: null,
    },
    password: {
      value: '',
      error: null,
    },
  });

  const changeHandler = e => {
    setFormData(state => ({
      ...state,
      [e.target.name]: { value: e.target.value, error: null },
    }));
  };

  const submitHandler = e => {
    e.preventDefault();
    setFormData(state => ({
      email: { value: state.email.value, error: null },
      password: { value: state.password.value, error: null },
    }));
    //validation
    if (formData.email.value.toString().trim() === '') {
      setFormData(state => ({
        ...state,
        email: { value: '', error: 'Email is required' },
      }));
    }
    if (formData.password.value.toString().trim() === '') {
      setFormData(state => ({
        ...state,
        password: { value: '', error: 'Password is required' },
      }));
    }

    if (formData.email.value === '' || formData.password.value === '') return;
    onSubmitHandler({
      email: formData.email.value,
      password: formData.password.value,
    });
  };
  return (
    <form
      className="bg-white w-full p-4 shadow-sm rounded-sm"
      onSubmit={submitHandler}
    >
      <div className="flex flex-col gap-1 mb-3">
        <div className="flex items-center justify-between">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          {formData.email.error && (
            <span className="text-sm text-red-600">{formData.email.error}</span>
          )}
        </div>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="user@example.com"
          className={`form-input ${formData.email.error && 'invalid'}`}
          value={formData.email.value}
          onChange={changeHandler}
        />
      </div>
      <div className="flex flex-col gap-1 mb-3">
        <div className="flex items-center justify-between">
          <label htmlFor="email" className="form-label">
            Password
          </label>
          {formData.password.error && (
            <span className="text-sm text-red-600">
              {formData.password.error}
            </span>
          )}
        </div>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="your password"
          className={`form-input ${formData.password.error && 'invalid'}`}
          value={formData.password.value}
          onChange={changeHandler}
        />
      </div>
      <Link
        to="/register"
        className="text-sm text-blue-600 block text-right mb-3"
      >
        Dont have an account?Register here
      </Link>
      <button type="submit" className="btn btn-primary btn-full">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
