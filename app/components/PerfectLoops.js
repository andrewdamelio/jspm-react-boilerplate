import React from 'react';
import RedditApi from '../services/redditApi';
import ExtractGifs from '../services/extractGifs';

export default class PerfectLoops extends React.Component {

  state = {
    redditGifs: [],
  };

  componentDidMount() {
    RedditApi.load()
      .then(ExtractGifs)
      .then((res) => {
        this.setState({ redditGifs: res });
      });
  }

  render() {
    const gifs = this.state.redditGifs.map((value, idx) => {
      return (
        <img key={ idx } src={ value } style={ styles.gifs } />
      );
    });

    return (
      <div>
        { gifs }
      </div>
    );
  }
}

const styles = {
  gifs: {
    display: 'block',
    float: 'left',
    objectFit: 'cover',
    width: '50vw',
    height: '50vh',
  },
};
