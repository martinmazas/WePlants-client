import React from "react";
import UserInfo from "./userInfo";
import Container from "@material-ui/core/Container";
import "./mainPage.css";
import WeatherAPI from "./weatherAPI";
import SearchPlant from "./searchPlant";
import MyPlants from "./myPlants";


const MainPage = (props) => {
  return (
    <Container maxWidth="sm">
      <UserInfo userInfo={props} />
      <WeatherAPI />
      <SearchPlant userInfo={props}/>
      <MyPlants result={props}/>
    </Container>
  );
};
export default MainPage;
