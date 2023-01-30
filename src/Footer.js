import React from 'react';
import Qoute from './Qoute';
import { useState } from 'react';

import SettingsIcon from '@mui/icons-material/Settings';

const Footer = () => {
    const [state, setState] = useState({
        isClicked: false,
    });
    console.log(state.isClicked);
    return (
        <div className='basis-1/12 flex justify-between relative'>
            <div className='flex w-64'>
                <div className='w-1/5 flex'>
                    <SettingsIcon
                        className={`sip ${state.isClicked ? "rotate" : "bg-black"}`}
                        style={{ color: 'white', opacity: '0.8', fontSize: '1.5rem', margin: 'auto', transform: 'rotate(0deg)' }}
                        onClick={() => {
                            setState(prevState => ({
                                isClicked: !prevState.isClicked
                            }));
                        }}

                    />
                </div>
                <div className='w-4/5 flex'>
                    <div className='my-auto'>
                        <div className='place-tittle'>Ghranduk, Nepal</div>
                        <div className='source'>Tobse Fritz / Unsplash
                            {/* <span>
                                <SettingsIcon style={{ color: 'white', opacity: '0.8', margin: 'auto' }} />
                                <SettingsIcon style={{ color: 'white', opacity: '0.8', margin: 'auto' }} />
                            </span> */}
                        </div>
                    </div>
                </div>

            </div>
            <div className='flex w-full absolute -top-7 md:static '><Qoute /></div>
            <div className='flex w-64'>3</div>
        </div>
    )
}

export default Footer