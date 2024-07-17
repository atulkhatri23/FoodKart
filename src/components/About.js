import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <UserClass name={"Atul"} />
      </div>
    );
  }
}

export default About;
