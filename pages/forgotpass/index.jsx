import React from 'react'
import { motion } from 'framer-motion';
import Forgotpass from '../../components/auth/Forgotpass'
import PagesMetaHead from '../../components/PagesMetaHead';

function index() {
  return (
    <div>
      <PagesMetaHead title="Forgotpass" />
      <motion.div>
        <Forgotpass />
      </motion.div>
    </div>
  )
}
export default index;
