import React from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function Drop_down() {

    const options = [
        'one', 'two', 'three'
      ];
      const defaultOption = options[0];
    return (
        <>
            <Dropdown options={options}  value={defaultOption} placeholder="Select an option" />
        </>
    )
}

export default Drop_down
