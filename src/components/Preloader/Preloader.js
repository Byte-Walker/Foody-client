import React from 'react';
import BounceLoader from 'react-spinners/BounceLoader';

const Preloader = () => {
    return (
        <div>
            <BounceLoader
                color={'#f54747'}
                loading={true}
                size={75}
                css={{
                    display: 'block',
                    margin: '50px auto',
                }}
                speedMultiplier={2}
            />
        </div>
    );
};

export default Preloader;
