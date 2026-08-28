import "./Calendar.css";

type EventData = {
  id: number;
  title: string;
  date: string;
  time: string;
};

function Calendar({ events }: { events: EventData[] }) {
  console.log(events);

  const day = Array.from({ length: 31 }, (_, i) => i + 1);

  const hasEvent = events.some((event) => event.date === day);

  console.log(hasEvent);

  return (
    <div>
      <h2>カレンダー</h2>

      <div className="Days">
        {day.map((checkNow) => {
          return (
            <div className="dateBox">
              <div className="date"></div>

              {hasEvent && (
                <div className="dot">●</div>
              )}
            </div>
          );
        })}

        <div className="dateBox">
          <div className="date">24</div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
