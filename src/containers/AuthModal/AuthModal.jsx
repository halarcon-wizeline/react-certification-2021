import React, { useState } from 'react';
import styled from 'styled-components';
import { useVideos } from '../../providers/Video';
import { useAuth } from '../../providers/Auth';

import InputAuth from '../../components/UI/InputAuth';
import Button from '../../components/UI/Button';
import { updateObject } from '../../shared/utility';

import * as actionTypes from '../../state/ActionTypes';

import loginApi from '../../data/login.api';

const AuthModalStyled = styled.div`
  div.header {
    flex: 0 0 auto;
    margin: 0;
    padding: 16px 24px;
    text-align: left;
  }
  div.form {
    flex: 1 1 auto;
    padding: 8px 24px;
  }
  div.footer {
    flex: 0 0 auto;
    display: flex;
    padding: 8px;
    align-items: center;
    justify-content: flex-end;
  }

  .invalid {
    font-size: 12px;
    margin-right: 5px 0;
    color: rgb(102, 9, 27);
    background-color: rgb(255, 231, 236);
    padding: 12px 10px;
    margin-bottom: 10px;
    border-radius: 5px;
  }
`;

const AuthModal = (props) => {
  const { dispatch: authDispatch } = useAuth();
  const { dispatch: videosDispatch } = useVideos();

  const [errorMessage, setErrorMessage] = useState('');

  const [controls, setControls] = useState({
    controls: {
      username: {
        elementType: 'input',
        elementConfig: {
          type: 'input',
          placeholder: 'Username',
        },
        label: 'Username',
        value: 'wizeline',
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Password',
        },
        label: 'Password',
        value: 'Rocks!',
      },
    },
  });

  const inputChangedHandler = (event, inputIdentifier) => {
    const updatedFormElement = updateObject(controls.controls[inputIdentifier], {
      value: event.target.value,
    });

    const updatedForm = updateObject(controls.controls, {
      [inputIdentifier]: updatedFormElement,
    });

    setControls({ ...controls, controls: updatedForm });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    await loginApi(controls.controls.username.value, controls.controls.password.value)
      .then((result) => {
        authDispatch({
          type: actionTypes.AUTH_SET_USER,
          payload: result,
        });
        videosDispatch({
          type: actionTypes.LOAD_USER_SETTINGS,
        });
        props.onClose();
      })
      .catch((error) => {
        console.log('error', error);
        setErrorMessage(error.toString());
      });
  };

  const formElementsArray = [];
  Object.keys(controls.controls).forEach(function (key) {
    formElementsArray.push({
      id: key,
      config: controls.controls[key],
    });
  });

  const formElements = formElementsArray.map((formElement) => (
    <InputAuth
      key={formElement.id}
      label={formElement.id}
      elementType={formElement.config.elementType}
      elementConfig={formElement.config.elementConfig}
      value={formElement.config.value}
      onChange={(event) => inputChangedHandler(event, formElement.id)}
    />
  ));

  return (
    <AuthModalStyled>
      <form onSubmit={submitHandler}>
        <div className="header">Login</div>
        <div className="form">
          {errorMessage ? <p className="invalid">{errorMessage}</p> : null}
          {formElements}
        </div>
        <div className="footer">
          <Button type="button" onClick={props.onClose}>
            CANCEL
          </Button>
          <Button type="submit" onClick={submitHandler}>
            LOGIN
          </Button>
        </div>
      </form>
    </AuthModalStyled>
  );
};

export default AuthModal;
