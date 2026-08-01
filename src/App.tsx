import './App.css';

interface PlayerData {
    name: string;
    overallRating: number;
    position: string;
    club: string;
    imageUrl: string;
    pac: number;
    sho: number;
    pas: number;
    dri: number;
    def: number;
    phy: number;
}

const getPlayerTier = (rating: number) => {
    if (rating >= 92) {
        return 'elite';
    } else if (rating >= 85) {
        return 'gold';
    } else if (rating >= 75) {
        return 'silver';
    } else {
        return 'bronze';
    }
};

const PlayerCard = () => {
    return (
        <div className="root">
            <div className="card-wrapper tier-gold">
                <div className="card">
                    <div className="card-header">
                        <div>
                            <div className="card-rating">98</div>
                            <div className="card-position">ST</div>
                        </div>
                        <div className="card-header-right">
                            <div className="card-tier-badge">GOLD</div>
                            <div className="card-club">Santos FC</div>
                        </div>
                    </div>
                    <div className="card-image-wrap">
                        <img
                            src="https://cdn.freecodecamp.org/curriculum/typescript/tsx-workshop/pele.jpg"
                            alt="Edson Arantes do Nascimento (Pele) headshot"
                            className="card-image"
                        />
                    </div>
                    <div className="card-name-strip">
                        <span className="card-name">PELE</span>
                    </div>
                    <div className="card-stats">
                        <div className="stat-col">
                            <div className="stat-row">
                                <span className="stat-value">97</span>
                                <span className="stat-label">PAC</span>
                            </div>
                            <div className="stat-row">
                                <span className="stat-value">98</span>
                                <span className="stat-label">SHO</span>
                            </div>
                            <div className="stat-row">
                                <span className="stat-value">83</span>
                                <span className="stat-label">PAS</span>
                            </div>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-col">
                            <div className="stat-row">
                                <span className="stat-value">99</span>
                                <span className="stat-label">DRI</span>
                            </div>
                            <div className="stat-row">
                                <span className="stat-value">41</span>
                                <span className="stat-label">DEF</span>
                            </div>
                            <div className="stat-row">
                                <span className="stat-value">75</span>
                                <span className="stat-label">PHY</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const FootballPlayerCard = () => {
    return <PlayerCard />;
};

export default FootballPlayerCard;
