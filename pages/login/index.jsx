import React from 'react'
import { motion } from 'framer-motion';
import Login from '../../components/auth/Login'
import PagesMetaHead from '../../components/PagesMetaHead';

function index() {
  return (
    <div>
      <PagesMetaHead title="Login" />
      <motion.div>
        <Login />
      </motion.div>
    </div>
  )
}
export default index;
