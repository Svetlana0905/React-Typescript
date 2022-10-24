import { IProduct } from "../../types/types";

interface DeleteButtonProps {
  props: IProduct;
}

export const EditProduct: React.FC<DeleteButtonProps> = ({ props }) => {
  return (
    <div>
      <div>
        <p>Edit</p>
      </div>
    </div>
  );
};
