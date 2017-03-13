import React, { Component } from 'react';


class Footer extends Component {
  constructor(props){
    super(props)
 }

  render() {
    return (
    <div className="footer">
       <div className="footer-container">
        <div className="wix-footer">
            <div className="subscribe-container">
                <p>
                Find out what’s coming up at <b>Wix Engineering</b>:
                </p>
                <p>
                Subscribe to our newsletter for updates, events and more.
                </p>
                <a target="_blank" href="https://docs.google.com/a/wix.com/forms/d/1NxFkYfLWJ4BI4tNYD_6BVDppDIv2NL8RPlRzrt8iIso/viewform?entry.2005620554&amp;entry.1045781291&amp;entry.1166974658&amp;entry.104407554&amp;entry.1952854462=I%27m+cool+with+you+sending+me+emails+about+stuff.">
                <div className="subscribe-button">
                    Subscribe
                </div>
                </a>
            </div>
            <div className="footer-links-container">
                <ul className="links-list">
                    <a href="http://www.wix.com/drorb7/github-io-template/about"><li>About</li></a>
                    <a href="http://engineering.wix.com/"><li>Blog</li></a>
                    <a href="http://www.wix.com/drorb7/github-io-template"><li>Open Source</li></a>
                    <a href="https://www.youtube.com/user/WixTechTalks"><li>Video</li></a>
                    <a href="http://www.wix.com/drorb7/github-io-template/events"><li>Events</li></a>
                    <a href="http://www.wix.com/jobs/home"><li>Jobs</li></a>
                </ul>
                <ul className="links-list">
                    <a href="https://twitter.com/WixEng"><li>Twitter</li></a>
                    <a href="https://www.youtube.com/user/WixTechTalks"><li>YouTube</li></a>
                    <a href="https://github.com/wix"><li>Github</li></a>
                    <a href="http://www.meetup.com/at-wix/"><li>Meetup</li></a>
                    <a href="https://dev.wix.com/"><li>Wix Dev</li></a>
                    <a href="http://www.wixkickstart.com/"><li>Wix Kickstart</li></a>
                </ul>
            </div>
            <div className="email-container">
                <a className="subscribe-button-link" href="https://wix.com"><img src="https://static.wixstatic.com/media/9ab0d1_382cbda7c1824140b9eea75d826873f2.png/v1/fill/w_95,h_22,al_c,q_80,usm_0.66_1.00_0.01/9ab0d1_382cbda7c1824140b9eea75d826873f2.png"/></a>
                <p>
                    At Wix Engineering we develop some of the most innovative cloud-based web applications that influence our 80+ million users worldwide.
                </p>
                <p>
                    Have any questions? Email academy@wix.com.
                </p>
            </div>
                </div>

            </div>
        </div>
    );
  }
}

export default Footer;
