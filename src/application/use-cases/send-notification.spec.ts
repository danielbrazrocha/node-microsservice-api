import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { SendNotification } from '@application/use-cases/send-notification';

describe.only('Send notification', () => {
  it.only('should be able to send a notification', async () => {
    // Setup
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    // Exercise
    const { notification } = await sendNotification.execute({
      category: 'social',
      content: 'THis is a notification',
      recipientId: 'example-recipient-id',
    });

    // Verify
    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
