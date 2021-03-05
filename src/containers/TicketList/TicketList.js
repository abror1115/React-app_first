import TicketListItem from "../../components/TicketListItem/TickedListItem"

import sdAvatar from "../../assets/images/2.png";

import "./main.scss";

const TicketList = () => {  
    const customerArr= [
        {
                imgLink:'',
                message:'Contact Email not Linked',
                activity:'Updated 1 day ago',
                fullname:'Tom Cruise',
                customerTime:'on 24.05.2019',
                dateDay:'May 26, 2019',
                dateHour:'6:30 PM',
                status:'High',
        },
        {
                imgLink:'',
                message:'Adding Images to Featured Posts',
                activity:'Updated 1 day ago',
                fullname:'Matt Damon',
                customerTime:'on 24.05.2019',
                dateDay:'May 26, 2019',
                dateHour:'8:00 PM',
                status:'Low'
        },
        {
                imgLink:'',
                message:'When will I be charged this month?',
                activity:'Updated 1 day ago',
                fullname:'Robert Downey',
                customerTime:'on 24.05.2019',
                dateDay:'May 26, 2019',
                dateHour:'7:30 PM',
                status:'High'
        },
        {
                imgLink:'',
                message:'Payment not going through',
                activity:'Updated 2 days ago',
                fullname:'Christian Bale',
                customerTime:'on 24.05.2019',
                dateDay:'May 25, 2019',
                dateHour:'5:00 PM',
                status:'Normal'
        },
        {
                imgLink:'',
                message:'Unable to add replies',
                activity:'Updated 2 days ago',
                fullname:'Henry Cavil',
                customerTime:'on 24.05.2019',
                dateDay:'May 25, 2019',
                dateHour:'4:00 PM',
                status:'High'
        },
        {
                imgLink:'',
                message:'Downtime since last week',
                activity:'Updated 3 days ago',
                fullname:'Chris Evans',
                customerTime:'on 23.05.2019',
                dateDay:'May 25, 2019',
                dateHour:'2:00 PM',
                status:'Normal'
        },
        {
                imgLink:'',
                message:'Referral Bonus',
                activity:'Updated 4 days ago',
                fullname:'Sam Smith',
                customerTime:'on 22.05.2019',
                dateDay:'May 25, 2019',
                dateHour:'11:30 AM',
                status:'Low'
        },
        {
                imgLink:'Salom qweerty',
                message:'How do I change my password?',
                activity:'Updated 6 days ago',
                fullname:'Steve Rogers',
                customerTime:'on 21.05.2019',
                dateDay:'May 24, 2019',
                dateHour:'1:00 PM',
                status:'Normal'
        },
    ]
    return(
        <div className = 'ticket-list'>
            {customerArr.map(item =>(
                 <TicketListItem
                    avatar={sdAvatar}
                    message={item.message}
                    activity={item.activity}
                    fullname={item.fullname}
                    customerTime={item.customerTime}
                    dateDay={item.dateDay}
                    dateHour={item.dateHour}
                    status={item.status}  
                 />
            ))}
        </div>
    )
};

export default TicketList;