import './Toast.css'

interface ToastProps {
  message: string
  visible: boolean
}

const Toast = ({ message, visible }: ToastProps) => {
  if (!visible) return null

  return <div className={`toast ${visible ? 'toast-visible' : ''}`}>{message}</div>
}

export default Toast
