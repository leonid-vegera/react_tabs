import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';

import './Tabs.css';

export const Tabs = ({ tabs, selectedTabId, onSelect }) => (
  <>
    <ul className="list">
      {tabs.map(tab => (
        /* eslint-disable-next-line */
        <li
          className={classNames('item', { active: selectedTabId === tab.id })}
          key={tab.id}
          // !передаём в парам кликнутый Таб
          onClick={() => {
            onSelect(tab);
          }}
        >
          {tab.title}
        </li>
      ))}
    </ul>
    <article className="content">
      {tabs.find(tab => tab.id === selectedTabId).content}
    </article>
  </>
);

Tabs.propTypes = {
  tabs: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
    }),
  ),
  selectedTabId: propTypes.string.isRequired,
  onSelect: propTypes.func.isRequired,
};

Tabs.defaultProps = {
  tabs: [],
};
