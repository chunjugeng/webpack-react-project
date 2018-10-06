
import styled from 'styled-components';
const Container = styled.div`
    h6 {
        margin-bottom: 5px;
        font-size: 16px;
        font-weight: 300;
    }
    > table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        font-size: 14px;
        thead {
            height: 30px;
            line-height: 30px;
            background: #48a63e;
            color: white;
            
        }
        tbody {
            background: white;
            tr {
                border-bottom: 1px solid #f0f0f0;
                cursor: pointer;
                
                &:hover {
                    background: rgba(72,166,62,.1);
                    transition: all .3s;
                }
            }
            
        }
        thead, tbody {
            text-align: center;
            tr {
                width: 100%;
                td {
                    padding: 15px 0;
                }
            
            }

        }
    }
`
export default class ExperienceProject extends React.Component {
    
    componentDidMount() {
        // this.props.initData();
        // console.log(this.props)
    }
    render() {
        const {data} = this.props;
        return (<Container>
            <h6>项目经验</h6>
            <table>
                <thead>
                    <tr>
                        <th>项目名称</th>
                        <th>简介</th>
                        <th>项目名称</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d, index)=> <tr key={index}>
                        <td>{d.name}</td>
                        <td>{d.desc}</td>
                        <td>{d.util}</td>
                    </tr>)}
                </tbody>
            </table>
        </Container>);
    }
}