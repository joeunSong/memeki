/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import theme from '../../styles/theme';
import { ContainerType, NavItemProps } from '../../types/globalType';
import Logo from '../../assets/images/logo.png';
import { SearchBar } from './component';
import { logout, selectUser } from '../../store/slice/userSlice';

const Nav = ({ children }: ContainerType) => {
  return (
    <div
      css={css`
        background-color: ${theme.palette.semantic.background};
        z-index: 99;
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        padding: 2.4rem 0;
      `}
    >
      <div
        css={css`
          display: flex;
          width: 120rem;
          justify-content: space-between;
          align-items: center;
        `}
      >
        {children}
      </div>
    </div>
  );
};

const NavList = ({ children }: ContainerType) => {
  return (
    <div
      css={css`
        display: flex;
        gap: 5rem;
        color: ${theme.palette.primary[500]};
        ${theme.typography.body1};
      `}
    >
      {children}
    </div>
  );
};

const NavItem = ({ children, to, onClick }: NavItemProps) => {
  return (
    <Link to={to}>
      <button
        type="button"
        onClick={onClick}
        css={css`
          text-decoration-line: none;
          transition: 0.5s all;
          &:hover {
            color: rgba(181, 166, 104, 0.7);
          }
        `}
      >
        {children}
      </button>
    </Link>
  );
};

// Todo: react router dom의 쿼리파라미터 주소구별로 헤더 모양 바꾸기(서치바 유/무)
export const Header = ({ search }: { search?: boolean }) => {
  const { accessToken } = useSelector(selectUser);
  const dispatch = useDispatch();
  // console.log('redux accessToken: ', accessToken);

  const onLogoutClick = async () => {
    try {
      const response = await axios.get('https://api.memeki.kr/auth/signout', {
        headers: {
          Authorization: accessToken,
        },
      });
      if (response.data.statusCode === '200') {
        dispatch(logout());
        sessionStorage.setItem('token', '');
        alert(response.data.contents);
      }
    } catch (error) {
      console.log('logout error: ', error);
    }
  };

  return (
    <Nav>
      <Link to="/">
        <img src={Logo} alt="memeki" width={120} />
      </Link>
      {search && <SearchBar />}
      <NavList>
        <NavItem to="/memeDoc?page=1&namespace=1">밈문서</NavItem>
        <NavItem to="/pending?page=1">대기문서</NavItem>
        {!accessToken ? (
          <NavItem to="/login">로그인</NavItem>
        ) : (
          <>
            <NavItem to="/myPage">마이페이지</NavItem>
            <NavItem to="/" onClick={onLogoutClick}>
              로그아웃
            </NavItem>
          </>
        )}
      </NavList>
    </Nav>
  );
};
