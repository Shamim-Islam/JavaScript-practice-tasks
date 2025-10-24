import React from 'react';

const User = ({user}) => {
    const {name, email, phone} = user;
    return (
        <div>
            <h3>Name:{name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default User; 