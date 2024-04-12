import { Link } from "react-router-dom";
import Button from "../components/Button";
const NotFoundPage = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center flex-col">
      <h1 className="mb-10">404 NotFoundPage</h1>
      <Button classA>
        <Link className="" to="/">
          Back to HomePage
        </Link>
      </Button>
    </div>
  );
};

export default NotFoundPage;
