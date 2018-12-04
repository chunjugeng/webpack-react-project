import GoogleMapReact from 'google-map-react'; //google map
import styled from 'styled-components';
const MapContatiner = styled.div`
    height: 300px;
    background: white;
    
    &>div {
        position: relative;
        margin: 0 auto;
        width: 90%;
    }
    
`;

const K_WIDTH = 40;
const K_HEIGHT = 40;

const greatPlaceStyle = {
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  border: '5px solid #f44336',
  borderRadius: K_HEIGHT,
  backgroundColor: 'white',
  textAlign: 'center',
  color: 'red',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4
};
class AnyReactComponent extends React.Component {
    render() {
        return(
            <div style={greatPlaceStyle}>A</div>
        );
    }
}


function createMapOptions(maps) {
    return {
      zoomControlOptions: {
        position: maps.ControlPosition.RIGHT_CENTER,
        style: maps.ZoomControlStyle.SMALL
      },
      mapTypeControlOptions: {
        position: maps.ControlPosition.TOP_RIGHT
      },
      mapTypeControl: true
    };
  }
class GoogleMap extends React.Component {
    static defaultProps = {
        center: [31.2062283, 121.4544399],
        zoom: 15,
        greatPlaceCoords: {lat: 31.2062283, lng: 121.4544399}
    };
    render() {
        // var marker = new google.maps.Marker({
        //     position: {lat: lat, lng: lng},
        //     map: map
        // });
        return(
            //AIzaSyArT2uqlw7umWBY8pN1AoWPFkCSTnZzbvM
            <MapContatiner>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo' }}
                    center={this.props.center}
                    zoom={this.props.zoom}
                    style={{'height': '95%'}}
                    options={createMapOptions}
                    >
                    
                    <AnyReactComponent
                        lat={31.2062283}
                        lng={121.4544399}
                    />
                </GoogleMapReact>
            </MapContatiner>
            
        );
    }
}

export default GoogleMap;