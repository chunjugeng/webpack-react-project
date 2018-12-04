
import {connect} from 'react-redux';
import ExperienceProject from '~/commoms/ExperienceProject';
import InterestUtil from '~/commoms/InterestUtil';

import * as ActionCreators from '~/stores/home/action';
import './home.scss';

import GoogleMap from '~/components/map/GoogleMap';
import PieChart from '~/commoms/PieChart';
import Footer from '~/layout/Footer';
import axios from 'axios';




class Home extends React.Component {
  constructor() {
    super();
  }
  componentWillMount() {
    axios.get('/feapi/errors').then(function(res) {
    })
  }
  componentDidMount() {
    this.props.initData();
   
  }

  componentWillReceiveProps(nextProps) {
    // console.log(this.props.addUtils,'props.addUtils', nextProps)
  }
  render() {
    return (
      <React.Fragment>
        <div className="wrapper Home">
          <div className="search-box">
            <div> search box </div>
          </div>

          
          <header>
            <div className="container">
              <ul>
                <li><a href="/home">项目及技术</a></li>
                <li><a href="/about">技术知识</a></li>
                <li><a href="/interview-faq">面试问题</a></li>
              </ul>
            </div>
          </header>

          <div className="container marTop50">
            <ExperienceProject data={this.props.projectData} />
          </div>
          <div className="" style={{'textAlign': 'center'}}>
            <PieChart />
          </div>

          <div className="interest-util marTop50">
            {/* <InterestUtil data={this.props.technologyTypes} onAddUtils={this.props.addUtils} utils={this.props.utils}/> */}
          </div>
          

          <GoogleMap/>

          <Footer/>

        </div>
      </React.Fragment>
    );
  }
}

export default connect(state=> {
    return {...state};
  }, ActionCreators
)(Home);