import React from 'react'
import { motion } from 'framer-motion';
import Error from '../../components/error/error';
import PagesMetaHead from '../../components/PagesMetaHead';

function index() {
  return (
    <div>
      <PagesMetaHead title="error" />
      <motion.div>
        <Error />
      </motion.div>
    </div>
  )
}
export default index;
