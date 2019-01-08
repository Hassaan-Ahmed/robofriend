import React, {Component} from 'react';

class ErrorHandling extends Component
{
    constructor(props){
        super(props);
        this.state = {
            hasError: false,
        }
    }
    componentDidCatch(error, errorInfo) {
        this.setState({ hasError: true});
    }
    render() {
        if (this.state.hasError){
          return  (
              <div>
                <h1>Ooops. That's is not good.</h1>
               </div>
          );
        }
        return this.props.children;
    }
}
export default ErrorHandling;