type EventProps = {
  id:number
  title: string
  date: string
  time: string
  deleteEvent:(id:number)=>void
}

function Event({ id,title, date, time,deleteEvent }: EventProps) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{time}</p>
      <button onClick={()=>deleteEvent(id)}>削除</button>
    </div>
  )
}

export default Event