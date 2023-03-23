import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <div className="form__wrapper">
            <div className="form__data">
              <label className="form__wrapper-label" htmlFor="first-name">
                <input className="form__wrapper-input" type="text" name="first-name" id="name" />
              </label>
              <label className="form__wrapper-label" htmlFor="last-name">
                <input className="form__wrapper-input" type="text" name="last-name" id="name" />
              </label>
            </div>
            <div className="form__data">
              <label className="form__wrapper-label" htmlFor="birthday">
                <input className="form__wrapper-input" type="date" name="birthday" id="name" />
              </label>
              <label htmlFor="country">
                <select name="country" id="country">
                  <option value="Choose your country">Choose your country</option>
                  <option value="Ukraine">Ukraine</option>
                </select>
              </label>
            </div>
            <div className="form__data">
              <label htmlFor="privacy-policy">
                <input type="checkbox" name="privacy-policy" id="privacy-policy" />
              </label>
              <label htmlFor="promo-notifications">
                <input type="checkbox" name="promo-notifications" id="privacy-policy" />
              </label>
            </div>
            <div className="form__data">
              <label htmlFor="gender">
                <input type="radio" name="gender" id="" /> <span>Male</span>
                <input type="radio" name="gender" id="" /> <span>Female</span>
              </label>
            </div>
            <div className="form__data">
              <input type="file" name="" id="" />
            </div>
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
