import Card from "./Card";

function PizzaType() {
  return (
    <>
      <h1 className="text-center"> Pizza Types </h1>

      <div className="row">
        <Card
          name="Cheezy Pizza"
          imgSrc="./img/pizza11.jpg"
          description=" A tantalizing blend of gooey, melty cheese atop a crispy crust,
            crafting a savory indulgence that's simply irresistible"
        />
        <Card
          name="Family Pizza"
          imgSrc="./img/pizza6.jpg"
          description="Family pizza, a culinary delight, serves not just as a meal but a shared experience.
           It unites loved ones around a flavorful mosaic, creating cherished moments and lasting memories."
        />
        <Card
          name="All Seasoned Pizza"
          imgSrc="./img/pizza13.jpg"
          description="A fusion of spices, herbs, and diverse toppings, delivering a harmonious blend of flavors perfect for any palate"
        />
        <Card
          name="Vegetable Pizza"
          imgSrc="./img/pizza7.jpg"
          description="A vibrant medley of garden-fresh produce atop a bed of dough, offering a colorful, wholesome, and flavorful culinary delight"
        />
      </div>
    </>
  );
}

export default PizzaType;
