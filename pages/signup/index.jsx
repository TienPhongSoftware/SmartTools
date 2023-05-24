import { motion } from 'framer-motion';
import Signup from '../../components/auth/Signup'
import PagesMetaHead from '../../components/PagesMetaHead';

function login() {
    return (
        <div>
            <PagesMetaHead title="Login" />
            <motion.div>
                <Signup />
            </motion.div>
        </div>
    )
}
export default login;