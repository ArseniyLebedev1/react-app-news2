const DayTimeGreeting = () => {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morining";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "night";
  }
  return <h1 className={StyleSheet.greetTitle}>Good {timeOfDay}!</h1>;
};

export { DayTimeGreeting };
