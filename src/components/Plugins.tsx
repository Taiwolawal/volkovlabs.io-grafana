import React from 'react';
import { PluginList } from '../constants';
import { Plugin } from './Plugin';

/**
 * Plugins
 */
export const Plugins = (): JSX.Element => {
  return (
    <section>
      <div className="container text--center">
        <div className="row">
          {PluginList.map((props, idx) => (
            <Plugin key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plugins;
