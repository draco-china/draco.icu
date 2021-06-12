/*
 * @Description: your description
 * @Module: module.name
 * @Author: Draco
 * @Email: Draco.coder@gmail.com
 * @Github: https://github.com/draco-china
 * @Date: 2021-06-12 19:53:28
 * @LastEditTime: 2021-06-12 20:02:05
 */
import React from 'react';
import './index.less';

const Progress: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  return (
    <div
      className="myprogress"
      style={isLoading ? { display: 'block' } : { display: 'none' }}
    >
      <div className="bar">
        <div className="peg"></div>
      </div>
      <div className="spinner">
        <div className="spinner-icon"></div>
      </div>
    </div>
  );
};

export default Progress;
