import './style.scss';

function Card(props) {
    const { cources } = props;
    const convertSecondsToHoursMinutes = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        return `${hours}h ${minutes}m`;
    }

    return (
        <div className="card__container">
            {cources.map(card =>
                <div className="card" key={card.id}>
                    <div className="card__img">
                        <img src={card.image} alt="" />
                        <span className="card__img--level">{card.level}</span>
                    </div>
                    <h3 className="card__title">{card.title}</h3>
                    <div className="card__info">
                        <div className="card__info--user">
                            <img src={card.user.avatar} alt={card.user.name} />
                            <span>{card.user.name}</span>
                        </div>
                        <span>{card.rating}</span>
                    </div>
                    <div className="card__descr">
                        <span>{card.students} student</span>
                        <span>{card.modules} modules</span>
                        <span>{convertSecondsToHoursMinutes(card.duration)}</span>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Card