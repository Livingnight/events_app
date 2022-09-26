export async function getAllEvents() {
  const response = await fetch('https://favorite-meetup-app-default-rtdb.firebaseio.com/events.json');
  const data = await response.json();

  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key]
    });
  }

  console.log('get all events ', events)
  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  console.log('get featured events ', allEvents)
  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const allEvents = await getAllEvents();
  console.log('geteventbyid ', allEvents)
  return allEvents.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  const allEvents = await getAllEvents();
  console.log('getfilteredevents ', allEvents)

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
}
