import "./About.css";
import { GiBullseye } from "react-icons/gi";
import { FaClipboard } from "react-icons/fa";
import { TbBriefcase2Filled } from "react-icons/tb";
import { FaTrophy } from "react-icons/fa";

function About() {
  return (
    <section className="about_wrapper">
      <img src="" alt="" className="content_header" />
      <div className="about_wrappers">
        <div className="about_info">
          <h1>Vision</h1>
          <GiBullseye />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          quisquam sit rerum voluptas assumenda autem harum nulla, facere
          ducimus ipsa deserunt. Ipsum odio laudantium, iure tempora laboriosam
          cumque dolore qui, laborum dolor quam voluptate quas. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Deleniti totam itaque
          quasi reprehenderit ipsam ratione dicta quod autem corporis at quos
          hic numquam quisquam, ut, quibusdam culpa a tempore labore!
        </p>
      </div>

      <div className="about_wrappers">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          reiciendis, culpa odit obcaecati quo vel ducimus, accusantium eveniet,
          nostrum ab qui esse labore. Nesciunt facilis maxime assumenda fuga
          aliquid alias excepturi, quaerat tempora distinctio dicta?Lorem ipsum
          dolor sit, amet consectetur adipisicing elit. Adipisci provident,
          natus labore quod architecto eveniet molestias! Quos ratione velit
          officiis voluptatem, quisquam commodi ad! Debitis eius quas id saepe.
          Necessitatibus!
        </p>
        <div className="about_info">
          <h1>Mission</h1>
          <TbBriefcase2Filled />
        </div>
      </div>

      <div className="about_wrappers">
        <div className="about_info">
          <h1>What we do</h1>
          <FaClipboard />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          quisquam sit rerum voluptas assumenda autem harum nulla, facere
          ducimus ipsa deserunt. Ipsum odio laudantium, iure tempora laboriosam
          cumque dolore qui, laborum dolor quam voluptate quas. Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Odio neque in nam. Unde
          ratione architecto, nobis ad iusto dolores impedit doloremque
          assumenda natus maxime autem suscipit, exercitationem, ullam aliquid
          cumque!
        </p>
      </div>

      <div className="about_wrappers">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          reiciendis, culpa odit obcaecati quo vel ducimus, accusantium eveniet,
          nostrum ab qui esse labore. Nesciunt facilis maxime assumenda fuga
          aliquid alias excepturi, quaerat tempora distinctio dicta? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Eius corporis, nostrum
          magni iusto sapiente officia animi recusandae eos vel earum odio, eum
          commodi tempora cumque molestiae nemo ea voluptatibus rem?
        </p>
        <div className="about_info">
          <h1>Mission</h1>
          <FaTrophy />
        </div>
      </div>
    </section>
  );
}

export default About;
