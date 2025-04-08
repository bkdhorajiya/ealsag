// src/config/admin.ts

export const ADMIN_EMAILS = [
  "souradyuti@iitbhilai.ac.in",
  "bhaktid@iitbhilai.ac.in",
] as const;

export type AdminEmail = (typeof ADMIN_EMAILS)[number];

export const isAdmin = (email: string): boolean => {
  return ADMIN_EMAILS.includes(email as AdminEmail);
};
