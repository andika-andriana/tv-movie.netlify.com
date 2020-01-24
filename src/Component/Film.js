import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Image, Input, Card, Icon } from "semantic-ui-react";
import axios from "axios";
import Footers from "./Footers";

class Film extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFilm: []
    };
  }

  getDataFilm = () => {
    axios.get(`http://api.tvmaze.com/search/shows?q=man`).then(res => {
      this.setState({ dataFilm: res.data });
    });
  };

  pencarianFilm = e => {
    if (e.target.value === "") {
      this.getDataFilm();
    } else {
      axios
        .get(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then(res => {
          this.setState({
            dataFilm: res.data
          });
        });
    }
  };

  componentDidMount() {
    this.getDataFilm();
  }

  render() {
    return (
      <div>
        <Grid celled="internally">
          <Grid.Row>
            <Grid.Column width={3}>
              <Image src="https://images.pexels.com/photos/3131971/pexels-photo-3131971.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
              <Image
                style={{ marginTop: 20 }}
                src="https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Image
                style={{ marginTop: 20 }}
                src="https://images.pexels.com/photos/2694344/pexels-photo-2694344.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
            </Grid.Column>
            <Grid.Column width={10}>
              <Input
                fluid
                icon={{ name: "search", circular: true, link: true }}
                placeholder="Cari Film..."
                onChange={e => {
                  this.pencarianFilm(e);
                }}
              />
              <Grid style={{ marginTop: 10, marginLeft: 10 }}>
                {this.state.dataFilm.map((data, key) => {
                  var ratings = { ...data.show.rating };

                  var images = { ...data.show.image };

                  if (data.show.image === null) {
                    images =
                      "https://images.pexels.com/photos/1121967/pexels-photo-1121967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
                  } else {
                    images = images.original;
                  }

                  if (ratings.average === null) {
                    ratings = 5;
                  } else {
                    ratings = ratings.average;
                  }

                  return (
                    <Grid.Column width={5} key={key}>
                      <Card
                        image={images}
                        header={data.show.name}
                        meta={"Status: " + data.show.status}
                        description={data.show.language}
                        extra={
                          <Icon name="star">
                            <p>{ratings}</p>
                          </Icon>
                        }
                      />
                    </Grid.Column>
                  );
                })}
              </Grid>
            </Grid.Column>
            <Grid.Column width={3}>
              <Image src="https://images.pexels.com/photos/2919589/pexels-photo-2919589.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
              <Image
                style={{ marginTop: 20 }}
                src="https://images.pexels.com/photos/872510/pexels-photo-872510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
              <Image
                style={{ marginTop: 20 }}
                src="https://images.pexels.com/photos/3113527/pexels-photo-3113527.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Footers />
      </div>
    );
  }
}

const mapDispatchtoProps = dispatch => {
  return dispatch({
    type: "ACTIVE_ITEM",
    activeItem: "film"
  });
};

const mapStatetoProps = () => {
  return {};
};

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(Film);
