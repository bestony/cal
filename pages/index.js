import Head from 'next/head'
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

export default function Home() {
  return (
    <div>
      <Head>
        <title>白宦成的日程安排</title>
      </Head>
        <FullCalendar
            initialView='timeGridWeek'
            plugins={[timeGridPlugin, interactionPlugin]}
            nowIndicator={true}
            selectable
            initialEvents={[
                { title: 'nice event', start: new Date() }
            ]}
        />
    </div>
  )
}
