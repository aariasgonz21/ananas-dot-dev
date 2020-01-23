import React from 'react';
import range from 'lodash/range';
import styled from 'styled-components';
import ItemsCarousel from 'react-items-carousel';

const noOfItems = 6;
const noOfCards = 3;
const autoPlayDelay = 2000;
const chevronWidth = 40;

const Wrapper = styled.div`
  padding: 0 ${chevronWidth}px;
  max-width: 1000px;
  margin: 0 auto;
`;

const SlideItem = styled.div`
  height: 30vh;
  background: #EEE;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  margin-top: 7vh;
`;
const projects = ["SaveSpace", "Mahalo", "Eau De Hash Gang", "ChatRandom", "Daft Punk Keyboard TBA"];
const carouselItems = projects.map(name => (
  <SlideItem>
    {name}
  </SlideItem>
));

export default class AutoPlayCarousel extends React.Component {
  state = {
    activeItemIndex: 0,
  };

  componentDidMount() {
    this.interval = setInterval(this.tick, autoPlayDelay);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => this.setState(prevState => ({
    activeItemIndex: (prevState.activeItemIndex + 1) % (noOfItems-noOfCards + 1),
  }));

  onChange = value => this.setState({ activeItemIndex: value });

  render() {
    return (
      <Wrapper>
        <ItemsCarousel
          gutter={6}
          numberOfCards={noOfCards}
          activeItemIndex={this.state.activeItemIndex}
          requestToChangeActive={this.onChange}
          rightChevron={'>'}
          leftChevron={'<'}
          chevronWidth={chevronWidth}
          outsideChevron
          children={carouselItems}
        />
      </Wrapper>
    );
  }
}
