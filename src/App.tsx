import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import "./App.css"
import Modal from "./components/Modal"

function App() {
  const [modalOpen, setModalOpen] = useState(false)

  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)

  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="save-button"
        onClick={() => (modalOpen ? close() : open())}
      >
        Launch modal{" "}
      </motion.button>

      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpen && (
          <Modal handleClose={close} text="Hi, mom!" variant="newspaper" />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
