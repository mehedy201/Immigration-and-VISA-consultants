import React from 'react';
import Package from './Package/Package';
import './Packages.css'


const pakages = [
    {id: 1, name: 'Education Visa', img: `https://img.freepik.com/free-photo/red-haired-lady-eyeglasses-holds-books-shows-ok-sign_197531-23789.jpg?t=st=1650262594~exp=1650263194~hmac=b7cce83551cf18e492cfac99b54e794cb1af138d002fb5e842e406dbdfd7e2df&w=900`, price: 99, des: 'If you want to Education Visa Then our agency is a best for you becouse, We are specily provide student visa with low cost.'},
    {id: 2, name: 'Tourist & Visiting Visa', img: `https://img.freepik.com/free-photo/full-shot-travel-concept-with-landmarks_23-2149153258.jpg?3&t=st=1650264494~exp=1650265094~hmac=ad5566f67c455bc5526dfcad60c53825235133163d400797bfae6bd52d762eab&w=1060`, price: 199, des: 'Tour is a best part of man life. We are connected to world best turist country. we have multiple office in evry turist country.'},
    {id: 3, name: 'Working Visa', img: `https://img.freepik.com/free-photo/builder-construction-vest-orange-helmet-with-tablet_155003-22548.jpg?t=st=1650265404~exp=1650266004~hmac=0efb90f57c8702d0fee3ecef6896d3cb8b6be05a2bbd19c3615473958519ae84&w=900`, price: 155, des: 'Working visa is a very importent part in visa. Poor pepole need working visa so we are connect to word best working country.'}
]

const Packages = () => {
    return (
        <div className='container'>
            <h1 className='text-center package_title'>Our Pakages</h1>
                <div className="pakage_info">
                {
                    pakages.map(pakage => <Package key={pakage.id} pakage={pakage}></Package>)
                }
                </div>
        </div>
    );
};

export default Packages;