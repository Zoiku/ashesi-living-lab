import './Home.css'
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import img from "../Assets/images.png";
import img2 from "../Assets/art-transparent-background-15.png";
import firebase from "../Assets/firebase.png";
import react from "../Assets/react.png";
import chart from "../Assets/chart.png"
import {useNavigate} from "react-router-dom";
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

const BootstrapButton = styled(Button)({
    boxShadow: "none",
    textTransform: "none",
    lineHeight: 1.5,
    background: '#8963BA',
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      boxShadow: "none",
      background: '#8963BA'
    },
    "&:active": {
      boxShadow: "none",
    },
    "&:focus": {},
  });

const Home = () => {
    const navigate = useNavigate()
    return(
        <div className="Home">
            <nav>
                <div style={{cursor: 'pointer'}} onClick={() => navigate('/')}>Home</div>
                <div> <BootstrapButton variant="contained" onClick={() => navigate('/dashboard')}>Go to console</BootstrapButton> </div>
            </nav>

            <main>
                <div className="container">
                    <section style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <div style={{width: '45%'}}>
                            <div style={{fontSize: 70, lineHeight: 0.9 }}>
                                <div>Ashesi As A</div>
                                <div>Living Lab</div>
                            </div>
                            <div style={{fontSize: 14}}>
                                <div>
                                    <div style={{margin: '30px 0 5px 0', fontSize: 30, color: 'GrayText'}}>What's a Living Lab?</div>
                                    <div>Ever heard of a <span style={{color:'#8963BA'}}>Smart Home</span>? If yes...that's a good start. If no, a smart home is a home that uses mordern technologies and computerisation to control or automate any number of different aspects of the house. In a sense, giving it <span style={{color:'#8963BA'}}>'smart'</span> capabilities. A Living Lab is no different. The aim of <span style={{color:'#8963BA'}}>Living Labs</span> is to provide spaces with smart cabilities by equipping those spaces with technologies that allow for the remote control and monitoring of those spaces.</div>
                                </div>
                                <div>
                                    <div style={{margin: '30px 0 5px 0', fontSize: 30, color: 'GrayText'}}>What's the Ashesi Living Lab?</div>
                                    <div>Following this definition of a Living Lab, can you guess what the <span style={{color:'#8963BA'}}>Ashesi Living Lab</span> is? You guessed it ! This Living Lab aims at equipping the Ashesi Campus with Internet Of Things (IOT) based technologies to provide smart capabilites to the Ashesi Campus for remote monitoring and control. Currently, the designed Living Lab checks and monitors <span style={{color:'#8963BA'}}>Ligth Intensity</span>, <span style={{color:'#8963BA'}}>Humidity</span>, <span style={{color:'#8963BA'}}>Temperature</span>, and <span style={{color:'#8963BA'}}>Motion</span> in a single space (Lab 222). By adding sensors to other labs and classes this can be scaled to cover the entire Ashesi Campus!</div>
                                </div>
                            </div>
                        </div>
                        <div style={{width: '55%', display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
                            <img className='globe' src={img} width={500} height={500} alt="" />
                        </div>
                    </section>

                    <section style={{margin: '150px 0 0 0', textAlign: 'center'}}>
                        <div style={{fontSize: 30, fontWeight: 800, color: 'GrayText'}}>Project Relevance</div>
                        <small>For students and all stakeholders</small>
                        <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 280px)',margin: '20px 0 0 0', gap: 10, justifyContent: 'center'}}>
                            <div className='grid-items'>
                                <div className="grid-number" style={{fontSize: 50, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'}}>
                                    <div>01</div>
                                </div>
                                <div style={{margin: '15px 0 0 0'}}>
                                    Maximuxm convenience and security in the remote control and monitoring of spaces on the Ashesi Campus.
                                </div>
                            </div>
                            
                            <div className='grid-items'>
                                <div className="grid-number" style={{fontSize: 50}}>
                                    <div>02</div>
                                </div>
                                <div style={{margin: '15px 0 0 0'}}>
                                    A greater control of energy use, while automating things like adjusting temperature, turning on and off lights based on the student activities.  
                                </div>
                            </div>

                            <div className='grid-items'>
                                <div className="grid-number" style={{fontSize: 50}}>
                                    <div>03</div>
                                </div>
                                <div style={{margin: '15px 0 0 0'}}>
                                    Relevant to researchers and stakeholders who depend on related environmental data from Ashesi Campus.
                                </div>
                            </div>

                            <div className='grid-items'>
                                <div className="grid-number" style={{fontSize: 50}}>
                                    <div>04</div>
                                </div>
                                <div style={{margin: '15px 0 0 0'}}>
                                    Promotes an IOT culture to increase the General Concern of IOT technologies at Ashesi University.
                                </div>
                            </div>

                        </div>
                    </section>

                    <section style={{margin: '150px 0 0 0', textAlign: 'center'}}>
                        <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
                            <div style={{width: '50%'}}>
                                <img width={300} src={img2} alt="" />
                            </div>
                            <div style={{width: '50%', textAlign: 'left'}}>
                            <div style={{fontSize: 30, fontWeight: 800, color: 'GrayText'}}>How It Works</div>
                            <small>A comprehensive summary on how the Ashesi As A Living Lab Web Application</small>
                                <ul>
                                    <li>1. The Ashesi Living Lab Web Application provides SMART abilities to labs and classrooms.</li>
                                    <li>2. This is off of sensors (Light, Motion, Humidity, and Temperature sensors) installed inside of labs and classrooms.</li>
                                    <li>3. Sensors send data over an MQTT to a Real Time Database (Firebase).</li>
                                    <li>4. The data from the database is collected and represented via reactive and informative Graphs on the Ashesi Living Lab Dashboard.</li>
                                    <li>5. The data is further analysed to provide suggestions based on the values read from labs and classrooms.</li>
                                    <li>6. If minimal motion is detected in a lab or classroom, the system suggests possible steps to conserve energy.</li>
                                    <li>7. Navigate the dashboard and interact with Dashboard items/cards to view different graphs and suggestions. </li>
                                    <li>8. Sounds interesting? Click <div style={{display: 'inline-block', textDecoration: 'underline'}}>Go to console</div> button to demo the application.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section style={{margin: '100px 0 100px 0', textAlign: 'center'}}>
                        <div style={{fontSize: 30, fontWeight: 800, color: 'GrayText'}}>For Developers</div>
                        <small>API Pricing</small>
                        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 300px)', margin: '10px 0 0 0', gap: 10, justifyContent: 'center'}}>
                            <div className="api-pricing" style={{textAlign: 'center', color: '#fff', position: 'relative', overflow: 'clip'}}>
                                <div style={{fontSize: 15, padding: '15px 0 5px 0', margin: '0 0 0px 0'}}>BASIC</div>
                                <div style={{fontSize: 35, padding: '5px 0 5px 0', margin: '0 0 20px 0', borderBottom: '1px solid #999'}}>$ 0.00</div>
                                <div style={{fontSize: 15, padding: '15px 25px 15px 25px', margin: '0 0 20px 0'}}>Free versions for developers that want to test the API for data on the conditions of labs and classroms at Ashesi University</div>
                                <div style={{fontSize: 20, padding: '15px 0 15px 0', margin: '0 0 20px 0'}}>10 Requests / Daily</div>
                                <div style={{position: 'absolute', bottom: '-60px', left: '-50px'}}><IntegrationInstructionsIcon sx={{width: 200, height: 200, opacity: 0.1, pointerEvents: 'none'}} /></div>
                                <div style={{position: 'absolute', width: '100%', bottom: '30px', cursor: 'pointer'}} onClick={() => navigate('/apiendpoints/')}>View From Console</div>
                            </div>
                            
                            <div className="api-pricing" style={{textAlign: 'center', color: '#fff', position: 'relative', overflow: 'clip'}}>
                                <div style={{fontSize: 15, padding: '15px 0 5px 0', margin: '0 0 0px 0'}}>PRO</div>
                                <div style={{fontSize: 35, padding: '5px 0 5px 0', margin: '0 0 20px 0', borderBottom: '1px solid #999'}}>$ 200.00</div>
                                <div style={{fontSize: 15, padding: '15px 25px 15px 25px', margin: '0 0 20px 0'}}>Power your application with this plan to support your businesses. Also included in this package is an email support</div>
                                <div style={{fontSize: 20, padding: '15px 25px 15px 25px', margin: '0 0 20px 0'}}>40 Requests / Daily</div>
                                <div style={{position: 'absolute', bottom: '-60px', left: '-50px'}}><IntegrationInstructionsIcon sx={{width: 200, height: 200, opacity: 0.1, pointerEvents: 'none'}} /></div>
                                <div style={{position: 'absolute', width: '100%', bottom: '30px', cursor: 'pointer'}} onClick={() => window.alert('PRO version unavailable yet')}>Choose Plan</div>
                            </div>

                            <div className="api-pricing" style={{textAlign: 'center', color: '#fff', position: 'relative', overflow: 'clip'}}>
                                <div style={{fontSize: 15, padding: '15px 0 5px 0', margin: '0 0 0px 0'}}>PREMIMUM</div>
                                <div style={{fontSize: 35, padding: '5px 0 5px 0', margin: '0 0 20px 0', borderBottom: '1px solid #999'}}>$ 500.00</div>
                                <div style={{fontSize: 15, padding: '15px 25px 15px 25px', margin: '0 0 20px 0'}}>Complete Email support, concurrent requests, and a full set of analytic tools. This plan supports unlimited requests.</div>
                                <div style={{fontSize: 20, padding: '15px 0 15px 0', margin: '0 0 20px 0'}}>Unlimited Requests</div>
                                <div style={{position: 'absolute', bottom: '-60px', left: '-50px'}}><IntegrationInstructionsIcon sx={{width: 200, height: 200, opacity: 0.1, pointerEvents: 'none'}} /></div>
                                <div style={{position: 'absolute', width: '100%', bottom: '30px', cursor: 'pointer'}} onClick={() => window.alert('ULTRA versions unavailable yet')}>Choose Plan</div>
                            </div>
                        </div>
                    </section>

                    <section style={{margin: '100px 0 100px 0', textAlign: 'center'}}>
                        <div style={{fontSize: 30, fontWeight: 800, color: 'GrayText'}}>Technologies Used</div>
                        <small>Tools Used in Application Development</small>
                        <div>
                            <div style={{display: 'flex', justifyContent:'center', alignItems:'center', margin: '30px 0 0 0'}}>
                                <div>
                                    <img width={250} src={react} style={{margin: '0 80px 0 0'}} alt="" />
                                </div>
                                <div>
                                    <img width={250} src={chart} style={{margin: '0 80px 0 0'}} alt="" />
                                </div>
                                <div>
                                    <img width={250} src={firebase} alt="" />
                                </div>
                            </div>
                        </div>

                    </section>
                </div>
            </main>

            <footer className="Footer">
      <div className="container">
        <div>
          <div className="footer-headers">The Ashesi Living Lab</div>
          <ul>
            <li>Ashesi University,</li>
            <li>Berekusu,</li>
            <li>Accra,</li>
            <li>Ghana</li>
          </ul>
          <ul>
            <li>Phone: +233 55 577 7800</li>
            <li>Email: info@theashesilivinglab.com</li>
          </ul>
        </div>

        <div>
          <div className="footer-headers">Useful Links</div>
          <div style={{ display: "flex" }}>
            <ul style={{ margin: "0 50px 0 0" }}>
              <li>Home</li>
              <li>About Us</li>
              <li>Project relevance</li>
              <li>Contact Us</li>
            </ul>
            <ul>
              <li>Terms of Use</li>
              <li>Privacy Statement</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
        </div>
    )
}

export default Home