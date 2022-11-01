import { useAppDispatch, useAppSelector } from "../../hook";
import { IProduct } from "../../types/types";
import { DeleteButton } from "../ui/buttons/buttons";
import {
  fetchDeleteProduct,
  clearNotice,
} from "../../stor/actions/productActions";
import { Loading } from "../ui/loading/Loading";
import { ErrorMessage } from "../error/ErrorMessage";

interface DeleteProductProps {
  props: IProduct;
}
export const DeleteProduct: React.FC<DeleteProductProps> = ({ props }) => {
  const dispatch = useAppDispatch();
  const { error, loading } = useAppSelector((state) => state.product);

  const deleteProduct = async (e: number) => {
    await dispatch(fetchDeleteProduct(e));
    setTimeout(() => dispatch(clearNotice("")), 4000);
  };

  return (
    <div className="flex flex-col items-center">
      {loading && <Loading />}
      {error && <ErrorMessage error={error} />}

      <p className="mb-2 text-sky-900/70 ">Вы действительно хотите удалить</p>
      <p className=" mb-6 text-lg font-serif font-bold text-slate-800">
        {props.title}?
      </p>
      <DeleteButton
        children={"Удалить"}
        type="button"
        handleClick={() => deleteProduct(props.id)}
      />
    </div>
  );
};
