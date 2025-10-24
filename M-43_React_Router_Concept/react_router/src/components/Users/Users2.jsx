import React, { use } from 'react';

const Users2 = ({usersPromise}) => {
    const users = use(usersPromise)
    console.log('users 2 suspense data load:', users)
    return (
        <div>
            this is users 222
        </div>
    );
};

export default Users2;