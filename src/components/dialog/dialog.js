import React, { component } from 'react';
import { Modal, Button } from 'antd';
import './dialog.scss'

class Dialog extends Component {
    render() {

        return (
            <div>
                <h1>测试，是否能够成功渲染</h1>
            </div>
        )
    }
}

// export default Dialog

ReactDOM.render(
    <Dialog />,
    document.getElementById('test')
)