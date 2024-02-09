import { motion } from 'framer-motion'

const AddResturent = () => {


    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h1 className='text-3xl font-bold text-center'>AddResturent page</h1>
        </motion.div>
    )
}

export default AddResturent