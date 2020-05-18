import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import BkgImage from './components/BkgImage/BkgImage';
import Profile from './components/Profile/Profile';
import WebFooter from './components/WebFooter/WebFooter';
import MapContainer from './components/MapContainer/MapContainer';
import Contact from './components/Contact/Contact';
import AssignList from './components/AssignList/AssignList';
import Scroll from './components/Scroll/Scroll';
import ErrorBoundry from './components/ErrorBoundry/ErrorBoundry';
import SearchBox from './components/SearchBox/SearchBox';
import ScienceNews from './components/ScienceNews/ScienceNews';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

const initialState = {
  lessons: [],
  searchfield: '',
  route: 'home'
}

class App extends Component {
  constructor() {
    super()
    this.state = initialState;
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users=> this.setState({ lessons: users}));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  render (){
    const { lessons, searchfield, route } = this.state;

    const fileredLessons = lessons.filter(lesson =>{
      return lesson.name.toLowerCase().includes(searchfield.toLocaleLowerCase())
    })

    return (
      <div>
        <Navigation onRouteChange={this.onRouteChange}/>
        <Particles className='particles'
          params={particlesOptions}
        />
        {(() => {
          switch(route) {
            case 'home':
              return (
                <div>
                  <BkgImage route={route}/>
                  <Profile />
                </div>
              );
            case 'contacts':
              return(
                <div>
                  <MapContainer />
                  <Contact />
                </div>
              );
              case 'assignments':
                return (!lessons.length) ?
                  <h1>Loading</h1> :
                  (
                    <div style={{marginTop: 80}}>
                      <SearchBox searchChange={this.onSearchChange} />
                      <Scroll>
                        <ErrorBoundry>
                          <AssignList lessons={fileredLessons} />
                        </ErrorBoundry>
                      </Scroll>
                    </div>
                  );
              case 'science':
                return(
                  <ScienceNews />
                );
              default:
                return (
                  <div>
                    <BkgImage />
                    <Profile />
                  </div>
                );
            }
          // The following code was commented out because a switch is better
          // if (route === 'home') {
          //   return (
          //     <div>
          //       <BkgImage />
          //       <Profile />
          //     </div>
          //   )
          // }
          // else if (route === 'contacts') {
          //   return(
          //     <div>
          //       <MapContainer />
          //       <Contact />
          //     </div>
          //   )
          // }
          // else if (route === 'assignments') {
          //   return (!lessons.length) ?
          //     <h1>Loading</h1> :
          //     (
          //       <div style={{marginTop: 80}}>
          //         <SearchBox searchChange={this.onSearchChange} />
          //         <Scroll>
          //           <ErrorBoundry>
          //             <AssignList lessons={fileredLessons} />
          //           </ErrorBoundry>
          //         </Scroll>
          //       </div>
          //     );
          // }
          // else if (route === 'science') {
          //   return(
          //     <ScienceNews />
          //   );
          // }
        })()}
        <WebFooter />
      </div>
    );
  }
}

export default App;
