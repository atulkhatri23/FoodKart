import React from "react";
import { Link } from "react-router-dom";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: "Dummy",
      Location: "Default",
      avatar_url: "http://dummy-photo.com",
      company: "IIT Patna",
      html_url: "xyz",
      bio: "abc",
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
    const { name, location, avatar_url, company, html_url, bio } =
      this.state.userInfo;

    return (
      <div className="max-w-sm mx-auto bg-white shadow-xl rounded-lg overflow-hidden mt-12 p-8">
        <div className="flex justify-center">
          <img
            src={avatar_url}
            alt="User avatar"
            className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-md"
          />
        </div>
        <div className="mt-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800">{name}</h2>
          <p className="mt-4 text-gray-600">{bio}</p>
          <div className="mt-4">
            <h3 className="text-xl text-gray-800">{company}</h3>
          </div>
          <div className="mt-6">
            <h4 className="text-lg text-gray-600">Contact: +91 79924 57313</h4>
            <h4 className="mt-2 text-lg text-gray-600">
              GitHub:{" "}
              <Link
                to={html_url}
                target="_blank"
                className="hover:text-blue-500"
              >
                @atulkhatri23
              </Link>
            </h4>
            <h4 className="mt-2 text-lg text-gray-600">
              LinkedIn:{" "}
              <Link
                to={"https://www.linkedin.com/in/atulkhatri23/"}
                target="_blank"
                className="hover:text-blue-500"
              >
                @atulkhatri23
              </Link>
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default UserClass;
