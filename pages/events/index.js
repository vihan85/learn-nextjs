import {getAllEvents} from '../../dummy-data'
import EventList from '../../components/events/event-list';
import EventSearch from '../../components/events/event-search';
import { useRouter } from 'next/router';
function AllEvents() {
    const AllEvents =  getAllEvents()
    const router = useRouter()
    const handleSearch = (month, year) => {
        const fullPath = `/events/${month}/${year}`
        router.push(fullPath)
    }
 
    return (
        <div>
            <EventSearch onSearch={handleSearch}/>
            <EventList items={AllEvents}/>
        </div>
    );
}
export default AllEvents;
