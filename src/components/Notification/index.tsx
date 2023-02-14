import { motion } from "framer-motion"
import { remove } from "../../arr-utils"

const notificationVariants = {
  initial: {
    opacity: 0,
    y: 50,
    scale: 0.2,
    transition: { duration: 0.1 },
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.2,
    transition: { ease: "easeOut", duration: 0.15 },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.1 },
  },
}

const styleType = (style: string) => {
  // Controlled by selection menu
  switch (style) {
    case "success":
      return { background: "linear-gradient(15deg, #6adb00, #04e800)" }
    case "error":
      return { background: "linear-gradient(15deg, #ff596d, #d72c2c)" }
    case "warning":
      return { background: "linear-gradient(15deg, #ffac37, #ff9238)" }
    case "light":
      return { background: "linear-gradient(15deg, #e7e7e7, #f4f4f4)" }
    default:
      return { background: "linear-gradient(15deg, #202121, #292a2d)" }
  }
}

const CloseButton = ({ handleClose, color }) => (
  <motion.div
    whileHover={{ scale: 1.2 }}
    onClick={handleClose}
    className="close"
  >
    <svg width="18" height="18" viewBox="0 0 23 23">
      <Path color={color} d="M 3 16.5 L 17 2.5" />
      <Path color={color} d="M 3 2.5 L 17 16.346" />
    </svg>
  </motion.div>
)

type NotificationProps = {
  notifications: Array<any>
  setNotifications: () => void
  notification: any
}

const Notification = ({
  notifications,
  setNotifications,
  notification,
}: NotificationProps) => {
  const { text, style } = notification

  const handleClose = () =>
    setNotifications(remove(notifications, notification))

  return (
    <motion.li
      style={styleType(style)}
      variants={notificationVariants}
      whileHover="hover"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h3 style={{ color: style ? "#030303" : "#929292" }}>{text}</h3>
      <CloseButton handleClose={handleClose} color="" />
    </motion.li>
  )
}

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke={props.color}
    strokeLinecap="square"
    {...props}
  />
)
