import React from 'react'
import Pion1 from './Pion1'
import Pion2 from './Pion2'
import Pion3 from './Pion3'
import Pion4 from './Pion4'
import './Pion.css'


class DisplayPion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedPion: localStorage.getItem('players'),
      marginTop1: 0,
      marginLeft1: 0,
    }

  }

  displayPion1 = () => {
    let pionNumber1
    if (this.state.selectedPion == "1") {
      pionNumber1 = [<Pion1 />]
    } else if (this.state.selectedPion == "1,2") {
      pionNumber1 = [<Pion1 />]
    } else if (this.state.selectedPion == "1,3") {
      pionNumber1 = [<Pion1 />]
    } else if (this.state.selectedPion == "1,4") {
      pionNumber1 = [<Pion1 />]
    } else if (this.state.selectedPion == "1,2,3") {
      pionNumber1 = [<Pion1 />]
    } else if (this.state.selectedPion == "1,2,3,4") {
      pionNumber1 = [<Pion1 />]
    }

    return pionNumber1
  }
  displayPion2 = () => {
    let pionNumber2
    if (this.state.selectedPion == "2") {
      pionNumber2 = [<Pion2 />]
    } else if (this.state.selectedPion == "1,2") {
      pionNumber2 = [<Pion2 />]
    } else if (this.state.selectedPion == "2,3") {
      pionNumber2 = [<Pion2 />]
    } else if (this.state.selectedPion == "2,4") {
      pionNumber2 = [<Pion2 />]
    } else if (this.state.selectedPion == "1,2,3") {
      pionNumber2 = [<Pion2 />]
    } else if (this.state.selectedPion == "1,2,3,4") {
      pionNumber2 = [<Pion2 />]
    }

    return pionNumber2
  }
  displayPion3 = () => {
    let pionNumber3
    if (this.state.selectedPion == "3") {
      pionNumber3 = [<Pion3 />]
    } else if (this.state.selectedPion == "1,3") {
      pionNumber3 = [<Pion3 />]
    } else if (this.state.selectedPion == "2,3") {
      pionNumber3 = [<Pion3 />]
    } else if (this.state.selectedPion == "3,4") {
      pionNumber3 = [<Pion3 />]
    } else if (this.state.selectedPion == "1,2,3") {
      pionNumber3 = [<Pion3 />]
    } else if (this.state.selectedPion == "1,2,3,4") {
      pionNumber3 = [<Pion3 />]
    } else if (this.state.selectedPion == "2,3,4") {
      pionNumber3 = [<Pion3 />]
    }
    return pionNumber3
  }
  displayPion4 = () => {
    let pionNumber4
    if (this.state.selectedPion == "4") {
      pionNumber4 = [<Pion4 />]
    } else if (this.state.selectedPion == "1,4") {
      pionNumber4 = [<Pion4 />]
    } else if (this.state.selectedPion == "2,4") {
      pionNumber4 = [<Pion4 />]
    } else if (this.state.selectedPion == "3,4") {
      pionNumber4 = [<Pion4 />]
    } else if (this.state.selectedPion == "1,2,4") {
      pionNumber4 = [<Pion4 />]
    } else if (this.state.selectedPion == "1,2,3,4") {
      pionNumber4 = [<Pion4 />]
    } else if (this.state.selectedPion == "2,3,4") {
      pionNumber4 = [<Pion4 />]
    }
    return pionNumber4
  }

  componentDidMount() { }


  avancerPion1 = (e) => {
    const { diceOne, diceTwo } = this.props
    let { marginLeft1, marginTop1 } = this.state
    /*   let style = {
        marginTop: marginTop1, //max 270px <== à mettre en state pour que la condition soit prise en compte
        marginLeft: 0, // puis faire un setState dans un componentDidUpdate()
        position: 'absolute',
        width: '64px'
      }
      const diceTest = 3
        if (marginTop1 > 270) {

          this.setState({marginLeft: marginLeft1 + diceTest * 50})
        }else{
          this.setState({marginTop: marginTop1 + diceTest * 50})
        }
   */
    let fakeDice = 1
    console.log(e )
    this.setState({marginTop1: e + fakeDice*50})



  };

  /* componentDidUpdate(){
    return this.avancerPion1
  } */

  render() {
    const { diceOne, diceTwo } = this.props

    return (
      <div className="containerPion">
        <div className="containerTopPion">
          <div className="zonePion1">
            {/* {this.avancerPion1()} */}
            <button onClick={() => this.avancerPion1(this.state.marginTop1)}> ALLEZ UH!</button>
            <div style={{ marginTop: this.state.marginTop1,position:'relative'}} className="containerPion1">
      {this.displayPion1()}
    </div>
          </div>
          <div className="zonePion2">
            <div className="container2Pion2">
              {this.displayPion2()}
            </div>
          </div>
        </div>
        <div className="containerBottomPion">
          <div className="zonePion3">
            <div className="containerPion3">
              {this.displayPion3()}
            </div>
          </div>
          <div className="zonePion4">
            <div className="containerPion4">
              {this.displayPion4()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DisplayPion