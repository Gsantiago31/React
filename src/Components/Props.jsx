import React,{Component} from "react";

class Props extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
            <h1>Mi novia se llama {this.props.nombre}</h1>

            </>
         );
    }
}
 
export default Props;