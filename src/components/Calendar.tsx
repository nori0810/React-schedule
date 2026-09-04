import "./Calendar.css";

type EventData = {
  id: number;
  title: string;
  date: string;
  time: string;
};

function Calendar({
  events,
  month,
}: {
  events: EventData[];
  month: string;
}) {
  console.log(events);

  const day = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div>
      <h2>カレンダー</h2>

      <div className="Days">
        {day.map((checkNow) => {
          const hasEvent = events.some(
            (event) => event.date === month + "-" + checkNow
          );

          return (
            <div className="dateBox">
              <div className="date">{checkNow}</div>

              {hasEvent && (
                <div className="dot">●</div>
              )}
            </div>
          );
        })}

       
      </div>
    </div>
  );
}

export default Calendar;
