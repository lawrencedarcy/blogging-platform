import React from 'react';
import EventCardSmall from '../EventCardSmall/EventCardSmall';
import './EventsContainer.css';
import EventCardLarge from '../EventCardLarge/EventCardLarge';

const EventsContainer = ({eventList}) => {

  const sortedList = eventList.sort(function(a, b) {
    a = new Date(a.date);
    b = new Date(b.date);
    return a < b ? -1 : a > b ? 1 : 0;
});

  return (
    <div className="events_container" id="list">

      {sortedList.slice(0,1).map(ev => ( <EventCardLarge 
      key={ev._id}
      id={ev.title}
      title={ev.title}
      venue={ev.venue}
      date={ev.date}
       />)
       
       )}

      {sortedList.slice(1).map(ev => ( <EventCardSmall 
      key={ev._id}
      id={ev.title}
      title={ev.title}
      venue={ev.venue}
      date={ev.date}
       />)
       
       )}

    </div>
  );
};

export default EventsContainer;