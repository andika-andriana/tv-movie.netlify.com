import React, { Component } from "react";
import { connect } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import { Grid, Card, Icon, Image } from "semantic-ui-react";
import axios from "axios";
import Footers from "./Footers";

// carousel images
var Images = [
  "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/1200450/pexels-photo-1200450.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/3069306/pexels-photo-3069306.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/2865263/pexels-photo-2865263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/3379932/pexels-photo-3379932.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/275977/pexels-photo-275977.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/3069306/pexels-photo-3069306.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/1200450/pexels-photo-1200450.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/2865263/pexels-photo-2865263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/3379932/pexels-photo-3379932.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/2865263/pexels-photo-2865263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
];

// styles
const centered = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

class Beranda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataHome: []
    };
  }

  getDataHome = () => {
    axios.get(`http://api.tvmaze.com/search/shows?q=a`).then(res => {
      this.setState({
        dataHome: res.data
      });
    });
  };

  componentDidMount() {
    this.getDataHome();
  }

  render() {
    return (
      <div>
        <Carousel
          autoPlay
          centerMode
          centerSlidePercentage={40}
          showStatus={false}
        >
          {Images.map((data, key) => {
            return (
              <div key={key}>
                <img src={data} alt="" />
              </div>
            );
          })}
        </Carousel>
        <Grid style={centered}>
          {this.state.dataHome.map((data, key) => {
            var ratings = { ...data.show.rating };

            var images = { ...data.show.image };

            if (data.show.image === null) {
              images =
                "https://images.pexels.com/photos/1121967/pexels-photo-1121967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
            } else {
              images = images.original;
            }

            if (ratings.average === null) {
              ratings = 0;
            } else {
              ratings = ratings.average;
            }

            return (
              <Grid.Column width={3} key={key}>
                <Card>
                  <Image src={images} wrapped ui={false} />
                  <Card.Content>
                    <Card.Header>{data.show.name}</Card.Header>
                    <Card.Description>{data.show.status}</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <Icon name="star" />
                    {ratings}
                  </Card.Content>
                </Card>
              </Grid.Column>
            );
          })}
        </Grid>
        <Footers />
      </div>
    );
  }
}

const mapDispatchtoProps = dispatch => {
  return dispatch({
    type: "ACTIVE_ITEM",
    activeItem: "beranda"
  });
};

const mapStatetoProps = () => {
  return {};
};

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Beranda);
