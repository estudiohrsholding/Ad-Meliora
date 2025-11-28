'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar, Clock, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const N8N_WEBHOOK_URL = 'https://api.baibussines.com/webhooks/inmo_appointment_scheduler';

interface CalendarSchedulerState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

export function CalendarScheduler() {
  const [formData, setFormData] = useState({
    preferred_date: '',
    time_range: '',
  });

  const [state, setState] = useState<CalendarSchedulerState>({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (state.error) {
      setState(prev => ({ ...prev, error: null }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validation
    if (!formData.preferred_date || !formData.time_range) {
      setState({
        loading: false,
        success: false,
        error: 'Please fill in all required fields.'
      });
      return;
    }

    // Date validation - ensure date is not in the past
    const selectedDate = new Date(formData.preferred_date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
      setState({
        loading: false,
        success: false,
        error: 'Please select a future date.'
      });
      return;
    }

    setState({ loading: true, success: false, error: null });

    try {
      const payload = {
        user_id: 'LoggedUser-123',
        property_id: 'INMO_007',
        preferred_date: formData.preferred_date,
        time_range: formData.time_range,
        action: 'ScheduleAppointment'
      };

      const response = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Success
      setState({
        loading: false,
        success: true,
        error: null
      });

      // Reset form
      setFormData({
        preferred_date: '',
        time_range: ''
      });

    } catch (error) {
      console.error('Error scheduling appointment:', error);
      setState({
        loading: false,
        success: false,
        error: 'Failed to schedule appointment. Please try again or contact us directly.'
      });
    }
  };

  return (
    <Card className="bg-white border-gray-200 shadow-soft">
      <CardHeader>
        <CardTitle className="text-gray-950 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-admeliora-gold" />
          Schedule Your Property Viewing
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Success Message */}
        {state.success && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-green-800 font-medium mb-1">Appointment Request Submitted!</p>
              <p className="text-green-700 text-sm">
                B.A.I. is now processing your request and the agent (n8n) will confirm via WhatsApp.
              </p>
            </div>
          </div>
        )}

        {/* Error Message */}
        {state.error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-red-700 text-sm">{state.error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="preferred_date" className="text-gray-700 mb-2 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-admeliora-gold" />
              Preferred Date <span className="text-red-500">*</span>
            </Label>
            <Input
              type="date"
              id="preferred_date"
              name="preferred_date"
              value={formData.preferred_date}
              onChange={handleChange}
              required
              disabled={state.loading}
              min={new Date().toISOString().split('T')[0]}
              className="bg-white border-gray-300 text-gray-950 placeholder-gray-500 focus:ring-admeliora-gold disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          <div>
            <Label htmlFor="time_range" className="text-gray-700 mb-2 flex items-center gap-2">
              <Clock className="w-4 h-4 text-admeliora-gold" />
              Preferred Time Range <span className="text-red-500">*</span>
            </Label>
            <select
              id="time_range"
              name="time_range"
              value={formData.time_range}
              onChange={handleChange}
              required
              disabled={state.loading}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-950 focus:outline-none focus:ring-2 focus:ring-admeliora-gold focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <option value="">Select a time range</option>
              <option value="09:00-11:00">Morning (9:00 AM - 11:00 AM)</option>
              <option value="11:00-13:00">Late Morning (11:00 AM - 1:00 PM)</option>
              <option value="13:00-15:00">Afternoon (1:00 PM - 3:00 PM)</option>
              <option value="15:00-17:00">Late Afternoon (3:00 PM - 5:00 PM)</option>
              <option value="17:00-19:00">Evening (5:00 PM - 7:00 PM)</option>
            </select>
          </div>

          <div className="bg-beige-light/50 rounded-lg p-4 border border-gray-200">
            <p className="text-sm text-gray-700 mb-2">
              <strong className="text-gray-950">Property:</strong> Sea Senses, Punta Prima (INMO_007)
            </p>
            <p className="text-sm text-gray-700">
              <strong className="text-gray-950">Type:</strong> Long-Term Rental - €1,600 / month
            </p>
          </div>

          <Button
            type="submit"
            disabled={state.loading || state.success}
            className="w-full bg-gradient-to-r from-[#FFD700] to-[#B8860B] hover:from-[#B8860B] hover:to-[#B8860B]/90 text-white font-bold py-4 px-6 shadow-lg hover:shadow-[#B8860B]/25 transition-all duration-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {state.loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Scheduling...
              </>
            ) : state.success ? (
              <>
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Request Submitted
              </>
            ) : (
              <>
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Appointment
              </>
            )}
          </Button>
        </form>

        <div className="bg-beige-light/30 rounded-lg p-4 border border-admeliora-gold/20">
          <p className="text-xs text-gray-700">
            <strong className="text-admeliora-gold">B.A.I. Automation:</strong> Your appointment request will be automatically processed by our n8n automation engine. 
            You'll receive a confirmation via WhatsApp with all the details and property location information.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

