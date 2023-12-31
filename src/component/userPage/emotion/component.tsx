/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import theme from '../../../styles/theme';
import {
  CheckBoxType,
  ContainerType,
  InfoContainerType,
  LoginInputType,
  SignUpLevelType,
  TextButtonType,
} from '../../../types/globalType';
import Logo from '../../../assets/images/logo.png';
import userIcon from '../../../assets/images/user.svg';
import pwIcon from '../../../assets/images/password.svg';
import emailIcon from '../../../assets/images/email.svg';
import checkIcon from '../../../assets/images/checkbox.svg';
import unCheckIcon from '../../../assets/images/unCheckbox.svg';
import { Body2, Body3, Section } from '../../emotion/GlobalStyle';
import { ButtonBox } from '../../emotion/component';

export const ModalPage = ({ children }: ContainerType) => {
  return (
    <div
      css={css`
        position: fixed;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        gap: 4rem;
        justify-content: center;
        align-items: center;
        width: 60rem;
        background: ${theme.palette.gray.white};
        border-radius: 5rem;
        border: 1px solid ${theme.palette.primary[500]};
        padding: 4.8rem;
      `}
    >
      <Link to="/">
        <img src={Logo} alt="memeki" width={150} />
      </Link>
      {children}
    </div>
  );
};

export const ErrorMessage = ({ children }: ContainerType) => {
  return (
    <small
      role="alert"
      css={css`
        color: ${theme.palette.semantic.danger[500]};
        margin-right: auto;
      `}
    >
      {children}
    </small>
  );
};

export const LoginInput = ({
  type,
  placeholder,
  check,
  onClick,
  register,
  errMsg,
}: LoginInputType) => {
  const src = {
    user: userIcon,
    password: pwIcon,
    email: emailIcon,
  };
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 2.4rem;
        width: 100%;
        ${theme.typography.body2}
      `}
    >
      <img src={src[type]} alt="icon" />
      <div
        css={css`
          width: 100%;
          display: flex;
          flex-direction: column;
        `}
      >
        <input
          placeholder={placeholder}
          type={type !== 'user' ? type : 'text'}
          css={css`
            width: 100%;
          `}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register}
        />
        {errMsg && <ErrorMessage>{errMsg}</ErrorMessage>}
      </div>
      {check && (
        <ButtonBox type="verySmall" onClick={onClick} gray>
          중복 확인
        </ButtonBox>
      )}
    </div>
  );
};

export const LoginInputList = ({ children }: ContainerType) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 0.8rem 4rem;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        border-radius: 1rem;
      `}
    >
      {children}
    </div>
  );
};

export const TextButton = ({ type, noLine }: TextButtonType) => {
  const typeData = {
    id: '아이디 찾기',
    pw: '비밀번호 찾기',
    login: '로그인',
    signUp: '회원가입',
  };
  return (
    <Link to={type === 'login' ? '/login' : `/login/${type}`}>
      <div
        css={css`
          padding: 0 2.4rem;
          border-right: ${noLine
            ? 'none'
            : `1px solid ${theme.palette.gray[500]}`};
        `}
      >
        {typeData[type]}
      </div>
    </Link>
  );
};

export const TextButtonList = ({ children }: ContainerType) => {
  return (
    <Body2
      style={css`
        display: flex;
        flex-direction: row;
      `}
    >
      {children}
    </Body2>
  );
};

const Bar = ({ first }: SignUpLevelType) => {
  return (
    <div
      css={css`
        width: 100%;
        height: 1rem;
        background: ${first
          ? theme.palette.primary[200]
          : theme.palette.primary[500]};
        border-radius: 0.8rem;
      `}
    />
  );
};

export const SignUpLevel = ({ first }: SignUpLevelType) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 0.8rem;
      `}
    >
      <Body3
        style={css`
          display: flex;
          justify-content: center;
        `}
      >
        STEP {first ? '01' : '02'}. 약관동의
      </Body3>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          gap: 0.8rem;
        `}
      >
        <Bar />
        <Bar first={!!first} />
      </div>
    </div>
  );
};

export const CheckBox = ({
  textColumn,
  onClick,
  check,
  children,
}: CheckBoxType) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        gap: 0.8rem;
      `}
    >
      <button onClick={onClick} type="button">
        {check ? (
          <img src={checkIcon} alt="check" />
        ) : (
          <img src={unCheckIcon} alt="uncheck" />
        )}
      </button>
      <div
        css={css`
          display: flex;
          flex-direction: ${textColumn ? 'column' : 'row'};
          gap: 0.8rem;
        `}
      >
        {children}
      </div>
    </div>
  );
};

export const InfoContainer = ({
  yellowText,
  children,
  btnText,
  onClick,
}: InfoContainerType) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 4rem;
        align-items: center;
        padding: 8rem 0;
      `}
    >
      <Link to="/">
        <img src={Logo} alt="memeki" width={400} />
      </Link>
      <div
        css={css`
          width: 90rem;
          border-radius: 50px;
          border: 1px solid ${theme.palette.primary[400]};
          background: ${theme.palette.gray.white};
          padding: 4.8rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4rem;
          text-align: center;
        `}
      >
        <div
          css={css`
            color: ${theme.palette.primary[400]};
            ${theme.typography.header1}
          `}
        >
          {yellowText.split('\n').map((text) => (
            <>
              {text}
              <br />
            </>
          ))}
        </div>
        <div
          css={css`
            color: ${theme.palette.gray[500]};
            ${theme.typography.body1}
          `}
        >
          {children}
        </div>
        <ButtonBox type="long" onClick={onClick}>
          {btnText}
        </ButtonBox>
      </div>
    </div>
  );
};
