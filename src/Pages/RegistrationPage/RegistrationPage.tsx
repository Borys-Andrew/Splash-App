import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../components/Container';
import { UserRegister } from '../../types/User';
import { getFromLocalStorage } from '../../utils/getFromLocalStorage';
import { setToLocalStorage } from '../../utils/setToLocalStorage';
import './RegistrationPage.scss';

export const RegistrationPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegister>();
  const onSubmit: SubmitHandler<UserRegister> = (data) => {
    const users = getFromLocalStorage('users');

    if (!users) {
      setToLocalStorage('users', [data]);
      navigate('/login');
      // add time out, add notification about reg user

      return;
    }

    const isUserRegister = users.find(
      (user: UserRegister) => user.email === data.email || user.username === data.username,
    );

    if (isUserRegister) {
      // eslint-disable-next-line no-alert
      alert(
        `User with Username: '${data.username}' or Email: '${data.email}' already exists...`,
      );

      return;
    }

    // console.log('isUserRegister==>', isUserRegister);

    setToLocalStorage('users', [...users, data]);
    navigate('/login');
  };

  return (
    <div className="register">
      <Container>
        <h1 className="register__title">Registration</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <label htmlFor="username" className="form__label">
            <span className="form__label-text">Username</span>
            <input
              className="form__label-input"
              placeholder="Username..."
              {...register('username', { required: true })}
            />
            {errors.username && (
              <span className="form__label-error-text">
                This field is required
              </span>
            )}
          </label>
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
          <input className="form__submit-btn" type="submit" value="Register" />
        </form>
      </Container>
    </div>
  );
};
