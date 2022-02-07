import React from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import styled from 'styled-components'
import axios from 'axios'

const Form = ({ isDarkTheme }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const onSubmit = (data) => {
    axios
      .post(
        '/',
        {
          'form-name': 'contact-form',
          firstName: data.firstName,
          eMail: data.eMail,
          phone: data.phone,
          question: data.question,
          accept: data.accept
        },
        {
          headers: {
            'Content-Type':
              'application/x-www-form-urlencoded'
          }
        }
      )
      .then((res) => {
        toast('Dziękujemy. Odezwiemy się wkrótce.', {
          icon: '✅'
        })
      })
      .catch((error) => {
        toast('Coś poszło nie tak.', {
          icon: '❌'
        })
      })
  }

  return (
    <Wrapper
      isDarkTheme={isDarkTheme}
      onSubmit={handleSubmit(onSubmit)}
      data-netlify='true'
      nam='contact-form'>
      <label className={errors.firstName && 'error'}>
        <span>Imie</span>
        <input
          name='firstName'
          placeholder='Dariusz'
          {...register('firstName', { required: true })}
        />
        <p className='errorText'>
          {errors.firstName && 'Proszę, wpisz imię'}
        </p>
      </label>
      <label className={errors.eMail && 'error'}>
        <span>E-mail</span>
        <input
          name='eMail'
          placeholder='przykladowymail@gmail.com'
          {...register('eMail', {
            required: true,
            pattern:
              /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          })}
        />
        <p className='errorText'>
          {errors.eMail && 'Proszę, wpisz poprawny E-mail'}
        </p>
      </label>
      <label className={errors.phone && 'error'}>
        <span>Telefon</span>
        <input
          type='tel'
          name='phone'
          placeholder='512566344'
          {...register('phone', {
            required: true,
            pattern: /^\d+$/
          })}
        />
        <p className='errorText'>
          {errors.phone &&
            'Proszę, wpisz numer telefonu w postaci 9 cyfr bez spacji i znaków specjalnych'}
        </p>
      </label>
      <label className='area'>
        <span>Szczegóły</span>
        <textarea
          name='question'
          rows='10'
          placeholder='Napisz wiadomość...'
          {...register('question')}
        />
      </label>
      <label
        className={errors.accept ? 'check error' : 'check'}>
        <input
          name='accept'
          type='checkbox'
          {...register('accept', { required: true })}
        />
        <span>Zaakceptuj politykę prywatności</span>
      </label>
      <button type='submit'>WYŚLIJ</button>
    </Wrapper>
  )
}

export default Form

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;

  .error {
    position: relative;

    input {
      border: 1px solid #f2496b;
    }
  }

  .errorText {
    position: absolute;
    bottom: 0;
    transform: translateY(110%);
    margin: 4px 0 0;
    color: #f2496b;
    font-size: 11px;
  }

  label {
    display: grid;
    grid-template-columns: 1fr;
    margin-bottom: 32px;

    &.area {
      margin-bottom: 16px;
    }

    span {
      color: ${(props) =>
        props.isDarkTheme
          ? props.theme.black.text.sub
          : props.theme.white.text.sub};
      margin-bottom: 4px;
      font-weight: ${(props) =>
        props.isDarkTheme ? '500' : '600'};
    }

    input {
      max-width: 312px;
      box-sizing: border-box;
    }

    input,
    textarea {
      border-radius: 8px;
      border: 1px solid
        ${(props) =>
          props.isDarkTheme
            ? props.theme.black.text.grey
            : props.theme.white.text.sub};
      background-color: transparent;
      padding: 16px 24px;
      transition: 0.2s linear;
      color: ${(props) =>
        props.isDarkTheme
          ? props.theme.black.text.sub
          : props.theme.white.text.sub};

      &:focus {
        outline: none;
        border: 1px solid
          ${(props) =>
            props.isDarkTheme
              ? props.theme.black.text.main
              : props.theme.white.text.main};
        color: ${(props) =>
          props.isDarkTheme
            ? props.theme.black.text.main
            : props.theme.white.text.main};
      }

      &::placeholder {
        color: ${(props) =>
          props.isDarkTheme
            ? props.theme.black.text.grey
            : props.theme.white.text.grey};
      }
    }

    &.check {
      display: flex;
      justify-content: start;
      align-items: center;
      position: relative;
      margin-bottom: 0;

      span {
        margin-bottom: 0;
      }

      &.error {
        input {
          border-color: #f2496b;
        }

        span {
          color: #f2496b;
          margin-bottom: 0;
        }
      }

      input {
        width: auto;
        appearance: none;
        background-color: transparent;
        margin-right: 8px;
        font: inherit;
        color: currentColor;
        width: 24px;
        height: 24px;
        border: 1px solid
          ${(props) =>
            props.isDarkTheme
              ? props.theme.black.text.sub
              : props.theme.white.text.sub};
        padding: 0;
        position: relative;
        transition: color 0.2s ease-out;

        &::before {
          content: '✓';
          transition: 120ms transform ease-in-out;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translateX(-50%) translateY(-50%)
            scale(0);
          border-radius: 3px;
          color: #2c8cda;
          font-weight: 900;
        }

        &:focus-visible {
          outline: 1px solid #2c8cda;
          outline-offset: 2px;
        }

        &:checked {
          &::before {
            transform: translateX(-50%) translateY(-50%)
              scale(1);
          }
        }
      }
    }
  }

  button {
    text-align: center;
    padding: 16px 64px;
    border-radius: 8px;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.2s linear,
      background-color 0.2s linear;
    font-weight: bold;
    background-color: ${(props) =>
      props.isDarkTheme
        ? props.theme.black.button.static.background
        : props.theme.white.button.static.background};
    border: ${(props) =>
      props.isDarkTheme
        ? props.theme.black.button.static.border
        : props.theme.white.button.static.border};
    color: ${(props) =>
      props.isDarkTheme
        ? props.theme.black.button.static.text
        : props.theme.white.button.static.text};
    box-shadow: ${(props) =>
      props.isDarkTheme
        ? props.theme.black.button.static.shadow
        : props.theme.white.button.static.shadow};
    width: 185px;
    cursor: pointer;
    margin-top: 32px;
    font-weight: 700;

    &:focus-visible {
      outline-offset: 4px;
    }

    &:hover {
      background-color: ${(props) =>
        props.isDarkTheme
          ? props.theme.black.button.hover.background
          : props.theme.white.button.hover.background};
    }
  }

  @media (max-width: 539px) {
    label {
      input {
        max-width: 100%;
      }
    }
  }
`
