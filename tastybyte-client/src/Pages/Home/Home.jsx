import Banner from '../../Components/Banner/Banner'
import PopularResturent from '../../Components/PopularResturent/PopularResturent'
import { motion } from 'framer-motion'
import TrandingFood from '../../Components/TrandingFood/TrandingFood'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Banner />
      <TrandingFood />
      <PopularResturent />
    </motion.div>
  )
}

export default Home;