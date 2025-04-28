import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OneSignal } from '@awesome-cordova-plugins/onesignal/ngx';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notifications = new BehaviorSubject<string[]>([]);
  notifications$ = this.notifications.asObservable();

  constructor(private oneSignal: OneSignal) {}

  initOneSignal() {
    this.oneSignal.startInit('91ad2e61-a8a0-4399-95b7-da8ce19c6c36', '725369013299');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

    // ✅ Notification received
    this.oneSignal.handleNotificationReceived().subscribe((data: any) => {
      const message = data.payload.body;
      this.addNotification(message);
      console.log('✅ Notification Received:', message);
    });

    // ✅ Notification opened
    this.oneSignal.handleNotificationOpened().subscribe((data: any) => {
      const message = data.notification.payload.body;
      console.log('📬 Notification Opened:', message);
    });

    this.oneSignal.endInit();

    // ✅ Get Player ID (User ID)
    this.oneSignal.getIds().then(ids => {
      console.log('🆔 OneSignal Player ID:', ids.userId);
      // You can send this to your backend here if needed
    });

    // ✅ Check subscription status
    this.oneSignal.getPermissionSubscriptionState().then(state => {
      console.log('🔔 Permission Prompted:', state.permissionStatus.hasPrompted);
      console.log('🔔 Is Subscribed:', state.subscriptionStatus.subscribed);
      console.log('🆔 Subscribed Player ID:', state.subscriptionStatus.userId);
    });
  }

  private addNotification(message: string) {
    const current = this.notifications.getValue();
    this.notifications.next([message, ...current]);
  }
}
