/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { ReactComponent as SearchIcon } from '../../assets/images/search.svg';
import theme from '../../styles/theme';
import Logo from '../../assets/images/logo.png';
import likeIcon from '../../assets/images/like.svg';
import {
  ContainerType,
  SearchBarType,
  SortButtonType,
} from '../../types/globalType';
import memeCertifyIcon from '../../assets/images/memeCertify.png';
import { ReactComponent as RecentIcon } from '../../assets/images/recent.svg';
import { ReactComponent as PopularIcon } from '../../assets/images/popular.svg';
import { ReactComponent as GlobalIcon } from '../../assets/images/global.svg';
import { ReactComponent as YearIcon } from '../../assets/images/year.svg';
import selectOptions from '../../store/selectOptions';

export const SearchBar = ({ large }: SearchBarType) => {
  return (
    <div
      css={css`
        border: 3px solid ${theme.palette.primary[300]};
        display: flex;
        align-items: center;
        gap: 3.2rem;
        width: ${large ? `100%` : `59.5rem`};
        padding: 0.8rem 1.6rem;
        border-radius: 0.5rem;
      `}
    >
      <input
        placeholder="밈을 검색해 보세요"
        css={css`
          width: inherit;
          background-color: transparent;
          ${large ? theme.typography.body1 : theme.typography.body2}
        `}
      ></input>
      <SearchIcon
        height={`${large ? '30' : '20'}`}
        width={`${large ? '30' : '20'}`}
      />
    </div>
  );
};

// todo. 썸네일 디폴트 미미키, 동적으로 바꾸기
// 인증박스, 기본박스, 대기박스로 나누기
export const MemeBox = () => {
  return (
    <div
      css={css`
        width: 38.4rem;
        height: 39.5rem;
        border-radius: 1.6rem;
        background: ${theme.palette.primary[500]}; // 기본박스
        /* background: ${theme.palette.gray[300]}; // 대기박스
        color: ${theme.palette.gray[600]}; // 대기박스 */
        padding: 1.6rem;
        position: relative;
      `}
    >
      <img
        src={memeCertifyIcon}
        alt="밈인증"
        loading="lazy"
        css={css`
          position: absolute;
          left: 0;
          top: 0;
          /* visibility: hidden; // 인증마크 숨기기 */
        `}
      />
      <div
        css={css`
          background-color: ${theme.palette.gray.white};
          width: 35.2rem;
          height: 22.4rem;
          border-radius: 1.6rem;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <img src={Logo} alt="logo" width={100} />
      </div>
      <div
        css={css`
          ${theme.typography.header2}
          margin: 3.2rem 0 4.8rem;
        `}
      >
        제목...
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          ${theme.typography.body2}
        `}
      >
        <p>발행날짜</p>
        <div
          css={css`
            display: flex;
            gap: 0.4rem;
          `}
        >
          <img src={likeIcon} alt="like" />
          <p>like cnt</p>
        </div>
      </div>
    </div>
  );
};

export const MemeBoxList = ({ children }: ContainerType) => {
  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        width: 100%;
        gap: 2.4rem;
      `}
    >
      {children}
    </div>
  );
};

export const SortButton = ({ type, select }: SortButtonType) => {
  const color = select
    ? `${theme.palette.primary[500]}`
    : `${theme.palette.gray[500]}`;
  let imgIcon;
  switch (type) {
    case 'recent':
      imgIcon = [<RecentIcon fill={color} />, '최신'];
      break;
    case 'popular':
      imgIcon = [<PopularIcon fill={color} />, '인기'];
      break;
    case 'global':
      imgIcon = [<GlobalIcon fill={color} />, '국가별'];
      break;
    case 'year':
      imgIcon = [<YearIcon fill={color} />, '년도별'];
      break;
    default: // do nothing;
      break;
  }
  return (
    <div
      css={css`
        cursor: pointer;
        ${theme.typography.header1};
        color: ${color};
        display: flex;
        flex-direction: row;
        gap: 0.8rem;
      `}
    >
      {imgIcon}
    </div>
  );
};

export const SelectBox = ({
  type,
  selectClick,
  selectedOption,
}: {
  type: date | country | year;
}) => {
  const styles = {
    date: css`
      width: 10.3rem;
    `,
    country: css`
      width: 10.3rem;
    `,
    year: css`
      width: 13.5rem;
    `,
  };
  const [rotationDegree, setRotationDegree] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (optionName) => {
    selectClick(optionName);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setRotationDegree(isOpen ? 0 : 180);
  };

  return (
    <div
      css={css`
        position: relative; /* 부모 요소의 위치 기준으로 */
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
        z-index: 10;
        ${styles[type]}
      `}
    >
      <div
        onClick={toggleDropdown}
        css={css`
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 1.6rem;
        `}
      >
        <div
          css={css`
            color: ${theme.palette.gray[500]};
            ${theme.textVariants.body2Bold};
          `}
        >
          {selectedOption}
        </div>
        <div
          css={css`
            transition: 0.3s;
            animation: none;
            transform: rotate(${rotationDegree}deg);
          `}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/selectIcon.png`}
            alt="selectIcon"
            css={css`
              width: 1.5rem;
              height: 1rem;
            `}
          />
        </div>
      </div>
      {isOpen && (
        <ul
          css={css`
            position: absolute; /* 드롭다운 박스를 절대 위치로 설정 */
            top: 100%; /* 부모 요소 아래에 배치 */
            width: inherit;
            border-radius: 0.5rem;
            background: ${theme.palette.gray.white};
            box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.05);
          `}
        >
          {selectOptions[type].map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option.name)}
              css={css`
                display: flex;
                width: inherit;
                padding: 1.6rem;
                justify-content: flex-start;
                align-items: center;
                color: ${option.name === selectedOption
                  ? theme.palette.primary[500]
                  : theme.palette.gray[500]};
                ${theme.textVariants.body2Bold}
              `}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
