import React from 'react';
import Package from './Package/Package';
import './Packages.css'


const pakages = [
    {id: 1, name: 'Education Visa', img: `https://i.ibb.co/cJdzQpb/student.png`, price: 99, des: 'If you want to Education Visa Then our agency is a best for you becouse, We are specily provide student visa with low cost.'},
    {id: 2, name: 'Tourist & Visiting Visa', img: `https://i.ibb.co/JCxmB6s/travale.png`, price: 199, des: 'Tour is a best part of man life. We are connected to world best turist country. we have multiple office in evry turist country.'},
    {id: 3, name: 'Working Visa', img: `https://i.ibb.co/zSK33M9/worker.png`, price: 155, des: 'Working visa is a very importent part in visa. Poor pepole need working visa so we are connect to word best working country.'}
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