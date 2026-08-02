import './App.css';
import { useState } from 'react';
import { useState, useEffect } from 'react';

const POSITIONS = [
    'GK',
    'CB',
    'LB',
    'RB',
    'CDM',
    'CM',
    'CAM',
    'LW',
    'RW',
    'ST',
    'CF',
] as const;

type Position = (typeof POSITIONS)[number];

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
                                {player.overallRating}
                            </div>
                            <div className="card-position">
                                {player.position}
                            </div>
                        </div>
                        <div className="card-header-right">
                            <div className="card-tier-badge">
                                {getPlayerTier(
                                    player.overallRating,
                                ).toUpperCase()}
                            </div>
                            <div className="card-club">{player.club}</div>
                        </div>
                    </div>
                    <div className="card-image-wrap">
                        <img
                            src={player.imageUrl}
                            alt={`${player.name} headshot`}
                            className="card-image"
                        />
                    </div>
                    <div className="card-name-strip">
                        <span className="card-name">{player.name}</span>
                    </div>
                    <div className="card-stats">
                        <div className="stat-col">
                            <div className="stat-row">
                                <span className="stat-value">{player.pac}</span>
                                <span className="stat-label">PAC</span>
                            </div>
                            <div className="stat-row">
                                <span className="stat-value">{player.sho}</span>
                                <span className="stat-label">SHO</span>
                            </div>
                            <div className="stat-row">
                                <span className="stat-value">{player.pas}</span>
                                <span className="stat-label">PAS</span>
                            </div>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-col">
                            <div className="stat-row">
                                <span className="stat-value">{player.dri}</span>
                                <span className="stat-label">DRI</span>
                            </div>
                            <div className="stat-row">
                                <span className="stat-value">{player.def}</span>
                                <span className="stat-label">DEF</span>
                            </div>
                            <div className="stat-row">
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
    const [player, setPlayer] = useState<PlayerData>(defaultPlayer);

    return (
        <div className="page">
            <header className="header">
                <div className="header-inner">
                    <p className="header-title">Football Card Builder</p>
                    <p className="header-subtitle">
                        Customize your player card
                    </p>
                </div>
            </header>

            <main className="main">
                <div className="layout">
                    <div className="form-panel">
                        <div className="player-info">
                        <div>
                            <p className="form-section-title">Player Info</p>
                            {/* Name Input */}
                            <div className="form-group">
                                <label htmlFor="name" className="label">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="input"
                                    value={player.name}
                                    onChange={(e) =>
                                        setPlayer({
                                            ...player,
                                            name: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="form-row">
                                {/* Position Input */}
                                <div className="form-group">
                                    <label htmlFor="position" className="label">
                                        Position
                                    </label>
                                    <input
                                        type="text"
                                    <select
                                        value={player.position}
                                        id="position"
                                        className="input"
                                    />
                                        onChange={(e) =>
                                            setPlayer({
                                                ...player,
                                                position: e.target
                                                    .value as Position,
                                            })
                                        }
                                    >
                                        {POSITIONS.map((pos) => (
                                            <option key={pos} value={pos}>
                                                {pos}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                {/* Overall Input */}
                                <div className="form-group">
                                    <label
                                        htmlFor="overallRating"
                                        className="label"
                                    >
                                        Overall
                                    </label>
                                    <input
                                        value={player.overallRating}
                                        type="number"
                                        id="overallRating"
                                        className="input"
                                        onChange={(e) =>
                                            setPlayer({
                                                ...player,
                                                overallRating: Number(
                                                    e.target.value,
                                                ),
                                            })
                                        }
                                    />
                                </div>
                            </div>
                            {/* Club Input */}
                            <div className="form-group">
                                <label htmlFor="club" className="label">
                                    Club
                                </label>
                                <input
                                    value={player.club}
                                    type="text"
                                    id="club"
                                    className="input"
                                    onChange={(e) =>
                                        setPlayer({
                                            ...player,
                                            club: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            {/* Image URL Input */}
                            <div className="form-group">
                                <label htmlFor="imageUrl" className="label">
                                    Image URL
                                </label>
                                <input
                                    value={player.imageUrl}
                                    type="text"
                                    id="imageUrl"
                                    className="input"
                                    onChange={(e) =>
                                        setPlayer({
                                            ...player,
                                            imageUrl: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </div>

                        <div>
                            <p className="form-section-title">Player Stats</p>
                            <div className="stats-grid">
                                {/* PAC Input */}
                                <div className="form-group">
                                    <label htmlFor="pac" className="label">
                                        PAC
                                    </label>
                                    <input
                                        value={player.pac}
                                        type="number"
                                        id="pac"
                                        className="input"
                                        onChange={(e) =>
                                            setPlayer({
                                                ...player,
                                                pac: Number(e.target.value),
                                            })
                                        }
                                    />
                                </div>
                                {/* SHO Input */}
                                <div className="form-group">
                                    <label htmlFor="sho" className="label">
                                        SHO
                                    </label>
                                    <input
                                        value={player.sho}
                                        type="number"
                                        id="sho"
                                        className="input"
                                        onChange={(e) =>
                                            setPlayer({
                                                ...player,
                                                sho: Number(e.target.value),
                                            })
                                        }
                                    />
                                </div>
                                {/* PAS Input */}
                                <div className="form-group">
                                    <label htmlFor="pas" className="label">
                                        PAS
                                    </label>
                                    <input
                                        value={player.pas}
                                        type="number"
                                        id="pas"
                                        className="input"
                                        onChange={(e) =>
                                            setPlayer({
                                                ...player,
                                                pas: Number(e.target.value),
                                            })
                                        }
                                    />
                                </div>
                                {/* DRI Input */}
                                <div className="form-group">
                                    <label htmlFor="dri" className="label">
                                        DRI
                                    </label>
                                    <input
                                        value={player.dri}
                                        type="number"
                                        id="dri"
                                        className="input"
                                        onChange={(e) =>
                                            setPlayer({
                                                ...player,
                                                dri: Number(e.target.value),
                                            })
                                        }
                                    />
                                </div>
                                {/* DEF Input */}
                                <div className="form-group">
                                    <label htmlFor="def" className="label">
                                        DEF
                                    </label>
                                    <input
                                        value={player.def}
                                        type="number"
                                        id="def"
                                        className="input"
                                        onChange={(e) =>
                                            setPlayer({
                                                ...player,
                                                def: Number(e.target.value),
                                            })
                                        }
                                    />
                                </div>
                                {/* PHY Input */}
                                <div className="form-group">
                                    <label htmlFor="phy" className="label">
                                        PHY
                                    </label>
                                    <input
                                        value={player.phy}
                                        type="number"
                                        id="phy"
                                        className="input"
                                        onChange={(e) =>
                                            setPlayer({
                                                ...player,
                                                phy: Number(e.target.value),
                                            })
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="preview-panel">
                        <p className="preview-label">Live Preview</p>
                        <p className="preview-hint">Updates as you type</p>
                        <div
                            className={`preview-box tier-${getPlayerTier(player.overallRating)}`}
                        >
                            <PlayerCard player={player} />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default FootballPlayerCard;
