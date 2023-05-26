import React, { Component } from 'react';
import styled from 'styled-components';
import styles from './NavHam.module.css'
import logo from '../../media/logo512.png'

import Navbar from './Navbar';


const Div = styled.div`
    display:none;
    z-index:22;
    flex-direction:column;
    align-items:center;
    position:fixed;
    top:20px;
    right:30px;
    width:1.8rem;
    height:1.8rem;

    @media (max-width:950px) {
        display:flex;
        justify-content:space-around;
    }
    
    div {
        width:1.8rem;
        height:0.2rem;
        background:#fff ;
        border-radius:10px;
        transform-origin: 1px;
        transition: all 0.25s ease;

        &:nth-child(1) {
            transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0)") }
        }
        &:nth-child(2) {
            transform: ${(props) => (props.open ? "translate(-100%) " : "translate(0) ") };
            opacity: ${(props) => (props.open ? 0 : 100)}
        }
        &:nth-child(3) {
            transform: ${(props) => (props.open ? "rotate(-45deg)" : "rotate(0)") }
        }
    }  

`

class NavHam extends Component {
    constructor() {
        super();
        this.state = {
            open: false
        }
    }


    clickHandler = () => {
        this.setState({ open: !this.state.open })
    }

    render() {
        return (
        <div className={styles.Container}>

            <div className={styles.logoContainer}>
                <img src={logo} alt='logo' className={styles.logo}/>
            </div>

            {/* top box for mobile version */}
            <div className={styles.coloredBox}  ></div>

            <Div open={this.state.open} onClick={this.clickHandler} >
               <div></div> 
               <div></div> 
               <div></div> 
            </Div>

            <Navbar open={this.state.open} />

        </div>    
        );
    }
}

export default NavHam;