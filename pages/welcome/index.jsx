import React from 'react'
import { motion } from 'framer-motion';
import Welcome from '../../components/welcome/welcome'
import PagesMetaHead from '../../components/PagesMetaHead';

function index() {
  return (
    <div>
      <PagesMetaHead title="welcome" />
      <motion.div>
        <Welcome />
      </motion.div>
    </div>
  )
}
export default index;
