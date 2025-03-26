import styles from '../general_comps/stats-section.module.css'
import { FaUsers, FaTasks, FaLayerGroup } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const StatsSection = () => {
  const [users, setUsers] = useState(0);
  const [exercises, setExercises] = useState(0);
  const [topics, setTopics] = useState(0);

  useEffect(() => {
    let usersTarget = 5000;
    let exercisesTarget = 365;
    let topicsTarget = 14;

    let duration = 1500; // זמן כולל במילישניות
    let frameRate = 30; // כל כמה מילישניות נעדכן
    let steps = duration / frameRate;

    let usersIncrement = Math.ceil(usersTarget / steps);
    let exercisesIncrement = Math.ceil(exercisesTarget / steps);
    let topicsIncrement = Math.ceil(topicsTarget / steps);

    let counter = 0;
    const interval = setInterval(() => {
      counter++;
      setUsers((prev) => {
        const next = prev + usersIncrement;
        return next >= usersTarget ? usersTarget : next;
      });
      setExercises((prev) => {
        const next = prev + exercisesIncrement;
        return next >= exercisesTarget ? exercisesTarget : next;
      });
      setTopics((prev) => {
        const next = prev + topicsIncrement;
        return next >= topicsTarget ? topicsTarget : next;
      });

      if (counter >= steps) {
        clearInterval(interval);
      }
    }, frameRate);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.statsSection}>
      <div className={styles.statBox}>
        <FaUsers className={styles.icon} />
        <div className={styles.number}>{users.toLocaleString()}</div>
        <div className={styles.label}>משתמשים רשומים</div>
      </div>

      <div className={styles.statBox}>
        <FaTasks className={styles.icon} />
        <div className={styles.number}>{exercises}</div>
        <div className={styles.label}>חופשות</div>
      </div>

      <div className={styles.statBox}>
        <FaLayerGroup className={styles.icon} />
        <div className={styles.number}>{topics}</div>
        <div className={styles.label}>טיולים</div>
      </div>
    </section>
  );
};

export default StatsSection;
