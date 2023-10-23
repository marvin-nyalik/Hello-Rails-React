import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGreeting } from "../store/greetingReducer";

const Greeting = () => {
  const dispatch = useDispatch();
  const { greeting } = useSelector((state) => state.greetingStore.greeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  if (!greeting) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>{greeting}</h1>
    </>
  );
}

export default Greeting;
