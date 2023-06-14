import React from 'react'
import { motion } from 'framer-motion';
import CheckMail from '../../components/checkmail/checkmail';
import PagesMetaHead from '../../components/PagesMetaHead';

function index() {
  return (
    <div>
      <PagesMetaHead title="error" />
      <motion.div>
        <CheckMail />
      </motion.div>
    </div>
  )
}
export default index;
