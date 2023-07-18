import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Hungry? Don't worry, we've got you covered. Order delicious meals from a
        wide range of restaurants, all conveniently available on our
        user-friendly food ordering app. Whether you're a vegetarian, a meat
        lover, or have specific dietary preferences, we have options to satisfy
        every plate. Experience a seamless dining experience with our food
        ordering app.
      </p>

      <p>
        From breakfast to late-night cravings, our food ordering app is here for
        you 24/7. Enjoy a diverse selection of dishes anytime, anywhere, and let
        us take care of your hunger pangs.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients & of course by
        experienced chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
