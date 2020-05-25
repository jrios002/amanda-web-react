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
import MyRoom from './components/MyRoom/MyRoom';
import SignInOrRegister from './components/SignInOrRegister/SignInOrRegister';
import { auth, createUserProfileDocument } from './Firebase/FirebaseUtils';
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
  currentUser: null,
  isSignedIn: false,
  lessons: [],
  searchfield: '',
  route: 'home',
  assignment: {
    id: '1',
    name: 'testName',
    date: 'testDate',
    dueDate: 'testDueDate'
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadAssignments = (data) => {
    this.setState({assignment:{
        id: data.id,
        name: data.name,
        date: data.date,
        dueDate: data.dueDate
    }})
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          }, () => {
            this.setState({isSignedIn: true});
          });

          console.log(this.state);
        });
      }
      else {
        this.setState({currentUser: userAuth});
        this.setState({isSignedIn: false});
      }
    });
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users=> this.setState({ lessons: users}));
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  onRouteChange = (route, isSignedIn) => {
    this.setState({route: route});
    console.log(isSignedIn, 'route changed');
    if(!isSignedIn) {
      auth.signOut();
    }
  }

  render (){
    const { lessons, searchfield, route, isSignedIn } = this.state;

    const fileredLessons = lessons.filter(lesson =>{
      return lesson.name.toLowerCase().includes(searchfield.toLocaleLowerCase())
    })

    return (
      <div>
        <Navigation onRouteChange={this.onRouteChange} currentUser={this.state.currentUser} isSignedIn={isSignedIn} />
        <Particles className='particles'
          params={particlesOptions}
        />
        {(() => {
          switch(route) {
            case 'home':
              return (
                <div>
                  <BkgImage route={route}/>
                  <Profile onRouteChange={this.onRouteChange}/>
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
              case 'myRoom':
                return (
                  <div>
                    <BkgImage route={route}/>
                    <MyRoom />
                  </div>
                );
              case 'signInOrRegister':
                return (
                  <SignInOrRegister />
                );
              default:
                return (
                  <div>
                    <BkgImage />
                    <Profile />
                  </div>
                );
            }
        })()}
        <WebFooter />
      </div>
    );
  }
}

export default App;
