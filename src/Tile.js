import React, { Component } from 'react';
import './Tile.css';

export default class Tile extends Component {
    tileClick(props) {
        props.gameLoop(props.loc, props.turn)
    }
    render() {
        const divStyle = {
            width: '25%',
            height: '150px',
            fontSize: '60px',
            background: 'teal',
            border: '8px solid skyblue',
            display: 'inline-block',
            float: 'left',
            textAlign: 'center',
            lineHeight: '150px',
        }
        return(
            <div className={'tile' + this.props.loc} onClick={() => this.tileClick(this.props)} style={divStyle}>
                <p>{this.props.value}</p>
            </div>
        )
    }
}