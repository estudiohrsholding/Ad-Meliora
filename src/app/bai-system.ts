/**
 * B.A.I. System Configuration
 * Central configuration file for Ad Meliora Real Estate AI system
 * This file defines the core identity and endpoints for the B.A.I. engine
 */

export const BAI_SYSTEM_CONFIG = {
  // Client Identification
  CLIENT_ID: "INMO_ADMELIORA_001",

  // AI System Prompt for Real Estate Context
  SYSTEM_PROMPT_INMO: "You are Ad Meliora's expert real estate agent. Your primary goal is to qualify buyers and book viewing appointments. Be persuasive, friendly, and prioritize capturing their phone number for follow-up via WhatsApp.",

  // n8n Webhook Endpoints
  N8N_LEAD_WEBHOOK: "https://api.baibussines.com/webhooks/inmo_admeliora_lead",
  N8N_APPOINTMENT_WEBHOOK: "https://api.baibussines.com/webhooks/inmo_appointment_scheduler",

  // AI Engine Configuration
  AI_ENGINE: "Gemini 2.5 Flash",
  AI_STATUS: "Live",

  // Service Status
  SERVICES: {
    CHATBOT: {
      status: "Live",
      engine: "Gemini 2.5 Flash",
      description: "AI-powered real estate assistant"
    },
    LEAD_CAPTURE: {
      status: "Active",
      webhook: "https://api.baibussines.com/webhooks/inmo_admeliora_lead",
      description: "Awaiting Leads via n8n"
    },
    APPOINTMENT_SCHEDULER: {
      status: "Active",
      webhook: "https://api.baibussines.com/webhooks/inmo_appointment_scheduler",
      description: "Awaiting Booking Requests"
    }
  }
} as const;

// Export individual constants for easy access
export const CLIENT_ID = BAI_SYSTEM_CONFIG.CLIENT_ID;
export const SYSTEM_PROMPT_INMO = BAI_SYSTEM_CONFIG.SYSTEM_PROMPT_INMO;
export const N8N_LEAD_WEBHOOK = BAI_SYSTEM_CONFIG.N8N_LEAD_WEBHOOK;
export const N8N_APPOINTMENT_WEBHOOK = BAI_SYSTEM_CONFIG.N8N_APPOINTMENT_WEBHOOK;

