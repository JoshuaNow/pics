import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import secret from "./SecretFile";

class App extends React.Component {
  state = { images: [] };
  // when the call is completed we get a notifcation as a promise this is the old method
  // onSearchSubmit(term) {
  //   axios
  //     .get("https://api.unsplash.com/search/photos", {
  //       params: { query: term },
  //       headers: {
  //         Authorization: secret,
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response.data.results);
  //     });
  // }
  onSearchSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: secret,
      },
    });
    this.setState({
      images: response.data.results,
    });
  };

  render() {
    return (
      <div className="ui container " style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found : {this.state.images.length}
      </div>
    );
  }
}
export default App;
