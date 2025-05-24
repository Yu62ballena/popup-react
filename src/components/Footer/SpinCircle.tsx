type SpinCircleProps = {
  style?: React.CSSProperties;
}

function SpinCircle({style}: SpinCircleProps) {
  return (
    <div 
      className="w-8 h-8 bg-transparent border-4 border-pink border-t-pink-300 rounded-full animate-circle-spin" 
      style={style}
      />
  )
}

export default SpinCircle;