import chefClaudeLogo from "./images/chef-claude-icon.png"

export default function Header() {
    return (
        <header className="site-header">
            <div className="brand">
                <img src={chefClaudeLogo} alt="Chef Claude"/>
                <div>
                    <p className="brand-eyebrow">YOUR KITCHEN COMPANION</p>
                    <h1>Chef Claude</h1>
                </div>
            </div>
            <span className="header-note">Make the most of what you have</span>
        </header>
    )
}
