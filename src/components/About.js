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
        <h1>About Class Component</h1>
        <h2>This is a food delivery web app.</h2>
        {/* <User /> */}
        <UserClass name={"Atul passing props"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is a food delivery web app.</h2>
//       {/* <User /> */}
//       <UserClass name={"Atul passing props"} />
//     </div>
//   );
// };

export default About;
