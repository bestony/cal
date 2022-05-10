import Head from 'next/head'
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import cnLocale from "@fullcalendar/core/locales/zh-cn"

export default function Home() {
  return (
    <div>
      <Head>
        <title>白宦成的日程安排</title>
      </Head>
        <FullCalendar
            initialView="dayGridWeek"
            locale={cnLocale}
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
