import { useRouter } from 'next/router';
import * as icons from '../icons';
import Button from '../ui/button';
import classes from './event-item.module.scss';

function EventItem({ item }) {
    const { title, date, location, image, id } = item;

    const humanReadabteDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    const formatedAddress = location.replace(', ', '/n');

    const exploreLink = `events/${id}`;

    return (
        <li className={classes.item}>
            <img src={'/' + image} alt={'title'} />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2> {title}</h2>
                    <div className={classes.date}>
                        <icons.DateIcon />
                        <time>{humanReadabteDate}</time>
                    </div>
                    <div className={classes.address}>
                        <icons.AddressIcon />
                        <address>{formatedAddress}</address>
                    </div>
                </div>
                <div className={classes.actions}>

                    <Button link={exploreLink}>
                        <span>Explore Event</span>
                        <span className={classes.icon}>
                            <icons.ArrowRightIcon />
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    );
}
export default EventItem;
