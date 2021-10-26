import { render } from '@testing-library/react';
import React from 'react'
class Addition extends React.Component {
    constructor() {
        super();
        this.state = {
            num1: '20',
            num2: '',
            Result: ''
        }
    }
    handlenum2 = (event) => {
        this.setState({
            num2: event.target.value
        })
    }
    addexe = (event) => {
        this.setState({ Result: parseInt(this.state.num1) + parseInt(this.state.num2) });
        event.prevent.default();
    }

    subexe = (event) => {
        this.setState({ Result: parseInt(this.state.num2) - parseInt(this.state.num1
            
            ) });
        event.prevent.default();
    }

    render() {
        return (
            <div className='main_div'>
                <div className='center_div'>
                    <form>
                        <h3>Enter a value to add/substract</h3>
                        <div id="inputstyle">
                            <input type="text" value={this.state.num2} onChange={this.handlenum2}></input>
                        </div>
                        <div className='btn_div'>
                            <button type="submit" id="ab1" onClick={this.addexe}>Add</button>
                        </div>
                        <div className='btn_div1'>
                            <button type="submit" id="sb1" onClick={this.subexe}>Substract</button>
                        </div>
                        <div id="Rs">
                            Result:{this.state.Result}
                        </div>
                    </form>
                </div>
            </div>


        )
    }
}

export default Addition

