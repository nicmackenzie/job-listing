import { useNavigate } from 'react-router-dom';
import NewJo from '../components/NewJob/NewJob';
import { useContext } from 'react';
import { AppContext } from '../context/app-context';

function NewJob() {
  const { onAddJob } = useContext(AppContext);
  const navigate = useNavigate();

  const onAdd = job => {
    onAddJob(job);
    navigate('/');
  };

  return <NewJo onAddJob={onAdd} />;
}

export default NewJob;
