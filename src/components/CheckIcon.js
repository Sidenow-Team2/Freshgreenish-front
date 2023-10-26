import React from 'react';
import checkedImage from '../assets/icon/isChecked=true.svg';
import uncheckedImage from '../assets/icon/isChecked=false.svg';

function CheckIcon({ isChecked }) {
    return (
        <span className="check-icon">
            <img src={isChecked ? checkedImage : uncheckedImage} alt={isChecked ? "Checked" : "Unchecked"} />
        </span>
    );
}

export default CheckIcon;
