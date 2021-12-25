import React, { Component} from "react";

const AuthContext = React.createContext();



//Context class for passing context between components, mainly TopBar
export class AuthProvider extends Component{
    state ={
        title: "", ////title to be displayed on the left of topbar
    }

    setTitle =(newTitle) =>{
        this.setState({title: newTitle}) //function to update the title
}

render(){
    const title = this.state.title;
    const setTitle = this.setTitle;
    return(
        <AuthContext.Provider value={{
            title,
            setTitle
        }} >
            {this.props.children} 
        </AuthContext.Provider>
    )
}
}


export default AuthContext;