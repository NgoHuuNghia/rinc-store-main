// import styles from '../styles/Home.module.css'
import toast from 'react-hot-toast';
const notify = () => toast.success('Here is your toast.');

export default function Home() {
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
    </div>
  );
}
