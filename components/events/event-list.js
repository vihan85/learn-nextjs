import EventItem from "./event-item";
import classes from './event-list.module.scss'
function EventList({items}) {
  
    return (
        <ul className={classes.list}>
            {
                items.map(item => (
                    <EventItem key={item.id} item={item} />
                ))
            }
        </ul>
    );
}
export default EventList;
