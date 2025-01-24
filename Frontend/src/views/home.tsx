const Home = () => {
  return (
    <div className="flex flex-col gap-20 items-center justify-center h-screen text-3xl ">
        
      <div  style={{ perspective: '1000000px' }}>
        <div
          className="relative animate-rotateCube size-[200px]"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'rotateX(10deg) rotateY(-10deg)',
          }}
        >
          <div
            className="absolute  size-[200px] grid grid-cols-3"
            style={{
              transform: 'translateZ(100px)',
            }}
          >
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className="cube bg-gradient-to-r from-red-500 to-red-600 border-2 border-black/80"
              ></div>
            ))}
          </div>

          <div
            className="absolute  size-[200px] grid grid-cols-3"
            style={{
              transform: 'translateZ(-100px)',
            }}
          >
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className="cube bg-gradient-to-r from-blue-500 to-blue-600 border-2 border-black/80"
              ></div>
            ))}
          </div>

          <div
            className="absolute  size-[200px] grid grid-cols-3"
            style={{
              transform: 'translateX(-100px) rotateY(90deg)',
            }}
          >
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className="cube bg-gradient-to-r from-green-500 to-green-600 border-2 border-black/80"
              ></div>
            ))}
          </div>

          <div
            className="absolute  size-[200px] grid grid-cols-3"
            style={{
              transform: 'translateX(100px) rotateY(-90deg)',
            }}
          >
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className="cube bg-gradient-to-r from-white to-white border-2 border-black/80"
              ></div>
            ))}
          </div>

          <div
            className="absolute  size-[200px] grid grid-cols-3"
            style={{
              transform: 'translateY(-100px) rotateX(90deg)',
            }}
          >
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className="cube bg-gradient-to-r from-yellow-600 to-yellow-700 border-2 border-black/80"
              ></div>
            ))}
          </div>

          <div
            className="absolute  size-[200px] grid grid-cols-3"
            style={{
              transform: 'translateY(100px) rotateX(-90deg)',
            }}
          >
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className="cube bg-gradient-to-r from-orange-600 to-orange-700 border-2 border-black/80"
              ></div>
            ))}
          </div>
        </div>
      </div>
      <div className="font-bold text-white tracking-widest text-center">SOON TO BE A GREAT PRODUCT</div>
    </div>
  )
}

export default Home
