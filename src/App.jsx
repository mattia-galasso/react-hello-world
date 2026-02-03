import img from "./assets/img/first_img.jpg";

function App() {
  return (
    <>
      <h1 class="center-text">Il Mio Blog</h1>
      <p class="center-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        nisi et corrupti aliquid magni! Rerum nulla aspernatur non harum
        veritatis maiores necessitatibus earum quos et aut sed inventore, ut
        doloribus.
      </p>

      <img src={img} alt="First Blog Image" class="img-frame" />
    </>
  );
}

export default App;
