import React from 'react';
import styled from 'styled-components';
import ItemsCarousel from 'react-items-carousel';
//import chatrandom from '../images/chatrandom.png'

const noOfItems = 6;
const noOfCards = 3;
const noOfCardsMobile = 1;
const autoPlayDelay = 3000;
const chevronWidth = 40;

const Wrapper = styled.div`
  padding: 0 ${chevronWidth}px;
  max-width: 1000px;
  margin: 0 auto;
`;

const SlideItem = styled.div`
  height: 250px;
  border-radius: 50%;
  -webkit-border-radius: 50%; 
  -moz-border-radius: 50%; 
  background: ${props => props.img};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  margin-top: 7vh;
  margin-left: 9vh;
`;
const projects = {
    "p1":{
        "name":"SaveSpace",
        "img":"#aaf0d1",
        "link":"https://github.com/aariasgonz21/SaveSpace-frontend",
    },
    "p2":{
        "name":"Mahalo",
        "img":"#aaf0d1",
        "link":"https://github.com/mwestervelt/mahalo-2",
    },
    "p3":{
        "name":"Eau De Hash Gang",
        "img":"#aaf0d1",
        "link":"https://github.com/aariasgonz21/Eau-de-Hash-Gang-frontend",
    }, 
    "p4":{
        "name":"ChatRandom",
        "img":"#aaf0d1",
        "link":"https://github.com/aariasgonz21/chatrandom",
    }, 
    "p5":{
        "name":"Daft Punk Keyboard TBA",
        "img":"#aaf0d1",
        "link":"#",
    }
};

let carouselItems = (projects) => {
    let arr = [];
    for (const key in projects) {
        arr.push(
            <a href={projects[key].link}>
                <SlideItem img={projects[key].img}>
                    {projects[key].name}
                </SlideItem>
            </a>
        )
    }
  return(arr);
};

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
          numberOfCards={window.innerWidth < 775 ? noOfCardsMobile : noOfCards}
          activeItemIndex={this.state.activeItemIndex}
          requestToChangeActive={this.onChange}
          rightChevron={'>'}
          leftChevron={'<'}
          chevronWidth={chevronWidth}
          outsideChevron
          children={carouselItems(projects)}
        />
      </Wrapper>
    );
  }
}
