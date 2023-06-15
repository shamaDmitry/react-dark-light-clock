import { useState } from 'react';
import { useAtom } from 'jotai';
import classNames from 'classnames';
import dayjs from 'dayjs';

import Toggle from './components/Toggle';

import { darkModeAtom } from './atoms';
import { geocode } from './BDCReverseGeocode';
import Clock from './components/Clock';

function App() {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);
  const [city, setCity] = useState(() => {
    geocode.getClientLocation(function (result) {
      setCity(result.city);
    });
  });

  return (
    <section className="flex flex-col items-center justify-center h-screen min-h-[950px] p-16">
      <section className="rounded-[56px] overflow-hidden relative w-[420px] h-[898px] py-[2px] m-auto shrink-0 after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-pixel after:bg-no-repeat after:bg-center after:bg-cover after:pointer-events-none">
        <div className="h-full overflow-hidden">
          <div className="flex h-full">
            <div
              className={classNames("pt-40 flex items-center flex-col w-full overflow-y-auto no-scrollbar bg-bottom bg-no-repeat bg-contain transition-all", {
                "bg-dark bg-dark-mode text-white": darkMode,
                "bg-white bg-light-mode text-dark": !darkMode,
              })}
            >
              <Clock />

              <p className="text-lg font-medium mb-[34px]">
                {city}, {dayjs(new Date()).format('DD MMMM YYYY')}
              </p>

              <Toggle
                checked={!darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default App
