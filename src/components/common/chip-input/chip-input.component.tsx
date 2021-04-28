import React, { ReactElement } from 'react';

import plusIcon from '../../../assets/images/plus_icon.svg';
import './chip-input.component.scss';

const ChipInput: any = ({
  placeholder,
  handleChange,
  keyword,
  keywords,
  updateState,
  name,
  list,
}: any): ReactElement => {
  // Function to handle add keyword
  const handleClick = () => {
    if (keyword) {
      keywords.push({
        active: true,
        name: keyword,
      });

      updateState({ [name]: '', [list]: keywords });
    }
  };

  //Function to set keyword active to false
  const unSelectKeyword = (idx: number, name: string) => {
    if (name === 'keyword') {
      const filterKeyword = keywords.find((keyword, index) => index === idx);

      if (filterKeyword) {
        filterKeyword.active = !filterKeyword?.active;
      }

      updateState({ [list]: keywords });
    }
  };

  const keywordDisplay =
    keywords && keywords.length
      ? keywords.map((ky, idx) => {
          return (
            <div
              className={
                ky.active ? 'keyword-active box' : 'keyword-inactive box'
              }
              key={idx}
              onClick={() => unSelectKeyword(idx, 'keyword')}
            >
              {ky.name}
            </div>
          );
        })
      : '';
  return (
    <form
      autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault();
        handleClick();
      }}
    >
      <div className="word-grid">
        {keywordDisplay}
        <div className="input-container">
          <input
            type="text"
            name={name}
            id="keyword_picker"
            className="keyword-input"
            placeholder={placeholder}
            onChange={handleChange}
            value={keyword}
          />
          <img className="plus-icon" src={plusIcon} alt="Add Icon" />
        </div>
      </div>
    </form>
  );
};

export default ChipInput;
