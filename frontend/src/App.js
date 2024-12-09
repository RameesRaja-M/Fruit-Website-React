import m1 from "./asserts/images/arrow_icon.png"
import m2 from "./asserts/images/right_img.png"


function App() {
  return (
    <div>
           <div class="fruit-container">
        <form action="http://localhost:5000/fname?FriutName=Apple" class="fruit-left" method="get">
            <div class="fruit-left-title">
                <h2>Fruit Name Add</h2>
                <hr></hr>
            </div>
            <input name="FriutName" placeholder="Enter Fruit Name" class="fruit-input"></input>
            <button class="fruit-left-button" type="submit">Add Friut <img src={m1} alt="m1"></img> </button>
        </form>
        <div class="fruit-right">
            <img src={m2} alt="m2"></img>
        </div>
    </div>
    </div>
  )
}

export default App;
