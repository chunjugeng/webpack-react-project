export default class GtBtn extends React.Component {
    state = {
        smsText: '发送验证码',
        countdown: 10,
        countdowning: false
    }
    start =()=> {
        if (this.state.countdowning) return; //禁止连续点击
        if (this.props.fetch) {
            this.props.fetch();
        }
        
        if (this.props.ready) {
            this.setState({countdown: 10}, ()=> this.countdown());
        }
    }
    static timeId = 0
    countdown =()=> {
        GtBtn.timeId = setInterval(()=> {
            if (this.state.countdown >= 1) {
                // -- this.state.countdown;
                // this.setState({countdown: this.state.countdown});
                this.setState(prev => {
                    let count = --prev.countdown;
                    return {
                      countdown: count, 
                      countdowning: true
                    };
                  });
            } else {
                clearInterval(GtBtn.timeId);
                this.setState({countdown: '重新发送', countdowning: false});
            }
        }, 1000);
    }
    componentWillReceiveProps(nextProps) {
        if (!this.props.ready && nextProps.ready) {
            this.countdown();
        }
    }
    render() {
        return(
            <button name="send-verification-code-btn" disabled={this.props.disabled} onClick={this.start}>{this.props.ready ? this.state.countdown : this.state.smsText}</button>
        )
    }
}