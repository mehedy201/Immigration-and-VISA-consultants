import React from 'react';
import './AboutImigration.css'
import student from '../../../images/student.png'
import worker from '../../../images/worker.png'
import business from '../../../images/buisness.png'

const AboutImigration = () => {
    return (
            <div className="container">
                <div className="content_info d-flex justify-content-between">
                    <div className="student_visa p-3">
                        <img width='70px'src={student} alt="" />
                        <h4 className='title_color'>Student Visa</h4>
                        <p className='font_style'>We are Conected to multiple University in Europe like United Status, Canada, etc. It's very importent for student. our agency is best for education visa...</p>
                    </div>
                    <div className="worker_visa p-3">
                        <img width='70px'src={worker} alt="" />
                        <h4 className='title_color'>Worker Visa</h4>
                        <p className='font_style'>If you Work to europe country. Then I will give you working visa is very short time. We are connected to multiple company in europe...</p>
                    </div>
                    <div className="turist_vsa p-3">
                        <img width='70px'src={business} alt="" />
                        <h4 className='title_color'>Tourist Visa</h4>
                        <p className='font_style'>Jurney is good part of life. If you tour multiple country then you will gain perfect knolwge in every country. We have multiple staf in evry country...</p>
                    </div>
                </div>
            </div>
    );
};

export default AboutImigration;