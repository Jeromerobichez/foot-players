import './onePlayerCard.css'
const OnePlayerCard = ({data}) => {
 return (
    <div className="player-card">
        <div>{data.lastName}</div>
    </div>
 )
}
export default OnePlayerCard;
