import React from "react";
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { 
  Nav,
} from "./components";
import {
  Home,
  Portfolio,
  Blog,
} from "./screens";
import {
  useMobile,
} from './hooks';

import './App.css';

const App = () => {
  const isMobile = useMobile();
  return (
    <div className={(isMobile)?"App Mobile":"App"}>
      <Nav />
      <main>
        <Switch>
          <Route 
            path="/portfolio" 
            component={()=> <Portfolio />} 
          />
          <Route 
            path="/blog"
            component={()=> <Blog />}
          />
          <Route 
            path="/" 
            component={()=> <Home />} 
          />
          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  );
}

/*
const _MOBILE_WIDTH = 700;

class App extends Component {

  constructor() {
    super();
    this.state = {
      isMobile: window.innerWidth <= _MOBILE_WIDTH,
      //width: window.innerWidth,
      //height: window.innerHeight,
      
      blog_first_loading:true,
      blog_loading:true,
      blog_posts:null,
      blog_error:null,
    };
  }

  updateDimensions = () => {
    let width = window.innerWidth;
    //let height = window.innerHeight;

    let isMobile = width <= _MOBILE_WIDTH;
    if (isMobile !== this.state.isMobile) {
      console.log('SWITCHING BETWEEN DESKTOP AND MOBILE');
    }

    this.setState({ 
      isMobile: isMobile
    });
  }

  refreshBlogDatabase = async() => {
    let res = await BlogAPI.getBlogDatabase();
    if (res.status !== 200) {
      // error happened... cannot update database
      this.setState({
        blog_first_loading:false,
        blog_loading:false,
        blog_error:res.error
      });
      return
    }
    this.setState({
      blog_first_loading:false,
      blog_loading:false,
      blog_posts: res.posts,
      blog_error:null
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    this.refreshBlogDatabase();
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="AppHeader">
            <Nav isMobile={this.state.isMobile} refreshBlogDatabase={this.refreshBlogDatabase} />
          </header>
          <main>
            <Switch>
              <Route 
                path="/portfolio"
                component={()=> <Portfolio />}
              />
              <Route 
                path="/blog"
                component={()=> <Blog 
                  posts={this.state.blog_posts} 
                  loading={this.state.blog_loading} 
                  error={this.state.blog_error} 
                  refreshBlogDatabase={this.refreshBlogDatabase} 
                />}
              />
              <Route 
                path="/" 
                component={()=> <Home />} 
              />
              <Redirect to="/" />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}
*/

/*
class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    }
    this.navRef = createRef();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isMobile !== this.props.isMobile) {
      const to = this.props.isMobile ? this.state.menuOpen : false
      this.setState({menuOpen:to});
    }
  }

  isMobile = () => {
    return (this.props.width <= 700);
  }

  toggleMenu = () => {
    this.setState(prevState => ({menuOpen:!prevState.menuOpen}));
  }
  
  closeMenu = () => {
    this.setState({menuOpen:false});
  }

  setWrapperRef = (node) => {
    this.navRef = node;
  }

  handleClickOutside = (event) => {
    if (this.navRef && !this.navRef.contains(event.target)) {
      this.closeMenu();
    }
  }

  render() {
    //const isMobile = this.isMobile();
    const isMobile = this.props.isMobile;
    var mobileButton = null;
    if (isMobile) {
      // now in mobile mode
      mobileButton = <Button cName="NavItem" onClick={this.toggleMenu}>MENU</Button>
    }

    return (
      <nav ref={this.setWrapperRef} className="AppNav">
        <div className='NavProfile'>
          <div className='ProfileImageWrapper'>
            <Link to="/">
              <Image width={80} height={80} round={true} src={profileSquare} alt="Profile" />
              <Image width={80} height={40} cName="ProfileImageOverlay" src={heyThere} alt="Hey there!" />
            </Link>
          </div>
          <div>
            <p className='h7'>kimryan0416[AT]gmail.com</p>
            <div className='ProfileSocialLinksContainer'>
              <a href='https://www.linkedin.com/in/kimryan0416/' target='_blank' rel="noopener noreferrer">
                <Image width={16} height={16} src={linkedIn} alt="LinkedIn" cName="ProfileSocialMediaIcon" />
              </a>
              <a href='https://github.com/kimryan0416' target='_blank' rel="noopener noreferrer">
                <Image width={16} height={16} src={github} alt="Github" cName='ProfileSocialMediaIcon' />
              </a>
              <a href='https://twitter.com/ryankimdev' target='_blank' rel="noopener noreferrer">
                <Image width={16} height={16} src={twitter} alt="Twitter" cName='ProfileSocialMediaIcon' />
              </a>
            </div>
          </div>
        </div>
        <div className="NavLinks">
          {mobileButton}
          <NavLinks isMobile={isMobile} open={this.state.menuOpen} closeMenu={this.closeMenu} refreshBlogDatabase={this.props.refreshBlogDatabase} />
        </div>
      </nav>
    );
  }
}

function NavLinks(props) {

  const location = window.location.href.split("#")[1].split("/")[1];
  const extraClasses = {
    index:"",
    portfolio:"",
    blog:"",
  }
  switch(location) {
    case "":
      extraClasses.index = "CurrentLink";
      break;
    case "portfolio":
      extraClasses.portfolio = "CurrentLink";
      break;
    case "blog":
      extraClasses.blog = "CurrentLink";
      break;
    default:
      break;
  }

  const L = (key, to, cName, label, desc, l = true, clickHandler = null) => {
    const c = (
      <Button cName={`NavItem ${cName}`} onClick={props.closeMenu}>
        {label}
        <span className='NavItemDescription h7'>{desc}</span>
      </Button>
    );
    if (!l) return <a key={`NavLink_${key}`} href={to} target="_blank" rel="noopener noreferrer">{c}</a>;
    return <Link key={`NavLink_${key}`} to={to} onClick={(e)=>{if(clickHandler)clickHandler()}}>{c}</Link>;
  }

  const menu = [
    L(0, "/", extraClasses.index, <><img src={indexIcon} alt="" className="NavIcon" /><span>Index</span></>, "Why, hello there! Intro & Skill Set"),
    L(1, "/portfolio", extraClasses.portfolio, <><img src={portfolioIcon} alt="" className="NavIcon" /><span>Portfolio</span></>, "All my public projects, from VR projects to web applications."),
    L(2, "/blog", extraClasses.blog, <><span>My Blog</span></>, "My blog, where I occasionally post updates and stuff.", true, props.refreshBlogDatabase),
    //L(3, "/research", "", <span>Research</span>, "Research topics I wrote papers for, filtered from my Portfolio."),
    //L(4, "/about", "", <span>About Me</span>, "More about me, my skills, work experience, and education."),
    L(5, resume, "DownloadLink", <><img src={downloadIcon} alt="" className="NavIcon" /><span>Resume <span className="h8">(57 kB)</span></span></>, "Download my resume in PDF form.", false),
  ];

  var mobileClass = "";
  if (props.isMobile) {
    mobileClass = (props.open) ? "MobileNavLinks open" : "MobileNavLinks"
  }

  return <div className={`NavLinksWrapper ${mobileClass}`}>{menu}</div>;
}
*/


export default App;
