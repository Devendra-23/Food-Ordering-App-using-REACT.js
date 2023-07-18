import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Spicy Thai Green Curry",
    description: "Fragrant, fiery, coconut-infused delight.",
    price: 25.75,
  },
  {
    id: "m2",
    name: "Flavorful Chicken Shawarma",
    description: "Juicy, spiced, tender meat.",
    price: 30.0,
  },
  {
    id: "m3",
    name: "Delicious Chicken Tikka",
    description: "Tandoori-spiced, grilled chicken skewers.",
    price: 24.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy & green!",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
