import React from "react";
import "../Blog/blog.css";
// import Blogcomp from "../../Components/BlogComp";
import pic1 from "../../Assets/Blogs/pic1.jpg";
import pic2 from "../../Assets/Blogs/pic2.jpg";
import pic3 from "../../Assets/Blogs/pic3.jpg";
import pic4 from "../../Assets/Blogs/pic4.jpg";
import pic5 from "../../Assets/Blogs/pic5.jpg";
import pic6 from "../../Assets/Blogs/pic6.jpg";
import pic7 from "../../Assets/Blogs/pic7.jpg";
import pic8 from "../../Assets/Blogs/pic8.jpg";
import pic9 from "../../Assets/Blogs/pic9.jpg";
import Navbar from "../../Components/Navbar/Navbar";

function Blog() {
  const blogs = [
    {
      src: `${pic1}`,
      p: "MUSCLE GAIN DIET: DO YOU KNOW THE BEST 9 FOODS FOR MUSCLE GROWTH?",
      a: "https://www.runtastic.com/blog/en/best-muscle-building-foods/",
    },
    {
      src: `${pic2}`,
      p: "FOODS TO MAKE YOU RUN FASTER? TOP MARATHON NUTRITION TIPS",
      a: "https://www.runtastic.com/blog/en/fall-running-what-you-eat-can-make-you-faster/",
    },
    {
      src: `${pic3}`,
      p: "NUTRITION FOR RUNNERS >> WHAT SHOULD A RUNNER EAT TO RACE WELL?",
      a: "https://www.runtastic.com/blog/en/nutrition-tips-increase-mileage/",
    },
    {
      src: `${pic4}`,
      p: "GET IN SHAPE WITH THESE WHEELCHAIR EXERCISE TIPS AND WORKOUT",
      a: "https://www.runtastic.com/blog/en/wheelchair-exercise-workout/",
    },
    {
      src: `${pic5}`,
      p: "EAT LIKE AN ATHLETE: DIET & NUTRITION TIPS",
      a: "https://www.runtastic.com/blog/en/nutrition-and-training/",
    },
    {
      src: `${pic6}`,
      p: "DIETARY FIBER – BENEFITS FOR ATHLETES",
      a: "https://www.runtastic.com/blog/en/dietary-fiber-benefits-for-athletes/",
    },
    {
      src: `${pic7}`,
      p: "LATE-NIGHT CRAVINGS? 5 HEALTHY SNACKS FOR WEIGHT LOSS",
      a: "https://www.runtastic.com/blog/en/5-healthy-bedtime-snacks-for-weight-loss/",
    },
    {
      src: `${pic8}`,
      p: "SHOULD YOU EAT CARBS AFTER AN EVENING RUN?",
      a: "https://www.runtastic.com/blog/en/should-you-eat-carbs-after-an-evening-run/",
    },
    {
      src: `${pic9}`,
      p: "WHAT’S THE BEST PRE WORKOUT SNACK OR POST WORKOUT MEAL?",
      a: "https://www.runtastic.com/blog/en/fitness-nutrition-101-what-to-eat-pre-post-workout/",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="main-cards">
        {blogs !== [] &&
          blogs.map((params) => (
            <Blogcomp src={params.src} p={params.p} a={params.a} />
          ))}
      </div>
    </>
  );
}

export default Blog;
