import hiringImg from "../../assets/hiring.png";

function Experience() {
  return (
    <section>
      <div className="experience_container">
        <h1>Car Hiring Experirnce in Kenya</h1>
      </div>
      <div className="experience_content">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          praesentium beatae molestias quia quibusdam delectus ea fuga sunt unde
          nam, nisi animi similique asperiores eligendi illo aspernatur
          repudiandae earum nemo reprehenderit rem consequatur neque. Qui, at?
          Quibusdam non laborum odio!
        </p>
        <img src={hiringImg} alt="" />
      </div>
      <div className="experience_content">
        <img src={hiringImg} alt="" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          praesentium beatae molestias quia quibusdam delectus ea fuga sunt unde
          nam, nisi animi similique asperiores eligendi illo aspernatur
          repudiandae earum nemo reprehenderit rem consequatur neque. Qui, at?
          Quibusdam non laborum odio!
        </p>
      </div>
    </section>
  );
}

export default Experience;
