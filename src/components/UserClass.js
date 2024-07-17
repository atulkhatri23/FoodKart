import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: "Dummy",
      Location: "Default",
      avatar_url: "http://dummy-photo.com",
      company: "IIT Patna",
      repos: "xyz",
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
    const { name, location, avatar_url, company, repos, bio } =
      this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} className="avatar" />
        <h2>Name: {name}</h2>
        <h3>{bio}</h3>
        <h3>Company: {company}</h3>
        <h3>Location: {location}</h3>
        <h4>Contact: +91 79924 57313</h4>
        <h4>github: {repos}</h4>
      </div>
    );
    // return (
    //   <div className="max-w-sm mx-auto bg-white shadow-xl rounded-lg overflow-hidden mt-12 p-8">
    //     <div className="flex justify-center">
    //       <img
    //         src={avatar_url}
    //         alt="User avatar"
    //         className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-md"
    //       />
    //     </div>
    //     <div className="mt-6 text-center">
    //       <h2 className="text-3xl font-bold text-gray-800">Name: {name}</h2>
    //       <p className="mt-4 text-gray-600">{bio}</p>
    //       <div className="mt-4">
    //         <h3 className="text-xl text-gray-800">Company: {company}</h3>
    //         <h3 className="mt-2 text-xl text-gray-800">Location: {location}</h3>
    //       </div>
    //       <div className="mt-6">
    //         <h4 className="text-lg text-gray-600">Contact: +91 79924 57313</h4>
    //         <h4 className="mt-2 text-lg text-gray-600">GitHub: {repos}</h4>
    //       </div>
    //     </div>
    //   </div>
    // );
  }
}

export default UserClass;
