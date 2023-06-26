import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

import styled from "styled-components";

// import triangle from '../../media/PNGs/triangle.png'

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
  z-index: 21;
  transition: all 0.75s ease;
    @media (max-width: 950px) {
        flex-direction:column;
        background-color:#59B4C9;
        margin:0;
        top:0;
        right:0;
        width:70%;
        height:78vh;
        padding-top:3.5rem;
        color:#fff;
        align-items:flex-start;
        transform:${(props) => (props.open ? "translate(0)" : "translate(100%)") } ;
        li {
            margin-left:6%; 
        }
    }
    li{
        padding:20px 15px;

        &.first {
          order:3;
        }
      }
`



const Navbar = (props) => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


    return (    
        <Container>
             <Ul open={props.open} >
               
                <li><Link to='/soon' className={styles.naVbutton} onClick={props.onClick}>کلینیک و محیط درمانی</Link></li>
               
                <li><Link to='/education' className={styles.naVbutton} onClick={props.onClick}>آموزش</Link></li>
               
                <li><Link to='/soon' className={styles.naVbutton} onClick={props.onClick}>متخصصین همکار</Link></li>
               
                <li><Link to='/Home' className={styles.naVbutton} onClick={props.onClick}>صفحه اصلی</Link></li>
               
                <li><Link to='/Reserve' className={`${styles.naVbutton} ${styles.reserveButton}`} onClick={props.onClick}>نوبت دهی آنلاین</Link></li>

                <li className={styles.galleryButton}>
                    <Link to='/Home' className={styles.naVbutton} onClick={toggleDropdown}>گالری <span className={styles.dropdownTriangle}></span></Link>
                       {isDropdownOpen && (
                        <ul className={styles.dropdownMenu}>
                          <li>
                            <NavLink to="/soon" activeClassName={styles.active} onClick={props.onClick}>
                              محیط درمانی
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/soon" activeClassName={styles.active} onClick={props.onClick}>
                              کنفرانس ها
                            </NavLink>
                          </li>
                          {/* Add more dropdown menu items as needed */}
                        </ul>
                      )}
                </li>
               
                <li><Link to='/soon' className={styles.naVbutton} onClick={props.onClick}>مقالات</Link></li>
              </Ul>
        </Container>    
    );
};

export default Navbar;