import React, { useState } from 'react';
// import { useHistory } from 'react-router';
import { useVideos } from '../../providers/Video';
import { useAuth } from '../../providers/Auth';
import styled from 'styled-components';

import Input from '../../components/UI/Input';
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

  .Input {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    background-color: white;
    border-bottom: 1px solid #333;
  }

  .InputElement {
    outline: none;
    border: 1px solid #ccc;
    background-color: white;
    font: inherit;
    padding: 6px 10px;
    display: block;
    width: 100%;
    box-sizing: border-box;
  }

  .InputElement:focus {
    outline: none;
    background-color: #ccc;
  }

  .Invalid {
    border: 1px solid red;
    background-color: #fda49a;
  }

  .ValidationError {
    font-size: 12px;
    color: red;
    margin-right: 5px 0;
  }
`;

const AuthModal = (props) => {
  const { dispatch: authDispatch } = useAuth();
  const { dispatch: videosDispatch } = useVideos();

  //   const { login } = useAuth();
  // const history = useHistory();

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
    // console.log(event, inputIdentifier);
    // console.log(event.target.value);

    const updatedFormElement = updateObject(controls.controls[inputIdentifier], {
      value: event.target.value,
    });
    // console.log(updatedFormElement);

    const updatedForm = updateObject(controls.controls, {
      [inputIdentifier]: updatedFormElement,
    });

    // console.log(updatedForm);
    setControls({ ...controls, controls: updatedForm });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    await loginApi(controls.controls.username.value, controls.controls.password.value)
      .then((result) => {
        // console.log(result);
        authDispatch({
          type: actionTypes.AUTH_SET_USER,
          payload: result
        });

        videosDispatch({
          type: actionTypes.LOAD_USER_SETTINGS
        });
        props.modalClosed();
        console.log("fin");
      });
      await console.log("fin fin");
  };

  const formElementsArray = [];
  Object.keys(controls.controls).forEach(function (key) {
    formElementsArray.push({
      id: key,
      config: controls.controls[key],
    });
  });

  const form = formElementsArray.map((formElement) => (
    <Input
      key={formElement.id}
      label={formElement.id}
      elementType={formElement.config.elementType}
      elementConfig={formElement.config.elementConfig}
      value={formElement.config.value}
      changed={(event) => inputChangedHandler(event, formElement.id)}
    />
  ));

  let errorMessage = null;
  if (props.error) {
    errorMessage = <p>{props.error.message}</p>;
  }

  return (
    <AuthModalStyled>
      <form onSubmit={submitHandler}>
        <div className="header">Login</div>
        {errorMessage}
        <div className="form">{form}</div>
        <div className="footer">
          <Button type="button" clicked={props.modalClosed}>
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
