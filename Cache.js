import React, { useState, Suspense } from "react";
import { unstable_createResource } from "react-cache";

const DogResource = unstable_createResource(async function(prop) {
  const res = await fetch(`https://dog.ceo/api/breed/${prop}/images/random`);
  const { message } = await res.json();
  return message;
});

const Doggo = ({ breed }) => {
  const url = DogResource.read(breed);
  return <img src={url} alt={breed} />;
};

const CacheExample = () => {
  const [breed, setBreed] = useState("hound");
  return (
    <Suspense fallback={<h1>LOADING GOOD BOYS</h1>}>
      <div>
        <input onBlur={e => setBreed(e.target.value)} />
        <br />
        <Doggo breed={breed} />
      </div>
    </Suspense>
  );
};

export default CacheExample;
