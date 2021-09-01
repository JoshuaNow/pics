import React from "react";
// let i = 0;
class SearchBar extends React.Component {
  state = { term: "" };
  //   onInputChange(event) {
  //     console.log(event.target.value);
  //   }
  //   onInputClick() {
  //     i += 1;
  //     console.log(`i was clicked ${i} times `);
  //   }
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label> image search</label>
            <input
              type="text"
              value={this.state.term}
              //   onClick={this.onInputClick} theses 2 are the same
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
