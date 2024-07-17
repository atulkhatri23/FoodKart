import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: "Dummy",
      Location: "Default",
      avatar_url: "http://dummy-photo.com",
    };
  }

  async componentDidMount() {
    // API Call
    const data = await fetch("https://api.github.com/users/atulkhatri23");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} className="avatar" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @atulkhatri23</h4>
      </div>
    );
  }
}

export default UserClass;