
export type NotificationType =
  | 'xlm_earned'
  | 'new_comment'
  | 'verification'
  | 'donation'
  | 'rank_up'
  | 'system';

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  description: string;
  timestamp: number; // Unix timestamp
  read: boolean;
}