import { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super()
    console.log('props', props)
    this.name = props.name
    this.state = {pais: 'México', counter: 0}
    // this.sumar = this.sumar.bind(this)
  }

  // sumar(){
  sumar = () => {
    this.setState({counter: this.state.counter + 1})
  }

  componentDidMount(){
    console.log('El componente se montó')
  }

  componentDidUpdate(){
    console.log('El componente se actualizó')
  }

  render() {
    console.log('state', this.state)
    return (
      <div>
        <h1>Mi nombre es: {this.props.name}</h1>
        <div>Contador: {this.state.counter}</div>
        <button onClick={this.sumar}>Sumar</button>
        Hello Koders desde React con clases
      </div>
    )
  }
}
