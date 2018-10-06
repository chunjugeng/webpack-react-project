import { inject, observer } from 'mobx-react';
import classNames from 'classnames';

// import './Dialog.scss';

@inject('dialog')
@observer
export default class Dialog extends React.Component {
    render() {
        let store = this.props.dialog;
        let {isOpenDialog} = store.app;
        return (<div className={classNames('Dialog fade', {
            'in': isOpenDialog
        })} style={{visibility: isOpenDialog? 'visible' : 'hidden'}} onClick={store.closeDialog}>
            <div className="modal-dialog">
                <div className={classNames('dialog-content')} onClick={store.disabledDefaultEvent} >
                    {this.props.closeBtn && <button className="closeBtn" onClick={store.closeDialog}>x</button>}
                    {this.props.children}
                </div>
            </div>
        </div>);
    }
}