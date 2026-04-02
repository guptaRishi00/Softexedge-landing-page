"use client";

import { useState, useEffect, useRef } from "react";
import { Sunrise, Sun, Sunset, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SchedulePickerProps {
  onSelect: (date: string, time: string) => void;
  selectedDate: string;
  selectedTime: string;
}

export default function SchedulePicker({ onSelect, selectedDate, selectedTime }: SchedulePickerProps) {
  const [selectedPeriod, setSelectedPeriod] = useState("Midday");
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);
  const datesPerPage = 5;

  // Generate the next 20 weekdays dynamically
  const allDates = Array.from({ length: 40 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return d;
  }).filter(d => d.getDay() !== 0 && d.getDay() !== 6).slice(0, 20).map(d => {
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return {
      day: days[d.getDay()],
      date: `${d.getDate() < 10 ? '0' + d.getDate() : d.getDate()} ${months[d.getMonth()]}`,
    };
  });

  const totalPages = Math.ceil(allDates.length / datesPerPage);
  const visibleDates = allDates.slice(page * datesPerPage, (page + 1) * datesPerPage);

  const timeSlots = {
    Morning: ["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM"],
    Midday: ["12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM"],
    Evening: ["04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM"],
  };

  useEffect(() => {
    if (selectedDate === "" && selectedTime === "") {
      setSelectedPeriod("Midday");
    }
  }, [selectedDate, selectedTime]);

  const handleTimeSelect = (time: string) => {
    if (selectedDate) {
      onSelect(selectedDate, time);
    } else {
      onSelect(visibleDates[0].date, time);
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6 w-full text-gray-900 bg-white">
      {/* Date Selection */}
      <div className="space-y-3 sm:space-y-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-base sm:text-lg font-bold text-[#04034C]">When should we connect?</h3>
          <div className="flex gap-1.5 sm:gap-2 flex-shrink-0">
            <button
              type="button"
              onClick={() => { setDirection(-1); setPage((p) => Math.max(0, p - 1)); }}
              disabled={page === 0}
              className="p-1 border border-gray-300 rounded-full hover:bg-gray-50 text-gray-400 hover:text-gray-900 transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => { setDirection(1); setPage((p) => Math.min(totalPages - 1, p + 1)); }}
              disabled={page >= totalPages - 1}
              className="p-1 border border-gray-900 rounded-full hover:bg-gray-100 text-gray-900 transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={page}
              initial={{ x: direction > 0 ? 120 : -120, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -120 : 120, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="flex gap-2 sm:gap-3"
            >
              {visibleDates.map((item, idx) => (
                <button
                  key={`${page}-${idx}`}
                  type="button"
                  onClick={() => onSelect(item.date, selectedTime)}
                  className={`min-w-0 flex-1 py-2.5 sm:py-3 px-1.5 sm:px-2 rounded-xl border flex flex-col items-center gap-0.5 sm:gap-1 transition-all cursor-pointer ${
                    selectedDate === item.date
                      ? "border-[#2F85EA] bg-blue-50/40"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <span className={`text-[10px] sm:text-[11px] font-bold ${selectedDate === item.date ? 'text-gray-900' : 'text-gray-600'}`}>{item.day}</span>
                  <span className={`text-[13px] sm:text-[15px] font-bold ${selectedDate === item.date ? 'text-gray-900' : 'text-gray-800'}`}>{item.date}</span>
                </button>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Time Selection */}
      <div className="space-y-3 sm:space-y-4">
        <h3 className="text-[13px] sm:text-[15px] font-bold text-[#04034C]">Select your preferred time slot</h3>
        
        <div className="flex p-1 sm:p-1.5 bg-gray-100 rounded-full">
          {["Morning", "Midday", "Evening"].map((period) => (
            <button
              key={period}
              type="button"
              onClick={() => { setSelectedPeriod(period); onSelect(selectedDate, ""); }}
              className={`flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-1.5 sm:py-2 text-[12px] sm:text-[14px] font-medium rounded-full transition-all cursor-pointer ${
                selectedPeriod === period ? "bg-white shadow-sm text-gray-900" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {period === "Morning" && <Sunrise size={14} className="hidden sm:block" />}
              {period === "Midday" && <Sun size={14} className="hidden sm:block" />}
              {period === "Evening" && <Sunset size={14} className="hidden sm:block" />}
              {period}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-3 min-h-[96px] sm:min-h-[108px] content-start">
          {timeSlots[selectedPeriod as keyof typeof timeSlots].map((time) => (
            <button
              key={time}
              type="button"
              onClick={() => handleTimeSelect(time)}
              className={`w-[calc(33.333%-6px)] sm:w-[calc(25%-9px)] py-2.5 sm:py-3 rounded-xl border text-[12px] sm:text-[14px] font-bold transition-all cursor-pointer ${
                selectedTime === time
                  ? "border-[#2F85EA] bg-blue-50/40 text-gray-900"
                  : "border-gray-200 text-gray-800 hover:border-gray-300"
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
