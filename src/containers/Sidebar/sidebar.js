import SidebarBtn from '../../components/sidebarBtn/sidebarBtn';

import {
    ChartIcon,
    TicketsIcon,
    IdeasIcon,
    ContactsIcon,
    AgentsIcon,
    ArticlesIcon,
    SettingsIcon,
    SubscriptionIcon
} from '../../assets/icons/icons';

import MainLogo from "../../assets/images/icons/logo.svg";

import './main.scss';

const Sidebar = () => {
    return (
        <div className = 'sidebar'>
            <div className="logo-holder">
                <img src={MainLogo} alt="Logo" className="sidebar-logo"/>
                <a href="javascript:void(0)">Dashboart Kit</a>
            </div>
            <SidebarBtn title = 'Overview' icon = {<ChartIcon/>}/>
            <SidebarBtn title = 'Tickets'  icon = {<TicketsIcon/>}/>
            <SidebarBtn title = 'Ideas' icon = {<IdeasIcon/>}/>
            <SidebarBtn title = 'Contacts' icon = {<ContactsIcon/>}/>
            <SidebarBtn title = 'Agents' icon = {<AgentsIcon/>}/>
            <SidebarBtn title = 'Articles' icon = {<ArticlesIcon/>}/>
            <SidebarBtn title = 'Settings' icon = {<SettingsIcon/>}/>
            <SidebarBtn title = 'Subscription' icon = {<SubscriptionIcon/>}/>
        </div>
        
    )
}

export default Sidebar;