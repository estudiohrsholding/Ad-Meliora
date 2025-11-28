'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Mail, User, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ContactFormState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

const N8N_WEBHOOK_URL = 'https://api.baibussines.com/webhooks/inmo_admeliora_lead';

interface ContactFormProps {
  propertyId?: string;
  propertyName?: string;
}

export function ContactForm({ propertyId, propertyName }: ContactFormProps = {}) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [state, setState] = useState<ContactFormState>({
    loading: false,
    success: false,
    error: null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    
    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setState({
        loading: false,
        success: false,
        error: 'Please fill in all required fields.'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setState({
        loading: false,
        success: false,
        error: 'Please enter a valid email address.'
      });
      return;
    }

    setState({ loading: true, success: false, error: null });

    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || null,
        message: formData.message.trim(),
        source: 'Ad Meliora Web Form',
        ...(propertyId && { property_id: propertyId }),
        ...(propertyName && { property_name: propertyName })
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
        name: '',
        email: '',
        phone: '',
        message: ''
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setState(prev => ({ ...prev, success: false }));
      }, 5000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setState({
        loading: false,
        success: false,
        error: 'Failed to send message. Please try again or contact us directly via phone.'
      });
    }
  };

  return (
    <div>
      {!propertyId && (
        <h2 className="text-2xl font-heading font-bold text-gray-950 mb-6">Send Us a Message</h2>
      )}
      
      {/* Success Message */}
      {state.success && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
          <p className="text-green-800 text-sm">
            Thank you! Your message has been sent successfully. We'll get back to you soon.
          </p>
        </div>
      )}

      {/* Error Message */}
      {state.error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
          <p className="text-red-700 text-sm">{state.error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            <User className="w-4 h-4 inline mr-2 text-[#B8860B]" />
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={state.loading}
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-950 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#B8860B] focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            <Mail className="w-4 h-4 inline mr-2 text-[#B8860B]" />
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={state.loading}
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-950 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#B8860B] focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            <Phone className="w-4 h-4 inline mr-2 text-[#B8860B]" />
            Phone Number <span className="text-gray-500 text-xs">(Optional)</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            disabled={state.loading}
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-950 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#B8860B] focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder="+34 600 000 000"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            <MessageCircle className="w-4 h-4 inline mr-2 text-[#B8860B]" />
            Your Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            disabled={state.loading}
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-950 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#B8860B] focus:border-transparent transition-all duration-200 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
            placeholder={propertyName ? `Tell us about ${propertyName}...` : "Tell us about your dream property..."}
          />
        </div>

        <Button
          type="submit"
          disabled={state.loading}
          className="w-full bg-gradient-to-r from-[#FFD700] to-[#B8860B] hover:from-[#B8860B] hover:to-[#B8860B]/90 text-white font-bold py-4 px-6 shadow-lg hover:shadow-[#B8860B]/25 transition-all duration-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {state.loading ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <MessageCircle className="w-4 h-4 mr-2" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </div>
  );
}

