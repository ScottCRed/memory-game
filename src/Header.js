const Header = ({className, title, id}) => {
    return (
        <div>
            <div className={className} id={id}>{title}</div>
        </div>
    )
}

export default Header;