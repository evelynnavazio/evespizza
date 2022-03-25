import styles from "../styles/Featured.module.css";
import Image from "next/image";
import React, { useState } from "react";

const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/img/featured.png",
    "/img/featured2.png",
    "/img/featured3.png",
  ];
  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 2);
    }
  };
  console.log(index);
  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        onClick={() => handleArrow("l")}
        style={{ left: 0 }}
      >
        <Image
          src="/img/arrowl.png"
          alt="arrowl"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="pizzas" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>

      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <Image
          src="/img/arrowr.png"
          alt="arrowl"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Featured;
