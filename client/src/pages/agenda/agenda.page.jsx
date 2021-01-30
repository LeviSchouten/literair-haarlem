import React, { useState, useEffect } from 'react';

import EventCard from '../../components/event-card/event-card.component';
import axios from 'axios';

const Agenda = () => {
  const [events, setEvents] = useState();

  const getEvents = async () => {
    const result = await axios('/events');
    const events = result.data;
    console.log(events);
    setEvents(events);
  };

  const generateEvents = (events) => {
    return events.map((event) => <EventCard props={event} key={event.id} />);
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="agenda">
      {events
        ? generateEvents(events)
        : 'Er staan op dit moment geen evenementen op de agenda.'}
    </div>
  );
};

export default Agenda;
