import Reg from '~/components/register/Register';
import {inject, observer}from 'mobx-react';
import Dialog from '~/components/dialog/Dialog';
import Gt from '~/utils/Gt';
import Api from '../../services/Api';
import './Home.scss';

let Register = Gt(Reg, Api.gtInit);

@inject('dialog')
@observer
export default class Home extends React.Component {
    render() {
        let dialogStore = this.props.dialog;
        return(
            <React.Fragment>
                <div className="wrapper Home">
                    <Register/>
                    <div className="container dialog-com">
                        <div className="boxCon">
                            <p onClick={dialogStore.openDialog}>Dialog</p>
                            <Dialog closeBtn={true}>
                                <div className="modal-title">
                                    <h6>title</h6>
                                </div>
                                <div className="modal-content">
                                    <p>“点融”（www.dianrong.com，以下简称“本网站”）是上海点荣金融信息服务有限责任公司为用户提供出借、融资信息的居间服务网络平台。本声明包含本网站的使用条款，请您在浏览和使用本网站之前，务必仔细阅读。您在浏览和使用本网站的同时，视为您接受以下条款。上海点荣金融信息服务有限责任公司在法律许可的范围内享有对本声明进行解释、修订及变更的权利；</p>
                                    <p>1、本网站仅提供出借、融资信息的居间服务，请您务必仔细阅读和了解本网站各项说明或细则，谨慎出借，风险自负。</p>

                                    <p>2、本网站承诺保障用户个人隐私，原则上不向任何第三方泄露用户个人信息。但当司法机关、监管机构或其他政府部门依据法律程序，要求本网站提供您的个人信息时，本网站将及时通知用户，并根据相关部门的要求提供您的相关信息资料；</p>

                                    <p>3、本网站建议用户加强自我保护，提高防范意识。由于您对用户账号、密码等个人信息保管不善或告知他人而导致的任何个人信息、账户信息的泄露及损失，本网站不承担任何责任；</p>
                                    
                                </div>
                            </Dialog>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}