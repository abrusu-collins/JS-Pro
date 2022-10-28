import footergirl from "../img/footer-g.png";
function Footer() {
    let year = new Date().getFullYear();
    return ( 
        <div className="footer">
            <div className="footer-inner">
                <img src={footergirl} alt="" />
                <div>
                    <p className="oops">Oops!</p>
                    <p className="end">You've reached the end.</p>
                    <p>Till we meet again.</p>
                    <p>Bye!</p>
                </div>
            </div>
            <div className="abrusu"> &copy; Abrusu Collins {year}. All rights reserved</div>
        </div>
     );
}

export default Footer;