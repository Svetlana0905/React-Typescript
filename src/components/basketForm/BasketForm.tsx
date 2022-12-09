export const BasketForm: React.FC = () => {
  return (
    <form action="">
      <div className="flex flex-col gap-4 w-[220px] bg-slate-400 max-h-64 rounded-2xl p-6 text-white">
        <p>Title</p>
        <p>count</p>
        <p>price</p>
        <p>total price</p>
        <button>buy</button>
      </div>
    </form>
  );
};
