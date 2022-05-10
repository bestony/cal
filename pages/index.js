import Head from 'next/head'
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import cnLocale from "@fullcalendar/core/locales/zh-cn"

export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <Head>
        <title>白宦成的日程安排</title>
      </Head>
        <h1 className="text-3xl font-bold underline text-center my-8">
            白宦成的日程安排
        </h1>
        <FullCalendar
            // initialView="dayGridWeek"
            weekNumbers={true}

            headerToolbar={{
                start: 'today',
                center: 'title',
                end: 'prev,next'
            }}
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
