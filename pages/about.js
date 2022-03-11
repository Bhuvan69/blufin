import DefaultLayout from "../components/DefaultLayout";
import PageHeader from "../components/PageHeader/PageHeader";

const About = (props) => {
  return (
    <DefaultLayout>
      <div>
        <PageHeader
          title="About Us"
          image="https://res.cloudinary.com/blufin/image/upload/v1646979514/blufin/gallery/PXL_20210815_073448368_e2iafv.jpg"
        />
        <div>
          BluFin is a sports foundation founded by Sharath Gayakwad, Paralympian
          &amp; Arjuna Awardee to train under privilege kids and specially abled
          kids with a vision to make them international champions.
          <br />
          <strong>Vision</strong>: To have over 50% of the athletes representing
          India at the olympics and Paralympics from Blufin.
          <br />
          <strong>Mission</strong>: To establish a state of the art sport
          facilities to train, support and produce international level athletes.
        </div>
      </div>
    </DefaultLayout>
  );
};

export default About;
