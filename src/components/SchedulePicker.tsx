"use client";

import { useMemo } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface SchedulePickerProps {
  onSelect: (date: string, time: string) => void;
  selectedDate: string;
  selectedTime: string;
}

function getUpcomingWeekdays(count: number) {
  const months = [
    "Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep","Oct","Nov","Dec",
  ];
  const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const results: { label: string; value: string }[] = [];
  const d = new Date();
  d.setDate(d.getDate() + 1);

  while (results.length < count) {
    const dow = d.getDay();
    if (dow !== 0 && dow !== 6) {
      const dateStr = `${days[dow]}, ${d.getDate()} ${months[d.getMonth()]}`;
      results.push({ label: dateStr, value: dateStr });
    }
    d.setDate(d.getDate() + 1);
  }
  return results;
}

const timeOptions = [
  "09:00 AM","09:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM",
  "12:00 PM","12:30 PM","01:00 PM","01:30 PM","02:00 PM","02:30 PM",
  "03:00 PM","03:30 PM","04:00 PM","04:30 PM","05:00 PM","05:30 PM",
];

export default function SchedulePicker({ onSelect, selectedDate, selectedTime }: SchedulePickerProps) {
  const dates = useMemo(() => getUpcomingWeekdays(10), []);

  return (
    <div className="flex flex-col gap-6">
      {/* Date dropdown */}
      <div className="relative group">
        <select
          value={selectedDate}
          onChange={(e) => onSelect(e.target.value, selectedTime)}
          className="peer w-full bg-transparent border-b-2 border-gray-100 py-2.5 text-[#04034C] text-[15px] appearance-none focus:outline-none focus:border-[#2F85EA] cursor-pointer"
        >
          <option value="" disabled hidden></option>
          {dates.map((d) => (
            <option key={d.value} value={d.value}>{d.label}</option>
          ))}
        </select>
        <label
          className={`absolute left-0 pointer-events-none transition-all duration-300 ${
            selectedDate
              ? "-top-5 text-[11px] text-[#2F85EA] font-bold"
              : "top-2.5 text-gray-400 text-[15px]"
          }`}
        >
          Preferred Date
        </label>
        <IoIosArrowDown className="absolute right-0 top-3 text-gray-300" />
      </div>

      {/* Time dropdown */}
      <div className="relative group">
        <select
          value={selectedTime}
          onChange={(e) => onSelect(selectedDate, e.target.value)}
          className="peer w-full bg-transparent border-b-2 border-gray-100 py-2.5 text-[#04034C] text-[15px] appearance-none focus:outline-none focus:border-[#2F85EA] cursor-pointer"
        >
          <option value="" disabled hidden></option>
          {timeOptions.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        <label
          className={`absolute left-0 pointer-events-none transition-all duration-300 ${
            selectedTime
              ? "-top-5 text-[11px] text-[#2F85EA] font-bold"
              : "top-2.5 text-gray-400 text-[15px]"
          }`}
        >
          Preferred Time
        </label>
        <IoIosArrowDown className="absolute right-0 top-3 text-gray-300" />
      </div>
    </div>
  );
}
