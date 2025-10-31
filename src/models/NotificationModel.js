
// FILE: src/models/NotificationModel.js
export default function NotificationModel() {
  return {
    id: '',
    message: '',
    audience: [],
    createdAt: new Date(),
    status: 'sent',
  };
}
