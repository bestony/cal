import Head from 'next/head'
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";

export default function Home() {
  return (
    <div>
      <Head>
        <title>白宦成的日程安排</title>
      </Head>
        <FullCalendar
            plugins={[timeGridPlugin,dayGridPlugin, interactionPlugin]}
            nowIndicator={true}
            selectable
            initialEvents={[
                { title: 'nice event', start: new Date() }
            ]}
        />
    </div>
  )
}
