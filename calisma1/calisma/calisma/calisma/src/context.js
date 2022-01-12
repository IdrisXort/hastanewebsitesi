import React, { Component } from 'react'

const DataContext = React.createContext ();
// provider , consumeer
 export  class ContextProvider  extends Component {
    
state   = {
    users : [
        {
            name: "Hasan",
            surname: "Kurtini",
            deperment: "IT"
        },
        {
            name: "enes",
            surname: "dogan",
            department: "electronic",
        },
    ]
};
render() {

        return (
        <DataContext.Provider value={this.state}>
            {this.props.children}
        </DataContext.Provider>
        )
    }
}
const DataConsumer= DataContext.Consumer;
export default DataConsumer ;