import React from "react";
import Blogcomp from "../../Components/Blogcomp";
import pic1 from "../../Assets/Blogs/pic1.jpg";
import pic2 from "../../Assets/Blogs/pic2.jpg";
import pic3 from "../../Assets/Blogs/pic3.jpg";
import pic4 from "../../Assets/Blogs/pic4.jpg";
import pic5 from "../../Assets/Blogs/pic5.jpg";
import pic6 from "../../Assets/Blogs/pic6.jpg";
import pic7 from "../../Assets/Blogs/pic7.jpg";
import pic8 from "../../Assets/Blogs/pic8.jpg";
import pic9 from "../../Assets/Blogs/pic9.jpg";
import Navbar from "../Components/Navbar/Navbar";

function Blog() {
  const src = [
    `${pic1}`,
    `${pic2}`,
    `${pic3}`,
    `${pic4}`,
    `${pic5}`,
    `${pic6}`,
    `${pic7}`,
    `${pic8}`,
    `${pic9}`,
  ];

  const p = [
    "MUSCLE GAIN DIET: DO YOU KNOW THE BEST 9 FOODS FOR MUSCLE GROWTH?",
    "FOODS TO MAKE YOU RUN FASTER? TOP MARATHON NUTRITION TIPS",
    "NUTRITION FOR RUNNERS >> WHAT SHOULD A RUNNER EAT TO RACE WELL?",
    "GET IN SHAPE WITH THESE WHEELCHAIR EXERCISE TIPS AND WORKOUT",
    "EAT LIKE AN ATHLETE: DIET & NUTRITION TIPS",
    "DIETARY FIBER – BENEFITS FOR ATHLETES",
    "LATE-NIGHT CRAVINGS? 5 HEALTHY SNACKS FOR WEIGHT LOSS",
    "SHOULD YOU EAT CARBS AFTER AN EVENING RUN?",
    "WHAT’S THE BEST PRE WORKOUT SNACK OR POST WORKOUT MEAL?",
  ];

  const a = [
    "https://www.runtastic.com/blog/en/best-muscle-building-foods/",
    "https://www.runtastic.com/blog/en/fall-running-what-you-eat-can-make-you-faster/",
    "https://www.runtastic.com/blog/en/nutrition-tips-increase-mileage/",
    "https://www.runtastic.com/blog/en/wheelchair-exercise-workout/",
    "https://www.runtastic.com/blog/en/nutrition-and-training/",
    "https://www.runtastic.com/blog/en/dietary-fiber-benefits-for-athletes/",
    "https://www.runtastic.com/blog/en/5-healthy-bedtime-snacks-for-weight-loss/",
    "https://www.runtastic.com/blog/en/should-you-eat-carbs-after-an-evening-run/",
    "https://www.runtastic.com/blog/en/fitness-nutrition-101-what-to-eat-pre-post-workout/",
  ];
  return (
    <>
      <Navbar />
      <div className="main-cards">
        <div className="row">
          <div className="col-md-4">
            <Blogcomp src={src[0]} p={p[0]} a={a[0]}></Blogcomp>
          </div>
          <div className="col-md-4">
            <Blogcomp src={src[1]} p={p[1]} a={a[1]}></Blogcomp>
          </div>
          <div className="col-md-4">
            <Blogcomp src={src[2]} p={p[2]} a={a[2]}></Blogcomp>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Blogcomp src={src[3]} p={p[3]} a={a[3]}></Blogcomp>
          </div>
          <div className="col-md-4">
            <Blogcomp src={src[4]} p={p[4]} a={a[4]}></Blogcomp>
          </div>
          <div className="col-md-4">
            <Blogcomp src={src[5]} p={p[5]} a={a[5]}></Blogcomp>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Blogcomp src={src[6]} p={p[6]} a={a[6]}></Blogcomp>
          </div>
          <div className="col-md-4">
            <Blogcomp src={src[7]} p={p[7]} a={a[7]}></Blogcomp>
          </div>
          <div className="col-md-4">
            <Blogcomp src={src[8]} p={p[8]} a={a[8]}></Blogcomp>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
