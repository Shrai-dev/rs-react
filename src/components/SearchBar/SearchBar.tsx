import React, { ChangeEvent, Component } from 'react';
import './SearchBar.scss';

export default class SearchBar extends Component {
  constructor(props: Record<string, never> | Readonly<Record<string, never>>) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  state = {
    searchValue: '',
  };
  searchData!: string | null;

  componentDidMount() {
    this.searchData = JSON.parse(localStorage.getItem('searchValue') || '{}');
    if (localStorage.getItem('searchValue')) {
      this.setState(this.searchData);
    } else {
      this.setState({
        searchValue: '',
      });
    }
  }

  handleChange(e: ChangeEvent<HTMLInputElement>) {
    this.setState({ searchValue: e.target.value });
  }

  handleFormSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    localStorage.setItem('searchValue', JSON.stringify(this.state));
  }

  render() {
    return (
      <div className="search__container">
        <form onSubmit={this.handleFormSubmit}>
          <input
            className="search__input"
            type="search"
            name="searchValue"
            id=""
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
