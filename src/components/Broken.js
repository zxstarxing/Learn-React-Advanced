import React, { PureComponent } from 'react';

class Broken extends PureComponent {
    render() {
        return (
            <div>
                {null.map(val => val)}
            </div>
        )
    }
}
export default Broken;