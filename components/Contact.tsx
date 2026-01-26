import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Phone, Send, Calendar, Clock, Check } from 'lucide-react';
import { Button } from './Button';
import { ADDRESS, EMAIL_ADDRESS, PHONE_NUMBER } from '../constants';

// Helper to get next business days
const getNextBusinessDays = (days = 3) => {
  const dates = [];
  let current = new Date();
  // Start from tomorrow
  current.setDate(current.getDate() + 1);
  
  while (dates.length < days) {
    const day = current.getDay();
    // 0 is Sunday, 6 is Saturday
    if (day !== 0 && day !== 6) {
      dates.push(new Date(current));
    }
    current.setDate(current.getDate() + 1);
  }
  return dates;
};

const TIME_SLOTS = ['9:00 AM', '11:00 AM', '1:00 PM', '3:00 PM'];

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', service: 'New Roof Installation', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Scheduling State
  const [availableDates, setAvailableDates] = useState<Date[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  useEffect(() => {
    const dates = getNextBusinessDays(3);
    setAvailableDates(dates);
    // Default to first available date/time to encourage booking
    setSelectedDate(dates[0]);
    setSelectedTime(TIME_SLOTS[0]);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => setIsSubmitted(true), 1000);
  };

  const formatDate = (date: Date) => {
    return {
      day: date.toLocaleDateString('en-US', { weekday: 'short' }),
      date: date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' })
    };
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-brand-dark rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          
          {/* Info Side */}
          <div className="lg:w-2/5 p-10 md:p-14 bg-brand-primary text-white relative overflow-hidden flex flex-col justify-between">
             <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
             <div className="absolute top-12 right-12 w-32 h-32 bg-brand-dark/10 rounded-full blur-xl"></div>
             
             <div className="relative z-10">
               <h3 className="text-3xl font-bold mb-6">Get Your Free Estimate</h3>
               <p className="text-blue-100 mb-10 leading-relaxed">
                 Fill out the form and we'll contact you within 24 hours to schedule an on-site inspection in Quispamsis or surrounding areas.
               </p>
               
               <div className="space-y-6">
                 <div className="flex items-start space-x-4">
                   <Phone className="w-6 h-6 text-blue-200 mt-1" />
                   <div>
                     <p className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-1">Call Us</p>
                     <p className="text-lg font-semibold">{PHONE_NUMBER}</p>
                   </div>
                 </div>
                 
                 <div className="flex items-start space-x-4">
                   <Mail className="w-6 h-6 text-blue-200 mt-1" />
                   <div>
                     <p className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-1">Email Us</p>
                     <p className="text-lg font-semibold">{EMAIL_ADDRESS}</p>
                   </div>
                 </div>
                 
                 <div className="flex items-start space-x-4">
                   <MapPin className="w-6 h-6 text-blue-200 mt-1" />
                   <div>
                     <p className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-1">Service Area</p>
                     <p className="text-lg font-semibold">{ADDRESS}</p>
                     <p className="text-blue-200 text-sm">Serving Rothesay, Hampton & Saint John</p>
                   </div>
                 </div>
               </div>
             </div>

             {/* Service Area Map */}
             <div className="mt-12 relative z-10">
                <div className="rounded-xl overflow-hidden shadow-lg border border-blue-400/30 h-64 bg-slate-100 relative group">
                   <iframe 
                     width="100%" 
                     height="100%" 
                     src="https://www.openstreetmap.org/export/embed.html?bbox=-66.15%2C45.30%2C-65.70%2C45.55&amp;layer=mapnik" 
                     className="w-full h-full"
                     style={{ border: 0 }}
                     title="Service Area Map"
                     loading="lazy"
                   ></iframe>
                   <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-primary/90 to-transparent p-4 flex items-end justify-between pointer-events-none">
                     <p className="text-white text-xs font-bold uppercase tracking-wider flex items-center drop-shadow-md">
                       <MapPin className="w-3 h-3 mr-1" /> Kennebecasis Valley
                     </p>
                   </div>
                </div>
             </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-3/5 p-10 md:p-14 bg-white">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <Send className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-brand-dark mb-2">Request Received!</h4>
                <p className="text-slate-600 max-w-sm mx-auto mb-6">
                  Thanks {formState.name}. We have tentatively scheduled your estimate for <span className="font-bold text-brand-primary">{selectedDate?.toLocaleDateString()} at {selectedTime}</span>. We will confirm via phone shortly.
                </p>
                <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-2">New Request</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all outline-none"
                      placeholder="John Doe"
                      value={formState.name}
                      onChange={e => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all outline-none"
                      placeholder="(506) ..."
                      value={formState.phone}
                      onChange={e => setFormState({...formState, phone: e.target.value})}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                  <input 
                    required
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all outline-none"
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                  />
                </div>

                {/* Appointment Selection Section */}
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <div className="flex items-center space-x-2 mb-4">
                    <Calendar className="w-5 h-5 text-brand-primary" />
                    <span className="text-sm font-bold text-brand-dark uppercase tracking-wide">Schedule Free Estimate</span>
                  </div>

                  {/* Date Selection */}
                  <div className="mb-4">
                    <label className="block text-xs font-semibold text-slate-500 mb-2">PREFERRED DATE (NEXT 3 BUSINESS DAYS)</label>
                    <div className="grid grid-cols-3 gap-2">
                      {availableDates.map((date, idx) => {
                        const fmt = formatDate(date);
                        const isSelected = selectedDate?.toDateString() === date.toDateString();
                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setSelectedDate(date)}
                            className={`flex flex-col items-center justify-center p-2 rounded-lg border transition-all ${
                              isSelected 
                              ? 'bg-brand-primary border-brand-primary text-white shadow-md' 
                              : 'bg-white border-slate-200 text-slate-600 hover:border-brand-primary hover:text-brand-primary'
                            }`}
                          >
                            <span className="text-xs font-medium uppercase opacity-80">{fmt.day}</span>
                            <span className="text-sm font-bold">{fmt.date}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Time Selection */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-2 flex items-center">
                      <Clock className="w-3 h-3 mr-1" /> PREFERRED TIME
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {TIME_SLOTS.map((time) => {
                        const isSelected = selectedTime === time;
                        return (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            className={`py-2 text-xs font-bold rounded-md transition-all flex items-center justify-center ${
                              isSelected
                              ? 'bg-brand-dark text-white shadow-sm'
                              : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3 mr-1" />}
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Message (Optional)</label>
                  <textarea
                    rows={2}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all outline-none resize-none"
                    placeholder="Tell us about your roof..."
                    value={formState.message}
                    onChange={e => setFormState({...formState, message: e.target.value})}
                  ></textarea>
                </div>

                <Button type="submit" size="lg" fullWidth>
                  Confirm Appointment
                </Button>
                <p className="text-xs text-slate-400 text-center mt-4">
                  We will call to confirm this time slot before arriving.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};