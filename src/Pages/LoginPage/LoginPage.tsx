import React, { useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Container } from '../../components/Container';
import { UserContext } from '../../context/UserContext';
import { UserLogin, UserRegister } from '../../types/User';
import { getFromLocalStorage } from '../../utils/getFromLocalStorage';
import './LoginPage.scss';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLogin>();
  const onSubmit: SubmitHandler<UserLogin> = (data) => {
    console.log(data);
    const users = getFromLocalStorage('users');
    const findUser = users.find(
      (user: UserRegister) => user.email === data.email,
    );

    if (findUser) {
      if (findUser.password === data.password) {
        setUser(findUser);
        navigate('/home');
      } else {
        // eslint-disable-next-line no-alert
        alert('Password is incorrect');
      }
    } else {
      // eslint-disable-next-line no-alert
      alert('User not found');
    }
  };

  return (
    <div className="login">
      <Container>
        <h1 className="login__title">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <label htmlFor="email" className="form__label">
            <span className="form__label-text">Email</span>
            <input
              className="form__label-input"
              placeholder="Email..."
              type="email"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <span className="form__label-error-text">
                This field is required
              </span>
            )}
          </label>
          <label htmlFor="password" className="form__label">
            <span className="form__label-text">Password</span>
            <input
              className="form__label-input"
              placeholder="Password..."
              {...register('password', { required: true })}
            />
            {errors.password && (
              <span className="form__label-error-text">
                This field is required
              </span>
            )}
          </label>
          <input className="form__submit-btn" type="submit" value="Login" />
        </form>
      </Container>
    </div>
  );
};
