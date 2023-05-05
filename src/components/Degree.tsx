const Degree = ({ temp }: { temp: number }): JSX.Element => (
    <>
      <span>
        {temp}
        <sup>*c</sup>
      </span>
    </>
  )
  
  export default Degree