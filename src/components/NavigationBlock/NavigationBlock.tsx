import React, { memo, useState } from 'react';
import { Link } from 'react-scroll';
import cn from 'classnames';

import { ReactComponent as Active } from '../../assets/dot_filled.svg';
import { ReactComponent as Disable } from '../../assets/dot_not_shaded.svg';

import styles from './navigationBlock.module.scss';

type TNativbigationBlock = {
  steps: [];
};

const NavigationBlock = ({ steps }: TNativbigationBlock) => {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div className={styles.background}>
      <div className={styles.stickyBox}>
        <div className={styles.dotInner}>
          {steps?.map((step) => (
            <div className={styles.stepItem} key={step.id}>
              <Link
                activeClass="active"
                to={step.id}
                spy
                smooth
                className={cn(
                  styles.label,
                  currentStep === step.id && styles.labelActive
                )}
                onClick={() => setCurrentStep(step.id)}
              >
                {step.value}
              </Link>
              <div className={styles.dotsBox}>
                {currentStep === step.id ? (
                  <Active className={styles.dotsSvg} />
                ) : (
                  <Disable />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(NavigationBlock);
