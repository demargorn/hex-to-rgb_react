const HexInput = ({ value, onChange }) => {
   return (
      <input
         value={value}
         onChange={(e) => onChange(e.target.value)}
         type='text'
         className='hex-field js-hex-field'
         placeholder='#000000'
      />
   );
};

export default HexInput;
