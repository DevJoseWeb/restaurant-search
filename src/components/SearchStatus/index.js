import { h, Component } from 'preact';
import cx from 'classnames';

import SearchFilters from './SearchFilters.js';
import SearchResults from './SearchResults.js';

import style from './searchstatus.css';

import filterIcon from '../../assets/icons/filter.svg';
import doneIcon from '../../assets/icons/done.svg';

class SearchStatus extends Component {
  constructor() {
    super();

    this.state = {
      showFilters: false
    };

    this.handleShowFilters = this.handleShowFilters.bind(this);
  }

  handleShowFilters() {
    this.setState({
      showFilters: !this.state.showFilters
    });
  }

  render() {
    const { showFilters } = this.state;
    const { search, results } = this.props;

    return (
      <div id={style.searchstatus}>
        <SearchFilters show={showFilters} />
        <SearchResults results={results} />
        <SettingsButton
          onClick={this.handleShowFilters}
          toggled={showFilters}
        />
      </div>
    );
  }
}

class SettingsButton extends Component {
  render() {
    const { onClick, toggled } = this.props;

    const classes = {
      'fab--filter': !toggled,
      'fab--done': toggled
    };

    const classnames = cx('fab', classes);

    return (
      <button class={classnames} onClick={onClick}>
        <img src={filterIcon} alt="Show filters" class="filter-icon" />
        <img src={doneIcon} alt="Done" class="done-icon" />
      </button>
    );
  }
}

export default SearchStatus;
