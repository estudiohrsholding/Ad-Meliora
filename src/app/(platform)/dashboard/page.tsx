'use client';

import { SystemStatusCard } from '@/components/portal/SystemStatusCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, BarChart3, Webhook, Bot } from 'lucide-react';
import { BAI_SYSTEM_CONFIG } from '@/app/bai-system';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-beige-light/30 border-b border-gray-200 pt-8 pb-8 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-heading font-bold text-gray-950 mb-2 flex items-center gap-3">
              <Settings className="w-8 h-8 text-admeliora-gold" />
              Ad Meliora Control Panel
            </h1>
            <p className="text-gray-700">
              B.A.I. Management Shell - Monitor and configure your automated services
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* System Status Card - Main Feature */}
            <div className="lg:col-span-2">
              <SystemStatusCard />
            </div>

            {/* Quick Stats */}
            <div className="space-y-6">
              <Card className="bg-white border-gray-200 shadow-soft">
                <CardHeader>
                  <CardTitle className="text-gray-950 text-lg flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-admeliora-gold" />
                    Quick Stats
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-sm">Total Properties</span>
                    <span className="text-gray-950 font-semibold">7</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-sm">Active Webhooks</span>
                    <span className="text-gray-950 font-semibold">2</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-sm">AI Engine</span>
                    <span className="text-gray-950 font-semibold">{BAI_SYSTEM_CONFIG.AI_ENGINE}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200 shadow-soft">
                <CardHeader>
                  <CardTitle className="text-gray-950 text-lg flex items-center gap-2">
                    <Webhook className="w-5 h-5 text-admeliora-gold" />
                    Webhook Endpoints
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Lead Capture</p>
                    <p className="text-xs text-admeliora-gold font-mono break-all">
                      {BAI_SYSTEM_CONFIG.N8N_LEAD_WEBHOOK}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Appointments</p>
                    <p className="text-xs text-admeliora-gold font-mono break-all">
                      {BAI_SYSTEM_CONFIG.N8N_APPOINTMENT_WEBHOOK}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-admeliora-gold/10 to-admeliora-gold-light/10 border-admeliora-gold/30 shadow-soft">
                <CardHeader>
                  <CardTitle className="text-gray-950 text-lg flex items-center gap-2">
                    <Bot className="w-5 h-5 text-admeliora-gold" />
                    AI Configuration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <p className="text-xs text-gray-600 mb-1">System Prompt</p>
                      <p className="text-xs text-gray-700 italic line-clamp-3">
                        {BAI_SYSTEM_CONFIG.SYSTEM_PROMPT_INMO}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="mt-8">
            <Card className="bg-beige-light/30 border-gray-200 shadow-soft">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-gray-950 font-semibold mb-3">About B.A.I. Management</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      This control panel provides real-time monitoring of your B.A.I. automated services. 
                      All webhooks are actively connected to n8n automation workflows, ensuring seamless 
                      lead capture and appointment scheduling.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-gray-950 font-semibold mb-3">Service Integration</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Your AI chatbot uses {BAI_SYSTEM_CONFIG.AI_ENGINE} to provide expert real estate 
                      assistance. All interactions are automatically processed and qualified leads are 
                      forwarded to your team via WhatsApp through n8n automation.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

