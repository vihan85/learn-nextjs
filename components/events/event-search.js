import { useRef } from 'react';
import Button from '../ui/button';
import classes from './events-search.module.css';
function EventSearch({ onSearch }) {
    const inputRefYear = useRef();
    const inputRefMonth = useRef();
    const handleSubmit = (event) => {
        event.preventDefault();
        const getSelectYear = inputRefYear.current.value;
        const getSelectMonth = inputRefMonth.current.value;
        onSearch(getSelectMonth, getSelectYear);
    };
    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label>Year</label>
                    <select id={'year'} ref={inputRefYear}>
                        <option value="2021">2021</option>
                        <option value={'2022'}>2022</option>
                    </select>
                </div>
                <div className={classes.control}>
                    <label htmlFor="month">Month</label>
                    <select id={'month'} ref={inputRefMonth}>
                        <option value={'1'}>January</option>
                        <option value={'2'}>February</option>
                        <option value={'3'}>March</option>
                        <option value={'4'}>April</option>
                        <option value={'5'}>May</option>
                        <option value={'6'}>June</option>
                        <option value={'7'}>July</option>
                        <option value={'8'}>August</option>
                        <option value={'9'}>Septenber</option>
                        <option value={'10'}>October</option>
                        <option value={'11'}>November</option>
                        <option value={'12'}>December</option>
                    </select>
                </div>
            </div>
            <Button>Find Events</Button>
        </form>
    );
}
export default EventSearch;
