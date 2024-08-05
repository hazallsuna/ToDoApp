import React, {Component} from "react";

const UserContext = React.createContext();
//provider ve consumer verecek 
state = {
    users:[]
}


export class UserProvider extends Component {
  render() {
    return (
      <UserContext.Provider value = {this.state}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}
// valueyi kulanmak istiyorsam userconsumerı kullanmam gerekiyor
const UserConsumer = UserContext.Consumer;

export default UserConsumer;
