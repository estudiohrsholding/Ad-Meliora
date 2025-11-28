'use client';

import { Wallet, History, Star, Award, Calendar, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function WalletSummary() {
  return (
    <div className="space-y-6">
      {/* Fidelity Points Card */}
      <Card className="bg-gradient-to-r from-admeliora-gold/10 to-admeliora-gold-light/10 border-admeliora-gold/30 shadow-soft">
        <CardHeader>
          <CardTitle className="text-gray-950 flex items-center gap-2">
            <Award className="w-5 h-5 text-admeliora-gold" />
            Fidelity Points
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-4xl font-bold text-gray-950 mb-2">150</p>
              <p className="text-gray-600 text-sm">Total Points</p>
            </div>
            <div className="text-right">
              <Badge className="bg-admeliora-gold text-white">
                <Star className="w-3 h-3 mr-1" />
                Active Member
              </Badge>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-admeliora-gold/30">
            <p className="text-sm text-gray-700">
              Earn points with each property viewing, inquiry, or completed transaction. 
              Points can be redeemed for discounts and special offers.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Request History */}
      <Card className="bg-white border-gray-200 shadow-soft">
        <CardHeader>
          <CardTitle className="text-gray-950 flex items-center gap-2">
            <History className="w-5 h-5 text-admeliora-gold" />
            Request History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Mock Appointment Request */}
            <div className="bg-beige-light/50 rounded-lg p-4 border border-gray-200">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-4 h-4 text-admeliora-gold" />
                    <h3 className="text-gray-950 font-semibold">Appointment Request</h3>
                    <Badge className="bg-blue-100 text-blue-700 border-blue-200 text-xs">
                      Pending
                    </Badge>
                  </div>
                  <p className="text-gray-700 text-sm mb-2">
                    Property: Sea Senses, Punta Prima (INMO_007)
                  </p>
                  <div className="flex flex-wrap gap-4 text-xs text-gray-600">
                    <span>Date: {new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                    <span>Time: 15:00-17:00</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-3 border-t border-gray-200">
                <Clock className="w-3 h-3 text-gray-500" />
                <span className="text-xs text-gray-600">
                  Submitted {new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })} • Awaiting confirmation via WhatsApp
                </span>
              </div>
            </div>

            {/* Empty state message for future requests */}
            <div className="text-center py-4">
              <p className="text-xs text-gray-500">
                Your property inquiries and viewing requests will appear here
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

