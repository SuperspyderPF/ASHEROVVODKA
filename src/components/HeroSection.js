import React, { useState, useEffect, useCallback } from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';

const Parse = require('parse/node');


function HeroSection() {
    const [loggedIn, setloggedIn] = useState(false);

    const loginStatus = useCallback(async () => {
        const currentUser = await Parse.User.current();

        if (currentUser !== null) {
            setloggedIn(true);
        }
        else {
            setloggedIn(false);
        }
    },[])

    useEffect(() => {
        loginStatus();
    }, [loginStatus]);


    function notLoggedin(){
        return (<Button link='/login' className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
        GET STARTED <i class="fas fa-angle-double-right"></i>
    </Button>)
    }

    function Loggedin(){
        return (<Button link='/home' className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
        GO TO PROFILE <i class="far fa-address-card"></i>
    </Button>)
    }

    function loginDisplay(loggedIn) {
        if (!loggedIn) {
            return notLoggedin();
        } else {
            return Loggedin();
        }
    }

    return (
        <div className='hero-container'>
            <img src="https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2022/02/1200/675/vodka.jpg?ve=1&tl=1" width="3000" height="500" />
            <h1>Purest Vodka</h1>
            <p>Imported</p>
            <div className="hero-btns">
            <Button link='/market' className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Who We import With <i class="fas fa-info-circle"></i>
                </Button>
                
                {loginDisplay(loggedIn)}
            </div>
            <p id="arrow"><i class="fas fa-angle-double-down"></i></p>
        </div>
    )
}

export default HeroSection