import { useState } from 'react';
import { Link } from 'react-router-dom';

function RegisterForm({ onSubmitHandler }) {
  const [formData, setFormData] = useState({
    email: {
      value: '',
      error: null,
    },
    password: {
      value: '',
      error: null,
    },
    confirmpassword: {
      value: '',
      error: null,
    },
    role: {
      value: 'user',
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
      confirmpassword: { value: state.confirmpassword.value, error: null },
      role: { value: state.role.value, error: null },
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
    if (formData.confirmpassword.value.toString().trim() === '') {
      setFormData(state => ({
        ...state,
        confirmpassword: { value: '', error: 'Confirm password required' },
      }));
    }
    if (formData.confirmpassword.value !== formData.password.value) {
      setFormData(state => ({
        ...state,
        password: {
          value: state.password.value,
          error: "Passwords don't match",
        },
        confirmpassword: {
          value: state.confirmpassword.value,
          error: "Passwords don't match",
        },
      }));
    }

    if (
      formData.email.value === '' ||
      formData.password.value === '' ||
      formData.confirmpassword.value === '' ||
      formData.confirmpassword.value !== formData.password.value
    )
      return;
    onSubmitHandler({
      email: formData.email.value,
      password: formData.password.value,
      role: formData.role.value,
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
      <div className="flex flex-col gap-1 mb-3">
        <div className="flex items-center justify-between">
          <label htmlFor="confirmpassword" className="form-label">
            Confirm Password
          </label>
          {formData.confirmpassword.error && (
            <span className="text-sm text-red-600">
              {formData.confirmpassword.error}
            </span>
          )}
        </div>
        <input
          type="password"
          name="confirmpassword"
          id="confirmpassword"
          placeholder="Confirm password"
          className={`form-input ${
            formData.confirmpassword.error && 'invalid'
          }`}
          value={formData.confirmpassword.value}
          onChange={changeHandler}
        />
      </div>
      <div className="flex flex-col gap-1 mb-3">
        <div className="flex items-center justify-between">
          <label htmlFor="role" className="form-label">
            Role
          </label>
          {formData.role.error && (
            <span className="text-sm text-red-600">{formData.role.error}</span>
          )}
        </div>
        <select
          name="role"
          id="role"
          defaultValue={formData.role.value}
          className={`form-input ${formData.role.error && 'invalid'}`}
        >
          <option value="user">User</option>
          <option value="employer">Employer</option>
        </select>
      </div>
      <Link to="/login" className="text-sm text-blue-600 block text-right mb-3">
        Have an account?Login
      </Link>
      <button type="submit" className="btn btn-primary btn-full">
        Register
      </button>
    </form>
  );
}

export default RegisterForm;
