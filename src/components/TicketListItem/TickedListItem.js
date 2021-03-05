import "./main.scss";

const TicketListItem = ({ownerImg, message, activity, fullname, customerTime, dateDay, dateHour, status}) => {
    return(
        <div className = 'ticket-list-item'>
            <div className="item-left">
                <img src={ownerImg} alt="" className="ticket-owner-img"/>
                <div className="ticket-owner">
                    <h3 className="owner-title">{message}</h3>
                    <h3 className="owner-activity">{activity}</h3>
                </div>
            </div>
            <div className="item-right">
                <div className="customer">
                    <h3 className="customer-name">{fullname}</h3>
                    <span className="customer-time">{customerTime}</span>
                </div>
                <div className="date">
                    <h3 className="date-day">{dateDay}</h3>
                    <span className="date-hour">{dateHour}</span>
                </div>
                <h3 className="status">{status}</h3>
            </div>
        </div>
    )
}

export default TicketListItem;