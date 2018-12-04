
import styled from 'styled-components';

const FooterContainer = styled.div`
    margin-top: 20px;
    padding: 20px 0;
    background: rgba(255, 255, 255, 1);
    footer {
        margin: 0 auto;
        width: 80%;
        display: table;
        & >div {
            padding: 0 10px;
            display: table-cell;
            width: 50%;
            &.map {
                height: 200px;
            }
        }
        
    }

`;
class Footer extends React.Component {
    constructor() {
        super();
        this.state = {
            lng: 0, 
            lat: 0,
            zoom: 15
        };
    }

    getCurrPoint() {
        let geolocation = navigator.geolocation;
        geolocation.getCurrentPosition(position=> {
            console.log(position, 'pos')
            let {latitude, longitude} = position.coords;
            this.setState({lat: latitude, lng: longitude}, ()=> {
                this.setCurrPosition();
            });
        });
    }

    setCurrPosition() {
        //初始化地图
        let {lat, lng, zoom} = this.state;
        
        let map = new BMap.Map(this.map);
        //121.45438870000001, 31.206189499999994
        let ggPoint = new BMap.Point(lng, lat);
        map.centerAndZoom(ggPoint, zoom);
        map.addControl(new BMap.NavigationControl());
        
        //add the GPS Marker and GPS Label;
        let markergg = new BMap.Marker(ggPoint);
        map.addOverlay(markergg);//add the GPS marker;
        let labelgg = new BMap.Label('转换之前h5 point', {offset: new BMap.Size(20, -10)}); //offset 偏移量
        markergg.setLabel(labelgg);//add GPS Label

        //坐标转换完之后的回调函数
        let translateCB = function(data) {
            console.log(data, 'data');
            if(data.status === 0) {
                let marker = new BMap.Marker(data.points[0]);
                map.addOverlay(marker);
                let label = new BMap.Label('转换之后baidu Map point',{offset: new BMap.Size(20,-10)});
                marker.setLabel(label); //添加百度label
                map.setCenter(data.points[0]);
            }
        }

        setTimeout(function() {
            let convertor = new BMap.Convertor();
            let pointArr = [];
            pointArr.push(ggPoint);
            convertor.translate(pointArr, 1, 5, translateCB);
        }, 1000);

        map.enableScrollWheelZoom();   //启用滚轮放大缩小，默认禁用
	    map.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用
    }
    
    componentWillMount() {
        
    }
    
    loadMap() {
        // };
        this.getCurrPoint();
        
    }
    componentDidMount() {
        this.loadMap();
        
    }
    componentWillUpdate() {
    }
    render() {
        
        return (
            <FooterContainer>
                <footer>
                    <div className="map" ref={map=> this.map=map}>
                    </div>
                    <div className="copyright">copyright</div>
                </footer>
            </FooterContainer>
        )
    }
}

export default Footer;