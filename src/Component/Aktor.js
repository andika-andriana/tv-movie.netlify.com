import React, { Component } from "react";
import { connect } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import { Grid, Input, Card, Icon } from "semantic-ui-react";
import axios from "axios";
import Footers from "./Footers";

class Aktor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFilm: [],
      dataAktor: []
    };
  }

  getDataFilm = () => {
    axios.get(`http://api.tvmaze.com/search/shows?q=a`).then(res => {
      this.setState({ dataFilm: res.data });
    });
  };

  getDataAktor = () => {
    axios.get(`http://api.tvmaze.com/search/people?q=b`).then(res => {
      this.setState({ dataAktor: res.data });
    });
  };

  pencarianAktor = e => {
    if (e.target.value === "") {
      this.getDataAktor();
    } else {
      axios
        .get(`http://api.tvmaze.com/search/people?q=${e.target.value}`)
        .then(res => {
          this.setState({
            dataAktor: res.data
          });
        });
    }
  };

  componentDidMount() {
    this.getDataFilm();
    this.getDataAktor();
  }

  render() {
    return (
      <div>
        <Carousel
          autoPlay
          centerMode
          centerSlidePercentage={15}
          showStatus={false}
          showThumbs={false}
        >
          {this.state.dataFilm.map((data, key) => {
            var images = { ...data.show.image };

            if (data.show.image === null) {
              images =
                "https://images.pexels.com/photos/1121967/pexels-photo-1121967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
            } else {
              images = images.original;
            }

            return (
              <div key={key}>
                <img alt="" src={images} />
              </div>
            );
          })}
        </Carousel>
        <Grid style={{ marginTop: 20, marginLeft: 20 }}>
          <Grid.Column width={4}>
            <Carousel
              autoPlay
              centerMode
              centerSlidePercentage={20}
              showStatus={false}
            >
              {this.state.dataAktor.map((data, key) => {
                var images = { ...data.person.image };

                if (data.person.image === null) {
                  images =
                    "https://react.semantic-ui.com/images/avatar/large/matthew.png";
                } else {
                  images = images.original;
                }
                return (
                  <div key={key}>
                    <img src={images} alt="" />
                  </div>
                );
              })}
            </Carousel>
          </Grid.Column>
          <Grid.Column width={11}>
            <Input
              fluid
              icon={{ name: "search", circular: true, link: true }}
              placeholder="Cari Aktor..."
              onChange={e => {
                this.pencarianAktor(e);
              }}
            />
            <Grid style={{ marginTop: 20 }}>
              {this.state.dataAktor.map((data, key) => {
                var images = { ...data.person.image };

                if (data.person.image === null) {
                  images =
                    "https://react.semantic-ui.com/images/avatar/large/matthew.png";
                } else {
                  images = images.original;
                }
                return (
                  <Grid.Column width={4} key={key}>
                    <Card
                      image={images}
                      header={data.person.name}
                      meta={data.person.gender}
                      extra={
                        <Icon name="star">
                          <p>{data.score}</p>
                        </Icon>
                      }
                    />
                  </Grid.Column>
                );
              })}
            </Grid>
          </Grid.Column>
        </Grid>
        <Footers />
      </div>
    );
  }
}

const mapDispatchtoProps = dispatch => {
  return dispatch({
    type: "ACTIVE_ITEM",
    activeItem: "aktor"
  });
};

const mapStatetoProps = () => {
  return {};
};

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Aktor);
