import React from 'react';
import { useNavigate } from 'react-router-dom';
import images from '../../assets/images';
import './style.scss'

function BlankPage() {
    const navigate = useNavigate()
    return (
        <div className="blank-page">
            <p className='text' style={{ color: '#c6d1df' }}>Page Not Found..</p>
            <button type='primary' onClick={() => navigate('/')}>Go To Back</button>
            <img src={images['404img']} alt='Propick.vn-404' title='Propick.vn-404' style={{ width: "50%" }} />
        </div>
    );
}
export default BlankPage;
