import React from 'react';
import {node, string} from 'prop-types';

import WixComponent from '../BaseComponents/WixComponent';
import Tooltip from '../Tooltip';
import InfoIcon from '../Icons/dist/components/Info2';

import styles from './InfoTooltip.scss';


class InfoTooltip extends WixComponent {
  static propTypes = {
    content: node.isRequired,
    maxWidth: string,
    textAlign: string,
  };

  static defaultProps = {
    maxWidth: '202px',
    textAlign: 'left',
  };

  render() {
    return (
      <Tooltip
        {...this.props}
        shouldCloseOnClickOutside>
        <span className={styles.icon}>
          <InfoIcon/>
        </span>
      </Tooltip>
    );
  }
}

export default InfoTooltip;
