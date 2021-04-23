import React, { Fragment, ReactElement, useState } from 'react';
import { IBrandingQuoteModel } from '../../../interfaces/branding-quote.model';
import { TEMPLATES } from '../../../constants';

import GetQuoteButton from '../../common/form-element/get-quote-button';
import './branding-detail.container.scss';
import plusIcon from '../../../assets/images/plus_icon.svg';
import cPickerOne from '../../../assets/images/color_picker_one.svg';
import cPickerTwo from '../../../assets/images/color_picker_two.svg';
import cPickerThree from '../../../assets/images/color_picker_three.svg';
import cPickerFour from '../../../assets/images/color_picker_four.svg';
import cPickerFive from '../../../assets/images/color_picker_five.svg';
import cPickerSix from '../../../assets/images/color_picker_six.svg';
import cPickerSeven from '../../../assets/images/color_picker_seven.svg';
import cPickerEight from '../../../assets/images/color_picker_eight.svg';
import cPickerNine from '../../../assets/images/color_picker_nine.svg';
import cPickerTen from '../../../assets/images/color_picker_ten.svg';
import cPickerEleven from '../../../assets/images/color_picker_eleven.svg';
import cPickerTwelve from '../../../assets/images/color_picker_design.svg';
import templateImage from '../../../assets/images/template_image.svg';
import previewIcon from '../../../assets/images/preview_icon.svg';

interface IntitialState {
  keywords: { name: string; active: boolean }[];
  colorPicker: string;
  brands: { name: string; active: boolean }[];
  keyword: string;
  brandName: string;
  isTemplate: boolean;
  isSelling: any;
  isSEO: any;
}

