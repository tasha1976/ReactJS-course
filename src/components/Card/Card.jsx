import './style.scss';

function Card(props) {
    const { data } = props;
    const convertSecondsToHoursMinutes = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        return `${hours}h ${minutes}m`;
    }

    return (
        <div className="card">
            <div className="card__img">
                <img src={data.image} alt="" />
                <span className="card__img--level">{data.level}</span>
            </div>
            <h3 className="card__title">{data.title}</h3>
            <div className="card__info">
                <div className="card__info--user">
                    <img src={data.user.avatar} alt={data.user.name} />
                    <span>{data.user.name}</span>
                </div>
                <span>{data.rating}</span>
            </div>
            <div className="card__descr">
                    <span>{data.students} student</span>
                    <span>{data.modules} modules</span>
                    <span>{convertSecondsToHoursMinutes(data.duration)}</span>
                </div>
        </div>
    );
}

export default Card;