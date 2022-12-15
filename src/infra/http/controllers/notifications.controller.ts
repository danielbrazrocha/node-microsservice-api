import { Body, Controller, Post } from '@nestjs/common';
import { SendNotification } from '@application/use-cases/send-notification';
import { CreateNotificationBody } from '@infra/http/dtos/create-notification-body';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async create(@Body() body: CreateNotificationBody): Promise<any> {
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotification.execute({
      category,
      content,
      recipientId,
    });

    return { notification };
  }
}
