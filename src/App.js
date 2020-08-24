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
import Links from './components/Links/Links';
import { auth, createUserProfileDocument, retrieveLessons } from './Firebase/FirebaseUtils';
import { Switch, Route } from 'react-router-dom';
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
  lessons: [],
  firebaseLessons: [],
  firebaseRes: '',
  searchfield: '',
  assignment: {
    id: '',
    name: '',
    date: '',
    dueDate: '',
    imgUrl: '',
    downloadUrl: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  unsubscribeFromAuth = null;
  
  getDatabaseData = async () => {
    try {
      this.setState({ lessons: await retrieveLessons()});
    } catch (error) {
      console.log(error, 'unable to get database data');
    }
  }

  componentDidMount() {
    this.getDatabaseData();
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
        });
      }
      else {
        this.setState({currentUser: userAuth});
        this.setState({isSignedIn: false});
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  onRouteChange = () => {
    (async () => {
      this.getDatabaseData();
    })();
  }

  render (){
    const { lessons, searchfield } = this.state;

    const filteredLessons = lessons.filter(lesson =>{
      return lesson.name.toLowerCase().includes(searchfield.toLocaleLowerCase())
    })

    return (
      <div>
        <Navigation onRouteChange={this.onRouteChange} currentUser={this.state.currentUser} />
        <Particles className='particles'
          params={particlesOptions}
        />
        <Switch>
          <Route exact path='/' render={() => <div>
              <BkgImage/>
              <Profile onRouteChange={this.onRouteChange} lessons={filteredLessons} />
              <Links />
            </div>}/>
          <Route exact path='/contacts' render={() => <div>
            <MapContainer />
            <Contact />
          </div>}/>
          <Route exact path='/assignments' render={() => {return (!lessons.length) ?
                  <h1>Loading</h1> :
                  (
                    <div style={{marginTop: 80}}>
                      <SearchBox searchChange={this.onSearchChange} />
                      <Scroll>
                        <ErrorBoundry>
                          <AssignList onRouteChange={this.onRouteChange} lessons={filteredLessons}/>
                        </ErrorBoundry>
                      </Scroll>
                    </div>
                  );}}/>
          <Route exact path='/science' render={() => <div>
            <ScienceNews />
          </div>}/>
          <Route exact path='/myRoom' render={() => <div>
            <BkgImage />
            <MyRoom />
            <Links />
          </div>}/>
          <Route exact path='/signIn' render={() => <div>
            <SignInOrRegister />
          </div>}/>
        </Switch>
        
        <WebFooter />
      </div>
    );
  }
}

export default App;
