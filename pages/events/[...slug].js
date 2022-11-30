import { useRouter } from 'next/router';
import { Fragment } from 'react';
import ErrorAlert from '../../components/events/error-alert';

import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';
import { getFilteredEvents } from '../../dummy-data';

function FilteredEventPage() {
    const router = useRouter();
    const filterData = router.query.slug;
    console.log(router.pathname)
    if (!filterData) {
        return <p className={'center'}>Loading...</p>;
    }
    const numMonth = +filterData[0];
    const numYear = +filterData[1];
    if (isNaN(numMonth) || isNaN(numYear) || numYear > 2030 || numYear < 2021 || numMonth > 12 || numMonth < 1) {
        return (
            <Fragment>
                <ErrorAlert>
                    <p> Unvild filfer your values</p>
                    <Button link="/events">Show all events</Button>
                </ErrorAlert>
            </Fragment>
        );
    }

    const filterEvents = getFilteredEvents({
        month: numMonth,
        year: numYear,
    });
    const filterEventsLength = filterEvents.length;
    if (!filterEvents || filterEventsLength === 0) {
        return (
            <Fragment>
                <ErrorAlert>
                    <p> No Events found for the chosen filter!</p>
                    <Button link="/events">Show all events</Button>
                </ErrorAlert>
            </Fragment>
        );
    }
    const date = new Date(numYear, numMonth);
    return (
        <div>
            <ResultsTitle date={date} />
            <EventList items={filterEvents} />
        </div>
    );
}
export default FilteredEventPage;
