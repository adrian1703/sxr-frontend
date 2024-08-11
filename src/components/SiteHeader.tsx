import ReactLogo from './../assets/react.svg'

function SiteHeader() {
    const appText = "SimpleXRech"
    const tabHeaders: string[] = [
        "Home",
        "Rechnung erstellen"
    ]

    const getTabs = () => {
        return tabHeaders.map(tabHeader =>
                <a className="nav-link nav-item" href="#">{tabHeader}</a>
        )
    }

    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img src={ReactLogo} width="30" height="30"
                         className="d-inline-block align-top" alt=""/>
                    {appText}
                </a>
                <div className="navbar-nav" id="navbarNav">
                    {getTabs()}
                </div>
            </nav>
        </header>
    )
}

export default SiteHeader