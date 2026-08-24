import { useState } from "react";
import Event from "../components/Event";

type EventData = {
  id: number;
  title: string;
  date: string;
  time: string;
};

function Dashboard() {
  const [events, setEvents] = useState<EventData[]>([
    {
      id: 1,
      title: "買い物",
      date: "2026-08-24",
      time: "10:00",
    },
    {
      id: 2,
      title: "昼ごはん",
      date: "2026-08-24",
      time: "12:00",
    },
    {
      id: 3,
      title: "映画",
      date: "2026-08-24",
      time: "19:00",
    },
  ]);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const addEvent = () => {
    const newEvent: EventData = {
      id: events.length + 1,
      title,
      date,
      time,
    };

    setEvents([...events, newEvent]);

    setTitle("");
    setDate("");
    setTime("");
  };

  const deleteEvent = (id:number)=>{
      setEvents(events.filter((event)=>event.id!==id));
    };

  return (
    <div>
      <h1>予定表</h1>

      <input
        type="text"
        placeholder="予定"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <button onClick={addEvent}>追加</button>

      <div>
        {events.map((event) => (
          <Event
            key={event.id}
            deleteEvent={deleteEvent}
            id={event.id}
            title={event.title}
            date={event.date}
            time={event.time}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;