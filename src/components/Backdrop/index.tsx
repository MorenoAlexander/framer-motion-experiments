import { motion } from "framer-motion"
import { ReactNode } from "react";

type BackdropProps = {
    children: ReactNode;
    onClick: () => void;
}

const Backdrop =  ({children, onClick} : BackdropProps) => {

    return (<motion.button onClick={onClick} className="backdrop" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
        {children}
    </motion.button>)
}

export default Backdrop;