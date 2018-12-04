
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import * as ActionCreator from '~/stores/about/action';
import { connect } from 'react-redux';
import { ItemNav, NavLink } from '~/commoms/NavLink';
import Body from './Body';
import './body.scss';

import technology from '~/json/technology-types.json';

class About extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            // routerParams: []
        };


    }
    componentWillMount() {
        this.props.initData();
    }
    componentDidMount() {
        // this.props.initData();

    }
    
    render() {
        let { routerParams } = this.state;
        const { data } = this.props;
        return (<div className='About'>
            <Router>
                {data && data.length > 0 &&
                    <div>
                        <NavLink data={data} />
                        <Switch>
                            {
                                data.map((d, index) => <Route path={"/" + d.path} component={Body(d.path, data)} key={index}></Route>)
                            }
                            <Route path="*" component={Body(data[0].path, data)}></Route>
                        </Switch>
                    </div>
                }
            </Router>
        </div>);
    }
}

export default connect(state => {
    return ({ ...state })
}, ActionCreator)(About);