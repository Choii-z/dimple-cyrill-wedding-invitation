import React, { useState, useEffect } from 'react';
import { Calendar, Download, ExternalLink, Clock, Bell } from 'lucide-react';
import { WEDDING_CONFIG } from '../data/weddingData';
import { SectionHeader } from './Botanicals';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });
  const [calendarOpen, setCalendarOpen] = useState(false);

  useEffect(() => {
    const calculateTime = () => {
      const targetDate = new Date(WEDDING_CONFIG.dateISO).getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPast: false });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Calendar Links Generation
  const eventDetails = {
    title: `Wedding of ${WEDDING_CONFIG.bride} & ${WEDDING_CONFIG.groom}`,
    description: `We invite you to celebrate the marriage of ${WEDDING_CONFIG.bride} and ${WEDDING_CONFIG.groom} at ${WEDDING_CONFIG.venue.name}, ${WEDDING_CONFIG.venue.location}. Formal garden cocktail attire.`,
    location: `${WEDDING_CONFIG.venue.name}, ${WEDDING_CONFIG.venue.address}`,
    startDate: "20261222T070000Z", // 3:00 PM GMT+8 = 07:00:00 UTC
    endDate: "20261222T160000Z",   // Midnight GMT+8 = 16:00:00 UTC
  };

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    eventDetails.title
  )}&dates=${eventDetails.startDate}/${eventDetails.endDate}&details=${encodeURIComponent(
    eventDetails.description
  )}&location=${encodeURIComponent(eventDetails.location)}`;

  const yahooCalendarUrl = `https://calendar.yahoo.com/?v=60&view=d&type=20&title=${encodeURIComponent(
    eventDetails.title
  )}&st=${eventDetails.startDate}&dur=0900&desc=${encodeURIComponent(
    eventDetails.description
  )}&in_loc=${encodeURIComponent(eventDetails.location)}`;

  const downloadIcsFile = () => {
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Angelika and Cyrill Wedding//EN",
      "BEGIN:VEVENT",
      `SUMMARY:${eventDetails.title}`,
      `DESCRIPTION:${eventDetails.description}`,
      `LOCATION:${eventDetails.location}`,
      `DTSTART:${eventDetails.startDate}`,
      `DTEND:${eventDetails.endDate}`,
      "STATUS:CONFIRMED",
      "BEGIN:VALARM",
      "TRIGGER:-P1D",
      "ACTION:DISPLAY",
      `DESCRIPTION:Reminder: ${eventDetails.title} tomorrow!`,
      "END:VALARM",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", "Angelika-and-Cyrill-Wedding.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setCalendarOpen(false);
  };

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#5B1E31] text-[#FAF7F2] relative overflow-hidden">
      {/* Texture and ambient light */}
      <div className="absolute inset-0 bg-radial from-[#85374E]/40 via-transparent to-[#431422] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <SectionHeader
          badge="Counting Down to Forever"
          title="December 22, 2026"
          subtitle="Join us as we count the days, hours, and moments until we say 'I Do'."
          dark={true}
        />

        {/* Countdown Digit Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 my-8 max-w-2xl mx-auto">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FAF7F2]/10 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-[#CDB38B]/40 shadow-inner flex flex-col items-center justify-center transition-transform hover:-translate-y-1"
            >
              <span className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#FAF7F2] tracking-tight">
                {String(item.value).padStart(2, '0')}
              </span>
              <span className="eyebrow text-[#CDB38B] mt-2 text-xs tracking-[0.2em]">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Add to Calendar Button & Dropdown */}
        <div className="mt-10 relative inline-block text-left">
          <button
            type="button"
            onClick={() => setCalendarOpen(!calendarOpen)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FAF7F2] text-[#5B1E31] text-xs uppercase tracking-widest font-semibold hover:bg-[#F3ECE2] transition-all shadow-md hover:shadow-lg"
          >
            <Calendar className="w-4 h-4 text-[#5D6B4F]" />
            <span>Save to Your Calendar</span>
            <Bell className="w-3.5 h-3.5 text-[#CDB38B]" />
          </button>

          {calendarOpen && (
            <div className="origin-top mt-3 w-64 rounded-xl shadow-2xl bg-[#FAF7F2] text-[#2B2A27] ring-1 ring-black/10 divide-y divide-[#CDB38B]/20 z-50 absolute left-1/2 -translate-x-1/2 p-2">
              <a
                href={googleCalendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setCalendarOpen(false)}
                className="flex items-center justify-between px-4 py-2.5 text-xs font-medium rounded-lg hover:bg-[#F3ECE2] transition-colors"
              >
                <span>Google Calendar</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#6B6862]" />
              </a>
              <button
                type="button"
                onClick={downloadIcsFile}
                className="w-full flex items-center justify-between px-4 py-2.5 text-xs font-medium rounded-lg hover:bg-[#F3ECE2] transition-colors text-left"
              >
                <span>Apple / iCal / Outlook (.ics)</span>
                <Download className="w-3.5 h-3.5 text-[#6B6862]" />
              </button>
              <a
                href={yahooCalendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setCalendarOpen(false)}
                className="flex items-center justify-between px-4 py-2.5 text-xs font-medium rounded-lg hover:bg-[#F3ECE2] transition-colors"
              >
                <span>Yahoo Calendar</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#6B6862]" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
