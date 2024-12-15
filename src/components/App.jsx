import { useState } from 'react';
import HexInput from './HexInput';

const App = (props) => {
   const [isWarning, setIsWarning] = useState(false);
   const [color, setColor] = useState(props.color);
   const [result, setResult] = useState(convert(props.color));

   function convert(hex) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      if (!result) {
         return null;
      }
      result.shift();
      return result ? `rgb(${result.map((i) => parseInt(i, 16)).join(', ')})` : null;
   }

   function checkColor(color) {
      return /^#?([\da-f]{6})$/i.test(color);
   }

   function fixColor(color) {
      return color[0] === '#' ? color.slice(0, 7) : `#${color.slice(0, 6)}`;
   }

   function change(color) {
      if (checkColor(color)) {
         color = fixColor(color);
         setColor(color);
         setIsWarning(false);
         setResult(convert(color));
      } else {
         setIsWarning(true);
         setColor(fixColor(color));
         setResult('Ошибка!');
      }
   }

   const propsStyle = isWarning ? { className: 'warning' } : { style: { backgroundColor: color } };

   return (
      <figure {...propsStyle}>
         <HexInput value={color} onChange={change} />
         <div className='message js-message'>{result}</div>
      </figure>
   );
};

export default App;
