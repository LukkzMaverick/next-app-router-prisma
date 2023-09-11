import Form from "@/components/reserve/Form";
import ReservesHeader from "@/components/reserve/ReservesHeader";
import { Metadata } from "next";

type Props = {};

export const metadata: Metadata = {
  title: "Reserve",
};

const ReservePage = (props: Props) => {
  return (
    <div className="border-t h-screen">
      <div className="py-9 w-3/5 m-auto">
        <ReservesHeader />
        <Form />
      </div>
    </div>
  );
};

export default ReservePage;
