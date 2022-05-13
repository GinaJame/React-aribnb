import React from 'react';
import '../styles/footer.css'
import ListFooter from './ListFooter';
const Footer = (props) => {
  return (
    <>
    <footer>
        <div class="footer-menu">
            <ListFooter list={["Support", "Help Center", "AirCover", "Safety information","Supporting people with disabilities","Cancellation options","Our COVID-19 Response","Report a neighborhood concern"]}/>
            <ListFooter list={["Community","Airbnb.org: disaster relief housing","Support Afghan refugees","Combating discrimination"]}/>
            <ListFooter list={["Hosting","Try hosting","AirCover for Hosts","Explore hosting resources","Visit our community forum","How to host responsibly"]}/>
            <ListFooter list={["About","Newsroom","Learn about new features","Letter from our founders","Careers","Investors"]}/>
        </div>
        <div class="footer-bottom">
            <p>© 2022 Airbnb, Inc. · Privacy · Terms · Sitemap</p>
            <p><img src="world.svg" class='world' />English (US) Choose a currency $MXN </p>
        </div>
    </footer>
    </>
  );
}

export default Footer;