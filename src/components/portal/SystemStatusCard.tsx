'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Activity, MessageCircle, Calendar, Users } from 'lucide-react';
import { BAI_SYSTEM_CONFIG } from '@/app/bai-system';

export function SystemStatusCard() {
  const services = BAI_SYSTEM_CONFIG.SERVICES;

  return (
    <Card className="bg-white border-gray-200 shadow-soft">
      <CardHeader>
        <CardTitle className="text-gray-950 flex items-center gap-2">
          <Activity className="w-5 h-5 text-admeliora-gold" />
          B.A.I. System Status
        </CardTitle>
        <p className="text-sm text-gray-600 mt-1">
          Real-time operational status of B.A.I. services
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Chatbot Status */}
        <div className="flex items-center justify-between p-4 bg-beige-light/50 rounded-lg border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-admeliora-gold rounded-full animate-pulse" />
            <MessageCircle className="w-5 h-5 text-admeliora-gold" />
            <div>
              <p className="text-gray-950 font-medium">Chatbot</p>
              <p className="text-gray-600 text-sm">{services.CHATBOT.engine}</p>
            </div>
          </div>
          <Badge className="bg-admeliora-gold/20 text-admeliora-gold border-admeliora-gold/50">
            {services.CHATBOT.status}
          </Badge>
        </div>

        {/* Lead Webhook Status */}
        <div className="flex items-center justify-between p-4 bg-beige-light/50 rounded-lg border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-admeliora-gold rounded-full animate-pulse" />
            <Users className="w-5 h-5 text-admeliora-gold" />
            <div>
              <p className="text-gray-950 font-medium">Lead Webhook</p>
              <p className="text-gray-600 text-sm">{services.LEAD_CAPTURE.description}</p>
            </div>
          </div>
          <Badge className="bg-admeliora-gold/20 text-admeliora-gold border-admeliora-gold/50">
            {services.LEAD_CAPTURE.status}
          </Badge>
        </div>

        {/* Appointments Webhook Status */}
        <div className="flex items-center justify-between p-4 bg-beige-light/50 rounded-lg border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-admeliora-gold rounded-full animate-pulse" />
            <Calendar className="w-5 h-5 text-admeliora-gold" />
            <div>
              <p className="text-gray-950 font-medium">Appointments Webhook</p>
              <p className="text-gray-600 text-sm">{services.APPOINTMENT_SCHEDULER.description}</p>
            </div>
          </div>
          <Badge className="bg-admeliora-gold/20 text-admeliora-gold border-admeliora-gold/50">
            {services.APPOINTMENT_SCHEDULER.status}
          </Badge>
        </div>

        {/* System Info Footer */}
        <div className="pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Client ID: {BAI_SYSTEM_CONFIG.CLIENT_ID}</span>
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-admeliora-gold rounded-full" />
              24/7 Operational
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

