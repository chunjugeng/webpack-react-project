import classNames from 'classnames';
import GtBtn from './GtBtn';
import './Register.scss';

import {observer, inject} from 'mobx-react';

@inject('reg')
@observer
export default class Reg extends React.Component {
    showGt =()=> {
        this.props.reg.showGt(this.props.loadGt, this.props.gt);
    }
    componentWillReceiveProps(nextProps) {
        
		if (!this.props.gt && nextProps.gt) {
			nextProps.gt.appendTo(this.gtBox);
		}
    }
    componentDidUpdate(prevProps) {
		if (!prevProps.gtPassed && this.props.gtPassed) {
			this.props.reg.fetchVerifyCode(this.props.gt, this.props.gtPassed);
		}
	}
    render() {
        let store = this.props.reg;
        let { 
            phone, 
            error,
            pwd,
            smsCode,
            isAcceptAgreement,
            ready
        } = store.app;
        return(
            <div className="Register">
                <div className="boxCon">
                    <form name="regForm" onSubmit={store.create}>
                        <div>Register</div>
                        <div className="group-input">
                            <input type="text" name="phone" placeholder="请输入手机号码" className="phone" onChange={store.onUIChange} value={phone}/> 
                            <GtBtn fetch={this.showGt} disabled={!store.isPhoneValid} ready={ready} />
                        </div>
                        <div className="group-input">
                            <input type="text" name="smsCode" className="sms-code" onChange={store.onUIChange} value={smsCode} />
                        </div>
                        <div className="group-input">
                            <input type="password" name="pwd" className="pwd" onChange={store.onUIChange} value={pwd} />
                        </div>
                        <div className="accept-agreement">   
                            <label> 
                                <input type="checkbox" onChange={store.onUIChange} checked={isAcceptAgreement} name="isAcceptAgreement" />
                                <span className={classNames('agreementBtn', {
                                    "checked": isAcceptAgreement
                                })}></span>&nbsp;我已阅读并同意<a>《xx协议》</a>
                            </label>
                        </div>
                        <div className="errMsg">{error}</div>
                        <div className="group-input">
                            <button disabled={store.needRegBtnDisabled} type="submit">注册</button>
                        </div>
                    </form>
                </div>
                <div ref={ref => (this.gtBox = ref)} className="geetest-mask-box" style={{display: store.needShowGt ? 'block': 'none'}}></div>
            </div>
        );
    }
}