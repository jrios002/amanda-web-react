import React, {Component} from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

const mapStyles = {
	width: '100%',
	height: '500px',
}

class MapContainer extends Component {
	render(){
		return (
			<div className="relative mt5">
				<Map
					google={this.props.google}
					zoom={18}
					style={mapStyles}
					initialCenter={{
					lat: 35.1698,
					lng: -101.881682
					}}>
					<Marker onClick={this.onMarkerClick}
						name={'Current location'} />
				</Map>
			</div>
	    );
	}
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAvqilp3GlZHlBzkw-IUNoVli70kChg4a0'
})(MapContainer);