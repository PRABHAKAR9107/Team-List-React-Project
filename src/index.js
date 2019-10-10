import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Person = ({ img, name, job, children }) => {
  return (
    <article className="person">
      <img
        src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
        alt="team-member"
      />
      <h4>{name}</h4>
      <h4>{job}</h4>
    </article>
  );
};

const TeamList = () => {
  return (
    <section className="person-list">
      <Person img="34" name="john" job="developer" />
      <Person img="25" name="Dave" job="designer" />
      <Person img="52" name="lokem" job="developer" />
    </section>
  );
};

ReactDOM.render(<TeamList />, document.getElementById("root"));
