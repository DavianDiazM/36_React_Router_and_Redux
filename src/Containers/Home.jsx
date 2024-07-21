import React from "react";
import { connect } from "react-redux";
import Search from "../Components/Search";
import Categories from "../Components/Categories";
import Carousel from "../Components/Carousel";
import CarouselItem from "../Components/CarouselItem";
import "../assets/styles/App.scss";

const Home = ({ myList, trends, originals}) => {

  return (
    <>
      <Search />
      {myList.length > 0 && (
        <Categories title="Mi Lista">
          <Carousel>
            {myList.map((item) => (
              <CarouselItem key={item.id} {...item} />
            ))}
          </Carousel>
        </Categories>
      )}
      <Categories title="Tendencias">
        <Carousel>
          {trends.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      <Categories title="Originales de Platzi Video">
        <Carousel>
          {originals.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};

const mapGlobalStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapGlobalStateToProps, null)(Home);
//connect(props, actions)