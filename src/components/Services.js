import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info: "Hotels serve free cocktails"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "Hotels arrange Hiking"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info: "Hotels arrange free shuttle van"
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "Hotels arrange free Bear"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services"></Title>
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
