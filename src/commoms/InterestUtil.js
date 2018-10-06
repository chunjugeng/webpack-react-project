
import styled from 'styled-components';
const Container = styled.div`
    width: 85%;
    h6 {
        margin-bottom: 5px;
        font-size: 16px;
        font-weight: 300;
    }
    >div {
        display: flex;
        flex-direction: row;
        p {
            font-size: 14px;
            padding: 20px 0;
        }
        .left {
            flex: 1.5;
            padding-right: 30px;
            
            .show {
                padding: 15px;
                border: 1px solid #e4e4e4;
                height: 200px;
                // width: 95%;
                background: #f0f0f0;
                ul li {
                    padding: 5px 15px 5px 8px;
                    margin: 2px 5px;
                }
                
            }
        }
        .right {
            flex: 2;
            h6 {font-size: 13px;}
        }
        ul {
            margin: 8px 0 15px;
            li {
                margin: 0 5px;
                display: inline-block;
                padding: 5px 8px;
                border: 1px solid #c4e3bf;
                background: rgba(72,166,62,.1);
                cursor: pointer;
                border-radius: 4px;
            }
        }
    }
    
`
export default class InterestUtil extends React.Component {
    constructor() {
        super();
        this.state= {
            addUtil: []
        }
    }
    addUtil=(value)=> {
        this.props.onAddUtils(value);
        console.log(this.props, 'this.props')
    }
    componentDidMount() {
       
    }
    render() {
        const {data, utils} = this.props;
        return (<Container>
            <h6>感兴趣的技术</h6>
            <div>
                <div className="left">
                    <p>已选技术</p>
                    <div className="show">
                        <ul>
                            {utils.length>0 && utils.map((d, index)=> (<li key={index}>{d}<span>&nbsp;&nbsp;x</span></li>))}
                            
                        </ul>
                    </div>
                </div>
                <div className="right">
                    <p>添加技术</p>
                    {data.map((d, index)=>(
                        <div key={index}>
                            <h6>{d.name}</h6>
                            <ul>
                                {d.list.map((v, id)=> (<li key={id} onClick={this.addUtil.bind(this, v)}>{v}</li>))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </Container>);
    }
}