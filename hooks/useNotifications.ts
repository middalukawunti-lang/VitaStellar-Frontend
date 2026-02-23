// /frontend-v2/hooks/useNotifications.ts
import { useEffect } from 'react';
import { useNotificationContext } from '../context/NotificationContext';
import { Notification, NotificationType } from '../components/notifications/types';
import { v4 as uuidv4 } from 'uuid';

const mockNotifications: Omit<Notification, 'id' | 'timestamp' | 'read'>[] = [
  { type: 'xlm_earned', title: 'You earned 5 XLM!', description: 'Congrats on your article!' },
  { type: 'new_comment', title: 'New comment', description: 'John commented on your post.' },
  { type: 'system', title: 'System update', description: 'Mobile app now available.' },
];

export const useNotifications = () => {
  const { addNotification } = useNotificationContext();

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      const mock = mockNotifications[index % mockNotifications.length];
      addNotification({
        id: uuidv4(),
        type: mock.type as NotificationType,
        title: mock.title,
        description: mock.description,
        timestamp: Date.now(),
        read: false,
      });
      index++;
    }, 30000); // every 30s
    return () => clearInterval(interval);
  }, [addNotification]);
};