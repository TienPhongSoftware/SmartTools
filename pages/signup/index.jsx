import { motion } from 'framer-motion';
import Signup from '../../components/auth/Signup'
import PagesMetaHead from '../../components/PagesMetaHead';

function index() {
    return (
        <div>
            <PagesMetaHead title="Signup" />
            <motion.div>
                <Signup />
            </motion.div>
        </div>
    )
}
export default index;