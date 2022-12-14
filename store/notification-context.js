import { createContext, useState } from 'react'

const NotificationContext = createContext({
  notification: null, //{title, message, status}
  showNotification: function(notificationData) { },
  hideNotification: function() { }
})

export function NotificationContextProvider(props) {
  const [activeNotifiction, setActiveNotification] = useState()

  function showNotificationHandler(notificationData) {
    setActiveNotification(notificationData)
  }

  function hideNotificationHandler() {
    setActiveNotification(null)
  }

  const context = {
    notification: activeNotifiction,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler
  }

  return (
    <NotificationContext.Provider value={context}>
      {props.children}
    </NotificationContext.Provider>
  )
}

export default NotificationContext
