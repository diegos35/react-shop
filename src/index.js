import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App'; //component

ReactDOM.render(<App />, document.getElementById('app'));
/* HOOC = HIGH  ORDER Component(componentes de orden superio) */
//import React, {Component} from 'react';


//Versiones anteriores HOOC: HIGH  ORDER Component
/* function ComponentWrapper(WrapperComponent){
    
    class Component extends Component{
        render(){
            return <WrapperComponent {...this.props} />;
        }
    }
} */

//Otras sintaxis
/* class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello woeld</h1>
            </div>
        )
    }
} */


//Con estado Stateful
/* const Button = () => {
    //HOOKS Stateful(componente con estado)
    const [name, setName] = useState('Hola mundo'); //pasar el estado
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
} */


//Component Stateless
/* const Button = ({ text  }) => <ButtonRed text={text} /> ; */


//export default index;

/* import ReactDOM from 'react-dom';
import App from './routes/App'; //component

ReactDOM.render(<App />, document.getElementById('app')); */