import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Baby = () => {
     const asset = useContext(AssetContext);
//   console.log("asssset", asset);
    return (
        <div>
            <h3>Baby</h3>
            <p>Asset: {asset}</p>
        </div>
    );
};

export default Baby;