import React ,{useState}from 'react'

const Assignment4 = () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  return (
    <div style={{border: '1px solid red', width: '600px', height: '600px'}}>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/068/222/926/small/close-up-of-a-charming-ginger-kitten-with-big-blue-eyes-resting-on-a-soft-blanket-photo.jpg" alt="cat" width="300px" height="300px" align="center" style={{ position: 'relative', left: x, top: -y }} />
          <br />
          <button style={{ marginLeft: '20px', marginTop: '20px' }} onClick={() => setX(x + 5)}>
            row +
          </button>
          <button style={{ marginLeft: '20px', marginTop: '20px' }} onClick={() => setX(x - 5)}>
            row -
          </button>
          <br /><br />
          <button style={{ marginLeft: '20px', marginTop: '20px' }} onClick={() => setY(y + 5)}>
            column +
          </button>
          <button style={{ marginLeft: '20px', marginTop: '20px' }} onClick={() => setY(y - 5)}>
            column -
          </button>
    </div>
  )
}

export default Assignment4
