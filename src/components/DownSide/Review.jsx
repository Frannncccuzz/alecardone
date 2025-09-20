import Button from "../Button";
import GoogleReviewsWidget from "google-reviews-widget";

export default function Review({ title, button }) {
  return (
    <section className="relative overflow-hidden py-10 w-full ">
      <div className="relative z-20">
        <h2 className="text-3xl font-semibold mb-4 text-center text-[#E9D9B3]">
          {title}
        </h2>
        <div className="text-[#E9D9B3]">
          <GoogleReviewsWidget instanceId="PqEjO8oaehBTV2loQ0B6" />
        </div>
        <Button>{button}</Button>
      </div>
    </section>
  );
}
