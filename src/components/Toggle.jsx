import React from 'react';
import classNames from 'classnames';

const Toggle = ({ checked, onChange }) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        className="sr-only peer"
        onChange={onChange}
      />
      <div className={classNames("relative w-[214px] h-[70px] bg-white rounded-full peer peer-checked:after:left-[calc(100%-65px)] after:content-[''] after:absolute after:top-[50%] after:-translate-y-[50%] after:left-[5px] after:rounded-full after:h-[60px] after:w-[60px] after:bg-dark after:transition-all after:ease-out peer-checked:bg-dark peer-checked:after:bg-white")}></div>
    </label>
  );
}

export default Toggle;
