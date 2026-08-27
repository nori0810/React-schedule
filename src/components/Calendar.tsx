import"./Calendar.css";

type EventData = {
  id: number;
  title: string;
  date: string;
  time: string;
};

function Calendar({ events }: { events: EventData[] }) {
  console.log(events);

    const day ="2026-08-24";

  const hasEvent = events.some((event) => event.date === day);

  console.log(hasEvent);

  return (
  <div>
  <h2>カレンダー</h2>

  <div className="Days">
    <div className="dateBox">
      <div className="date">24</div>
      
      {hasEvent && (
        <div className="dot">●</div>
      )}
    </div>
    <div className="dateBox">
      <div className="date">24</div>
      </div>
  </div>
</div>


  );
}


export default Calendar;
