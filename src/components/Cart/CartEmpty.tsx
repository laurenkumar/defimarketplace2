import Button from 'antd';

interface CartEmptyProps {}

const CartEmpty: React.FC<CartEmptyProps> = () => {

  return (
    <div>
      <div>
        <Image
          layout="fill"
          objectFit="contain"
          src="/images/emptyCart.svg"
          alt="empty cart"
        />
      </div>
      <div>
        <h4>Your cart feels lonely.</h4>
        <p>
          Your shopping cart lives to serve. Give it purpose - fill it with
          books, electronicts, videos, etc. and make it happy.
        </p>
        <div>
          <Button onClick={console.log("todo")} variant="primary">
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartEmpty;
