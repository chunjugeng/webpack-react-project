export default function(WrapComponent, initGt) {
    return class Gt extends React.Component {
        constructor() {
            super();
            this.state = {
                gt: null,
                gtLoaded: false,
                gtPassed: false
            }
        }

        handleGt = captchaObj => {
			this.setState({gt: captchaObj});
			captchaObj.onSuccess(() => {
				this.setState({gtPassed: true});
			});
			captchaObj.onRefresh(() => {
				this.setState({gtPassed: false});
			});
			captchaObj.onReady(() => {
				this.setState({gtLoaded: true});
			});
		};

        initDone = res => {
            let data = res.data.content.geetest;
            console.log(data, 'date')
            if (__client__) {
                window.initGeetest(
                    {
                      gt: data.gt,
                      challenge: data.challenge,
                      product: 'float',
                      offline: !data.success
                    },
                    this.handleGt
                );
            }
        };
        loadGt = e => {
            if(initGt) {
                initGt().then(this.initDone);
            }
        }
        render() {
            return(<WrapComponent loadGt={this.loadGt} {...this.state} {...this.props}/>);
        }
    }
}