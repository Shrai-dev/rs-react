import React, { ChangeEvent, Component } from 'react';
import './SearchBar.scss';

export default class SearchBar extends Component {
  constructor(props: Record<string, never> | Readonly<Record<string, never>>) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  state = JSON.parse(localStorage.getItem('formData') || '{}');

  componentDidMount(): void {
    if (localStorage.getItem('formData') !== null) {
      this.setState(this.state);
    }
  }

  componentDidUpdate(): void {
    this.setLocalStorage();
  }

  componentWillUnmount(): void {
    this.setLocalStorage();
  }

  handleChange(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ searchValue: e.target.value });
    this.setLocalStorage();
  }

  handleFormSubmit(e: { preventDefault: () => void }): void {
    e.preventDefault();
    this.setLocalStorage();
  }

  setLocalStorage(): void {
    localStorage.setItem('formData', JSON.stringify(this.state));
  }

  render() {
    return (
      <div className="search__container">
        <form onSubmit={this.handleFormSubmit}>
          <input
            className="search__input"
            type="search"
            name="searchValue"
            aria-label="search"
            value={this.state.searchValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) => this.handleChange(e)}
          />
          <button className="search__btn" type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}
