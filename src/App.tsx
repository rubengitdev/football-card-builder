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

const PlayerCard = ({ player }: { player: PlayerData }) => {
    return (
        <div className="root">
            <div
                className={`card-wrapper tier-${getPlayerTier(player.overallRating)}`}
            >
                <div className="card">
                    <div className="card-header">
                        <div>
                            <div className="card-rating">
                                ${player.overallRating}
                                {player.overallRating}
                            </div>
                            <div className="card-position">
                                ${player.position}
                                {player.position}
                            </div>
                        </div>
                        <div className="card-header-right">
                            <div className="card-tier-badge">
                                {getPlayerTier(
                                    player.overallRating,
                                ).toUpperCase()}
                            </div>
                            <div className="card-club">Santos FC</div>
                            <div className="card-club">{player.club}</div>
                        </div>
                    </div>
                    <div className="card-image-wrap">
                        <img
                            src="https://cdn.freecodecamp.org/curriculum/typescript/tsx-workshop/pele.jpg"
                            alt="Edson Arantes do Nascimento (Pele) headshot"
                            src={player.imageUrl}
                            alt={`${player.name} headshot`}
                            className="card-image"
                        />
                    </div>
                    <div className="card-name-strip">
                        <span className="card-name">PELE</span>
                        <span className="card-name">{player.name}</span>
                    </div>
                    <div className="card-stats">
                        <div className="stat-col">
                            <div className="stat-row">
                                <span className="stat-value">97</span>
                                <span className="stat-value">{player.pac}</span>
                                <span className="stat-label">PAC</span>
                            </div>
                            <div className="stat-row">
                                <span className="stat-value">98</span>
                                <span className="stat-value">{player.sho}</span>
                                <span className="stat-label">SHO</span>
                            </div>
                            <div className="stat-row">
                                <span className="stat-value">83</span>
                                <span className="stat-value">{player.pas}</span>
                                <span className="stat-label">PAS</span>
                            </div>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-col">
                            <div className="stat-row">
                                <span className="stat-value">99</span>
                                <span className="stat-value">{player.dri}</span>
                                <span className="stat-label">DRI</span>
                            </div>
                            <div className="stat-row">
                                <span className="stat-value">41</span>
                                <span className="stat-value">{player.def}</span>
                                <span className="stat-label">DEF</span>
                            </div>
                            <div className="stat-row">
                                <span className="stat-value">75</span>
                                <span className="stat-value">{player.phy}</span>
                                <span className="stat-label">PHY</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const defaultPlayer: PlayerData = {
    name: 'PELE',
    overallRating: 98,
    position: 'ST',
    club: 'Santos FC',
    imageUrl:
        'https://cdn.freecodecamp.org/curriculum/typescript/tsx-workshop/pele.jpg',
    pac: 97,
    sho: 98,
    pas: 83,
    dri: 99,
    def: 41,
    phy: 75,
};

const FootballPlayerCard = () => {
    const peleData: PlayerData = {
        name: 'PELE',
        overallRating: 98,
        position: 'ST',
        club: 'Santos FC',
        imageUrl:
            'https://cdn.freecodecamp.org/curriculum/typescript/tsx-workshop/pele.jpg',
        pac: 97,
        sho: 98,
        pas: 83,
        dri: 99,
        def: 41,
        phy: 75,
    };

    return <PlayerCard player={peleData} />;
};

export default FootballPlayerCard;
