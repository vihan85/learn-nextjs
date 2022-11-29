import { useRouter } from 'next/router';
import { Fragment } from 'react';
import EventContent from '../../components/event-detail/event-content';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventSummary from '../../components/event-detail/event-summary';
import { getEventById } from '../../dummy-data';

function EventDetailPage() {
    const router = useRouter();
    const eventId = router.query.eventId;
    const event = getEventById(eventId);
    console.log(event)
    if (!event) {
        return <div><h1>not fuond page</h1></div>;
    }
    return (
        <Fragment>
            <EventSummary title={event.title}></EventSummary>
            <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title}></EventLogistics>
            <EventContent>{event.description}</EventContent>
        </Fragment>
    );
}
export default EventDetailPage;
