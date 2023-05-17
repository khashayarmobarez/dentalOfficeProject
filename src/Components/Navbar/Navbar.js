import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  overflow: hidden;
`;



const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: right;
  margin:18px 30px 18px 0;
  border-radius: 0 0 0 10px;
  z-index: 10;
  transition: all 0.75s ease;
    @media (max-width: 950px) {
        flex-direction:column;
        background-color:#59B4C9;
        margin:0;
        top:0;
        right:0;
        width:60%;
        height:70vh;
        padding-top:3.5rem;
        color:#fff;
        align-items:flex-start;
        transform:${(props) => (props.open ? "translate(0)" : "translate(110%)") } ;
        li {
            margin-left:6%; 
        }
    }
    li{
        padding:25px 15px;

        &.first {
          order:3;
        }
      }
`



const Navbar = ({open}) => {
    return (    
        <Container>
             <Ul open={open} >
                <li><Link to='' className={styles.naVbutton}>کلینیک و محیط درمانی</Link></li>
                <li><Link to='' className={styles.naVbutton}>آموزش</Link></li>
                <li><Link to='' className={styles.naVbutton}>متخصصین همکار</Link></li>
                <li><Link to='' className={styles.naVbutton}>صفحه اصلی</Link></li>
                <li><Link to='' className={`${styles.naVbutton} ${styles.reserveButton}`}>نوبت دهی آنلاین</Link></li>
              </Ul>
        </Container>    
    );
};

export default Navbar;