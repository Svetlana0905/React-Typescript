export const DiscountBlock = () => {
  return (
    <section className="flex flex-row w-full">
      <div className="basis-1/3 bg-gray-400 h-full text-2xl text-white text-center">
        <span className="text-9xl font-bold">-30%</span>
        <br />
        <span>на аксессуары</span>
      </div>
      <div className="flex flex-row basis-2/3 justify-between p-14">
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </div>
    </section>
  );
};
