const userInfo = [

  {
    id: 2,
    name: "Yulduz",
    age: 28,
    job: "dasturchi",
    nationalitey: "Ozbek",
    isMarried: true,
  },
  {
    id: 2,
    name: "Yulduz",
    age: 28,
    job: "dasturchi",
    nationalitey: "Ozbek",
    isMarried: true,
  },
  {
    id: 2,
    name: "Yulduz",
    age: 28,
    job: "dasturchi",
    nationalitey: "Ozbek",
    isMarried: true,
  },
  {
    id: 2,
    name: "Yulduz",
    age: 28,
    job: "dasturchi",
    nationalitey: "Ozbek",
    isMarried: true,
  }
]

function App() {

  return (
    <div className="container">
      <h1>Users information</h1>

      <div className="cards">
       { userInfo.map(user => {
        return (
          <div className="card">
            <div>
              <h2>name: <span className="span">{user.name}</span> </h2>
              <h2>age: <span className="span">{user.age}</span> </h2>
              <h2>job: <span className="span">{user.job}</span> </h2>
              <h2>nationalitey: <span className="span">{user.nationalitey}</span> </h2>
              <h2>isMarried: <span className="span">{user.isMarried}</span> </h2>
            </div>
          </div>
        )
       }) }
      </div>
    </div>
 )        
}

export default App
