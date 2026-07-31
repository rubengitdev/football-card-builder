import './App.css';

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
                                <span className="stat-value"></span>
                                <span className="stat-label"></span>
                            </div>
                            <div className="stat-row">
                                <span className="stat-value"></span>
                                <span className="stat-label"></span>
                            </div>
                            <div className="stat-row">
                                <span className="stat-value"></span>
                                <span className="stat-label"></span>
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
