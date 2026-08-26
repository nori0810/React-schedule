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
  const[editId,setEditId]=useState<number|null>(null);


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

    const editEvent = (id:number)=>{
      const event = events.find((event)=>event.id===id);

      setEditId(id);

      setTitle(event.title);
      setDate(event.date);
      setTime(event.time);
    };

   const saveEvent = (id:number) => {
  const newEvents = events.map((event) => {
    if(event.id===id){
    return {
      ...event,
    title:title,
    date:date,
    time:time,
    };
  }
  return event;
  });
  setEvents(newEvents);
  setEditId(null);
  setTitle("");
  setDate("");
  setTime("");
};

const cancelEvent =()=>{
  setEditId(null);
  setTitle("");
  setDate("");
  setTime("");
}


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

{editId !== null &&(
 <button
  onClick={() => {
    
      saveEvent(editId);
    
  }}> 保存
</button>
)}

{editId !== null && (
  <button
    onClick={() => {
      cancelEvent();
    }}
  >
    キャンセル
  </button>
)}



      <div>
        {events.map((event) => (
          <Event
            key={event.id}
            deleteEvent={deleteEvent}
            editEvent={editEvent}
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
