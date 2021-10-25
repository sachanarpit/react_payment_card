const Header = ({date , logo }) => {
    return (<div className="header">
        <p>{date}</p>
        <img src={logo} alt="" />
    </div>)
}

export default Header