import Button from '../../atoms/Button/Button';
import styles from './JournalControls.module.css';
import RightArrow from '../../../assets/icons/right-arrow.svg?react';
import LeftArrow from '../../../assets/icons/left-arrow.svg?react';
import Grid from '../../../assets/icons/grid.svg?react';

const JournalControls = ({ onPrev, onNext, onList }) => {
  return (
    <div className={styles.JournalControlsContainer}>
      <Button variant='iconButton' onClick={onPrev}> <LeftArrow /> </Button>
      <Button variant='iconButton' onClick={onList}> <Grid /> </Button>
      <Button variant='iconButton' onClick={onNext}> <RightArrow /> </Button>
    </div>
  );
};

export default JournalControls;