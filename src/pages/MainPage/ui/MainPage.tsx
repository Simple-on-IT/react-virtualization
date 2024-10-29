import { ListElement } from '@/shared/ui/ListElement/ListElement';
import { getTasks } from '../model/lib/getTasks';
import styles from './MainPage.module.scss';
import { Virtuoso } from 'react-virtuoso';
const tasks = getTasks();

export const MainPage = () => {
  return (
    <ul className={styles.pageContainer}>
      {tasks.map((task) => (
        <ListElement
          key={task.id}
          checked={task.checked}
          name={task.name}
          time={task.time}
        />
      ))}
    </ul>
  )
}