import styles from "./Discount.module.scss";
export const DiscountBlock = () => {
  return (
    <section className={styles.discountWrapper}>
      <div className={styles.discountContext}>
        <p className={styles.value}>-30%</p>
        <p>на аксессуары</p>
      </div>
      <div className="flex flex-row basis-2/3 justify-between p-14">
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </div>
    </section>
  );
};
