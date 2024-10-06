import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className=" text-white text-center py-4 mt-5 footer" >
            <div className="container">
                <p>&copy; {new Date().getFullYear()} MoviesHub. All rights reserved.</p>
                <p>
                    <a href="#privacy" className="text-white">Privacy Policy</a> | 
                    <a href="#terms" className="text-white"> Terms of Service</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
