import { useState, useEffect } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import classNames from 'classnames';

const darkModeAtom = atomWithStorage('darkMode', false);

function App() {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);
  const [time, setTime] = useState({
    minutes: new Date().getMinutes(),
    hours: new Date().getHours(),
    seconds: new Date().getSeconds()
  })

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      setTime({
        minutes: date.getMinutes(),
        hours: date.getHours(),
        seconds: date.getSeconds()
      })
    }, 1000)

    return () => clearInterval(intervalId);
  }, [])

  const convertToTwoDigit = (number) => {
    return number.toLocaleString('en-US', {
      minimumIntegerDigits: 2
    })
  }

  return (
    <section className="flex flex-col items-center justify-center h-screen min-h-[900px] p-16">
      <section className="w-[420px] h-[850px] bg-phone bg-no-repeat m-auto shrink-0">
        <div className="py-[20px] px-[24px] h-full overflow-hidden">
          <div className="flex h-full px-4 py-10">
            <div className={classNames("pt-24 flex items-center flex-col w-full overflow-y-auto no-scrollbar bg-bottom bg-no-repeat transition-all", {
              "bg-dark bg-dark-mode": darkMode,
              "bg-white bg-light-mode": !darkMode,
            })}>
              <div className="">
                <span>{convertToTwoDigit(time.hours)}:</span>
                <span>{convertToTwoDigit(time.minutes)}:</span>
                <span>{convertToTwoDigit(time.seconds)}</span>
                <span>{time.hours >= 12 ? ' PM' : ' AM'}</span>
              </div>

              <p>Asansol, 28 February 2023</p>

              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={darkMode} className="sr-only peer" onClick={() => setDarkMode(!darkMode)} />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default App
