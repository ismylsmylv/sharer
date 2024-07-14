"use client";
import "./style.scss";
const About = () => {
  return (
    <div className="About">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>

      <section>
        <h3>About Sharer</h3>
        <p>Welcome to Sharer!</p>
        <span>
          I&apos;m{" "}
          <a href="https://github.com/ismylsmylv/">Ismayil Ismayilov</a>, the
          developer behind this platform. Sharer is a personal project that
          I&apos;ve created as part of my portfolio to showcase my skills and
          passion for web development. This platform aims to provide users with
          a seamless and reliable way to download game and app APKs.
        </span>
      </section>
      <section>
        <h3>Project Highlights</h3>
        <ul>
          <li>
            <strong>Technology Stack:</strong> The project is built using
            Next.js and TypeScript, ensuring a modern and efficient development
            process. Firebase powers the backend, offering real-time
            capabilities, while Amazon S3 is used for secure and scalable file
            storage.
          </li>
          <li>
            <strong> User Experience:</strong> My focus has been on creating a
            user-friendly interface that allows for easy navigation and quick
            access to the latest and most popular APKs.
          </li>
          <li>
            <strong>Performance:</strong> Leveraging the infrastructure of
            Firebase and Amazon S3, Sharer ensures fast and secure file
            delivery.
          </li>
        </ul>
      </section>
      <section>
        <h3>GitHub Repository</h3>
        <p>
          You can explore the source code and contribute to the project on
          GitHub:
          <a href="https://github.com/ismylsmylv/sharer">
            {" "}
            Sharer GitHub Repository
          </a>
        </p>
        <br />
        <p>
          Thank you for visiting Sharer! Your support and feedback are greatly
          appreciated as I continue to enhance and expand this project.
        </p>
        <br />
        <p>
          Feel free to <a href="mailto: ismylsmylv@gmail.com">reach out</a> with
          any questions or suggestions. Let&apos;s make downloading APKs a
          breeze together!
        </p>
      </section>
    </div>
  );
};

export default About;
