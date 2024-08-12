import ReactLogo from './../assets/react.svg'

export interface Tab {
    tabName: string
    path: string
}

export interface NavbarProp {
    tabs: Tab[]
}

function SiteHeader(props: NavbarProp) {
    const appText = "SimpleXRech"
    const tabs = props.tabs;

    const getTabs = () => {
        return tabs.map(tab =>
                <a className="nav-link nav-item" href={tab.path}>{tab.tabName}</a>
        )
    }

    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <a className="navbar-brand" href="/home">
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