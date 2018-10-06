import {connect} from 'react-redux';
import * as ActionCreators from '~/stores/about/action';
import cn from 'classnames';


@connect(state => ({
    ...state
}),ActionCreators)
export default function Body(path, data) {
    return class extends React.Component {
        constructor() {
            super();
            this.state= {
            };
        }

        componentDidMount() {
            this.props.queryCurrData(this.props.data, path);
        }
        

        toggle=(index, ev)=> {
            this.props.toggle(index, ev);
            
        }

        render() {

            return(
                
                <div className="body-desc">
                    <div className="left">
                       {this.props.currData && this.props.currData.list.length>0 && this.props.currData.list.map((l, index)=> (
                           <div key={index}>
                                <h5 onClick={this.toggle.bind(this, index)}>{l.name}<span className={cn('triangle down', {
                                    'up': l.selectStatus
                                })}></span></h5>
                                <ul style={{display: l.selectStatus? 'block': 'none'}}>
                                    <li>sub1{l.selectStatus}</li>
                                    <li>sub2</li>
                                    <li>sub3</li>
                                </ul>
                           </div>
                       ))}

                       {/* {this.props.currData && this.props.currData.list.length>0 && this.props.currData.list.map((l, index)=> (
                           <div key={index}>
                                {console.log(l)}
                           </div>
                       ))} */}
                    </div>
                    <div className="right">
                        right  
                    </div>
                </div>
            );
        }
    }
};