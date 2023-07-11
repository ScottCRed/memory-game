const Footer = ({className, content, id}) => {
    return (
        <div>
            <div className={className} id={id}>{content}</div>
        </div>
    )
}

export default Footer;