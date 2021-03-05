import Sidebar from '../../containers/Sidebar/sidebar';
import TicketList from '../../containers/TicketList/TicketList';

import './main.scss'

const Tickets = () => {
    return (
       <div className = "tickets">
       
            <Sidebar/>
            <div className="content">
            <h1>Tickets content</h1> 
            <TicketList/>
            </div>
       </div>
    )
}

export default Tickets;