import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getCharacter } from '../actions';
class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // call our action
    this.props.getCharacter();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      <h3>F*$^ OFF! Just kidding :)  We're loading...</h3>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
  return {
    characters: state.characters,
    error: state.error,
    fetchingCharacters: state.fetchingCharacters
  };
};
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  { getCharacter
    /* action creators go here */
  }
)(CharacterListView);