const BrandingDetailContainer: React.FC<any> = (
  props: IBrandingQuoteModel,
): ReactElement => {
  const initialState: IntitialState = {
    keywords: [],
    colorPicker: '',
    brands: [],
    keyword: '',
    brandName: '',
    isTemplate: false,
    isSelling: '',
    isSEO: '',
  };
  const {
    handleSubmit,
    quoteState,
    errors,
    onSubmit,
    handleState,
    onError,
  } = props;
  const [state, setState] = useState(initialState);
  const {
    keyword,
    keywords,
    colorPicker,
    brands,
    brandName,
    isTemplate,
    isSEO,
    isSelling,
  } = state;

  // Handle text box, radio button and checkbox change event
  const handleChange = ($event: React.FormEvent<EventTarget>) => {
    const target = $event.target as HTMLInputElement;
    const value = target.value;
    if (target && target.name === 'keyword_picker') {
      setState((prevState) => {
        return {
          ...prevState,
          keyword: value,
        };
      });
    } else if (target && target.name === 'color_picker') {
      setState((prevState) => {
        return {
          ...prevState,
          colorPicker: value,
        };
      });
    } else if (target && target.name === 'logo_picker') {
      setState((prevState) => {
        return {
          ...prevState,
          brandName: value,
        };
      });
    }
  };

  // Function to handle add keyword
  const handleClick = (name: string) => {
    if (keyword && name === 'keyword') {
      keywords.push({
        active: true,
        name: keyword,
      });

      setState((prevState) => {
        return {
          ...prevState,
          keyword: '',
          keywords,
        };
      });
    } else if (name === 'brandName' && brandName) {
      brands.push({
        active: true,
        name: brandName,
      });

      setState((prevState) => {
        return {
          ...prevState,
          brandName: '',
          brands,
        };
      });
    }
    handleState(state);
  };

  //Function to set keyword active to false
  const unSelectKeyword = (idx: number, name: string) => {
    if (name === 'keyword') {
      const filterKeyword = keywords.find((keyword, index) => index === idx);

      if (filterKeyword) {
        filterKeyword.active = !filterKeyword?.active;
      }

      setState((prevState) => {
        return {
          ...prevState,
          keywords,
        };
      });
    } else {
      const filterBrand = brands.find((brand, index) => index === idx);
      if (filterBrand) {
        filterBrand.active = !filterBrand?.active;
      }

      setState((prevState) => {
        return {
          ...prevState,
          brands,
        };
      });
    }
    handleState(state);
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

  const brandDisplay =
    brands && brands.length
      ? brands.map((ky, idx) => {
          return (
            <div
              className={
                ky.active ? 'keyword-active box' : 'keyword-inactive box'
              }
              key={idx}
              onClick={() => unSelectKeyword(idx, 'brandName')}
            >
              {ky.name}
            </div>
          );
        })
      : '';
  const { fromPage } = props;

  return (
    <div className="branding-container">
      <div className="technical-info">
        {fromPage ? <h1></h1> : <h1>Brand Identity factors</h1>}
        <h4 className={fromPage ? 'wd-technical-info' : ''}>
          Technical Information
        </h4>
        {fromPage ? (
          <Fragment>
            <span>
              Choose which option suits you better (Template option tends to
              cost less than a custom tailored design)
            </span>
            <div className="website-option">
              <span
                className={`template-option`}
                onClick={() => {
                  setState((prevState) => {
                    return {
                      ...prevState,
                      isTemplate: true,
                    };
                  });
                }}
              >
                <h4>NWOcoin</h4>
              </span>
              <span
                onClick={() => {
                  setState((prevState) => {
                    return {
                      ...prevState,
                      isTemplate: false,
                    };
                  });
                }}
              >
                <h4>Custom Design</h4>
              </span>
            </div>
            {isTemplate && (
              <Fragment>
                {/* <span>Choose a Template</span> */}
                <div className="template-grid">
                  <span>
                    Soon we will offer paid vocational training on website
                    development. NWOcoin™ will revolutionize the planet,
                    providing universal income and employment. This is one
                    facet.
                  </span>
                  {/* {TEMPLATES &&
                    TEMPLATES.length &&
                    TEMPLATES.map((template, idx) => {
                      return (
                        <div className="template" key={idx}>
                          <h4>{template.name}</h4>
                          <img src={templateImage} />
                          <button>
                            <img src={previewIcon} />
                            <span>Preview</span>
                          </button>
                        </div>
                      );
                    })} */}
                </div>
              </Fragment>
            )}
            {!isTemplate && <span>Type of pages included on the website</span>}
          </Fragment>
        ) : (
          <span>Pick words/adjectives that best describe your business</span>
        )}
        {!isTemplate && (
          <form
            autoComplete="off"
            onSubmit={(e) => {
              e.preventDefault();
              handleClick('keyword');
            }}
          >
            <div className="word-grid">
              {keywordDisplay}
              <div className="input-container">
                <input
                  type="text"
                  name="keyword_picker"
                  id="keyword_picker"
                  className="keyword-input"
                  placeholder={fromPage ? 'Add Page' : 'Add your word'}
                  onChange={handleChange}
                  value={keyword}
                />
                <img
                  className="plus-icon"
                  src={plusIcon}
                  alt="Add Icon"
                  onClick={() => handleClick('keyword')}
                />
              </div>
            </div>
          </form>
        )}
        {fromPage && !isTemplate && (
          <div className="form-group radio-section">
            Do you plan on Selling items on your website?
            <div className="radio-options">
              <span
                className={isSelling ? 'green-bg' : 'white-bg'}
                onClick={() => {
                  setState((prevState) => {
                    return {
                      ...prevState,
                      isSelling: true,
                    };
                  });
                }}
              >
                YES
              </span>
              <span
                className={isSelling === false ? 'red-bg' : 'white-bg'}
                onClick={() => {
                  setState((prevState) => {
                    return {
                      ...prevState,
                      isSelling: false,
                    };
                  });
                }}
              >
                NO
              </span>
            </div>
          </div>
        )}

        {fromPage && !isTemplate && (
          <div className="form-group radio-section">
            Do you require strong SEO for your website?
            <div className="radio-options">
              <span
                className={isSEO ? 'green-bg' : 'white-bg'}
                onClick={() => {
                  setState((prevState) => {
                    return {
                      ...prevState,
                      isSEO: true,
                    };
                  });
                }}
              >
                YES
              </span>
              <span
                className={isSEO === false ? 'red-bg' : 'white-bg'}
                onClick={() => {
                  setState((prevState) => {
                    return {
                      ...prevState,
                      isSEO: false,
                    };
                  });
                }}
              >
                NO
              </span>
            </div>
          </div>
        )}
      </div>

      {!isTemplate && (
        <div className="color-palette">
          {fromPage ? (
            <span>Pick color palette to explore</span>
          ) : (
            <span>Pick color palette </span>
          )}
          <div className="color-picker-grid">
            <div className="color-picker-image">
              <input
                type="radio"
                name="color_picker"
                value="color_picker_a"
                id="color_picker_a"
                onChange={handleChange}
              />
              <label className="c-picker-a" htmlFor="color_picker_a">
                <img
                  src={cPickerOne}
                  className={
                    colorPicker === 'color_picker_a'
                      ? 'picker-border c-picker-a-img'
                      : 'c-picker-a-img'
                  }
                />
              </label>
            </div>
            <div className="color-picker-image">
              <input
                type="radio"
                name="color_picker"
                value="color_picker_b"
                id="color_picker_b"
                onChange={handleChange}
              />
              <label className="c-picker-b" htmlFor="color_picker_b">
                <img
                  src={cPickerTwo}
                  className={
                    colorPicker === 'color_picker_b'
                      ? 'picker-border c-picker-b-img'
                      : 'c-picker-b-img'
                  }
                />
              </label>
            </div>
            <div className="color-picker-image">
              <input
                type="radio"
                name="color_picker"
                value="color_picker_c"
                id="color_picker_c"
                onChange={handleChange}
              />
              <label className="c-picker-c" htmlFor="color_picker_c">
                <img
                  src={cPickerThree}
                  className={
                    colorPicker === 'color_picker_c'
                      ? 'picker-border c-picker-c-img'
                      : 'c-picker-c-img'
                  }
                />
              </label>
            </div>
            <div className="color-picker-image">
              <input
                type="radio"
                name="color_picker"
                value="color_picker_d"
                id="color_picker_d"
                onChange={handleChange}
              />
              <label className="c-picker-d" htmlFor="color_picker_d">
                <img
                  src={cPickerFour}
                  className={
                    colorPicker === 'color_picker_d'
                      ? 'picker-border c-picker-d-img'
                      : 'c-picker-d-img'
                  }
                />
              </label>
            </div>
            <div className="color-picker-image">
              <input
                type="radio"
                name="color_picker"
                value="color_picker_e"
                id="color_picker_e"
                onChange={handleChange}
              />
              <label className="c-picker-e" htmlFor="color_picker_e">
                <img
                  src={cPickerFive}
                  className={
                    colorPicker === 'color_picker_e'
                      ? 'picker-border c-picker-e-img'
                      : 'c-picker-e-img'
                  }
                />
              </label>
            </div>
            <div className="color-picker-image">
              <input
                type="radio"
                name="color_picker"
                value="color_picker_f"
                id="color_picker_f"
                onChange={handleChange}
              />
              <label className="c-picker-f" htmlFor="color_picker_f">
                <img
                  src={cPickerSix}
                  className={
                    colorPicker === 'color_picker_f'
                      ? 'picker-border c-picker-f-img'
                      : 'c-picker-f-img'
                  }
                />
              </label>
            </div>
            <div className="color-picker-image">
              <input
                type="radio"
                name="color_picker"
                value="color_picker_g"
                id="color_picker_g"
                onChange={handleChange}
              />
              <label className="c-picker-g" htmlFor="color_picker_g">
                <img
                  src={cPickerSeven}
                  className={
                    colorPicker === 'color_picker_g'
                      ? 'picker-border c-picker-g-img'
                      : 'c-picker-g-img'
                  }
                />
              </label>
            </div>
            <div className="color-picker-image">
              <input
                type="radio"
                name="color_picker"
                value="color_picker_h"
                id="color_picker_h"
                onChange={handleChange}
              />
              <label className="c-picker-h" htmlFor="color_picker_h">
                <img
                  src={cPickerEight}
                  className={
                    colorPicker === 'color_picker_h'
                      ? 'picker-border c-picker-h-img'
                      : 'c-picker-h-img'
                  }
                />
              </label>
            </div>
            <div className="color-picker-image">
              <input
                type="radio"
                name="color_picker"
                value="color_picker_i"
                id="color_picker_i"
                onChange={handleChange}
              />
              <label className="c-picker-i" htmlFor="color_picker_i">
                <img
                  src={cPickerNine}
                  className={
                    colorPicker === 'color_picker_i'
                      ? 'picker-border c-picker-i-img'
                      : 'c-picker-i-img'
                  }
                />
              </label>
            </div>
            <div className="color-picker-image">
              <input
                type="radio"
                name="color_picker"
                value="color_picker_j"
                id="color_picker_j"
                onChange={handleChange}
              />
              <label className="c-picker-j" htmlFor="color_picker_j">
                <img
                  src={cPickerTen}
                  className={
                    colorPicker === 'color_picker_j'
                      ? 'picker-border c-picker-j-img'
                      : 'c-picker-j-img'
                  }
                />
              </label>
            </div>
            <div className="color-picker-image">
              <input
                type="radio"
                name="color_picker"
                value="color_picker_k"
                id="color_picker_k"
                onChange={handleChange}
              />
              <label className="c-picker-k" htmlFor="color_picker_k">
                <img
                  src={cPickerEleven}
                  className={
                    colorPicker === 'color_picker_k'
                      ? 'picker-border c-picker-k-img'
                      : 'c-picker-k-img'
                  }
                />
              </label>
            </div>
            <div className="color-picker-image">
              <input
                type="radio"
                name="color_picker"
                value="color_picker_l"
                id="color_picker_l"
                onChange={handleChange}
              />
              <label className="c-picker-l" htmlFor="color_picker_l">
                <img
                  src={cPickerTwelve}
                  className={
                    colorPicker === 'color_picker_l'
                      ? 'picker-border c-picker-l-img'
                      : 'c-picker-l-img'
                  }
                />
              </label>
            </div>
          </div>
        </div>
      )}
      {/* Logo section starts */}
      {!fromPage && !isTemplate && (
        <div className="pick-logo">
          <form
            autoComplete="off"
            onSubmit={(e) => {
              e.preventDefault();
              handleClick('brandName');
            }}
          >
            <span>Pick which brand identities you like the most</span>

            <div className="word-grid">
              {brandDisplay}
              <div className="input-container">
                <input
                  type="text"
                  name="logo_picker"
                  id="keyword_picker"
                  className="keyword-input"
                  placeholder="Add your word"
                  onChange={handleChange}
                  value={brandName}
                />
                <img
                  className="plus-icon"
                  src={plusIcon}
                  alt="Add Icon"
                  onClick={() => handleClick('brandName')}
                />
              </div>
            </div>
          </form>
        </div>
      )}
      <div className="price-container">
        <div className="sticky-content">
          {fromPage ? (
            <h4>Approximate service cost</h4>
          ) : (
            <h4> Starting from</h4>
          )}
          <div className="price-container">
            {!isTemplate && (
              <span className="price">{fromPage ? '$2998' : '$500'}</span>
            )}
            {isTemplate && <span className="price">$799</span>}
          </div>
        </div>
        <div
          className={
            fromPage ? `wd-button-container` : `branding-btn-container`
          }
        >
          <GetQuoteButton
            quoteState={quoteState}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
            state={state}
            onError={onError}
            fromPage={fromPage ? `wd` : `branding`}
          />
        </div>
      </div>
    </div>
  );
};

export default BrandingDetailContainer;
