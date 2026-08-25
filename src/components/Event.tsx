type EventProps = {
  id:number
  title: string
  date: string
  time: string
  deleteEvent:(id:number)=>void
  editEvent:(id:number)=>void;
}

function Event({ id,title, date, time,deleteEvent,editEvent}: EventProps) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <button onClick={()=>deleteEvent(id)}>削除</button>
      <button onClick={()=>editEvent(id)}>編集</button>
    </div>
  )
}

export default Event
