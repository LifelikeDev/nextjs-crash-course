import { useRouter } from "next/router";

const details = () => {
  const router = useRouter();
  console.log(router.query.detailsId);
  return (
    <div>
      <h1>Details page</h1>
    </div>
  );
};

export default details;
